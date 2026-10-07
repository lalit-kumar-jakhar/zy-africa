import base64
import hashlib
import http.server
import json
import os
import secrets
import sys
import urllib.parse

PORT = 8765
REDIRECT_URI = f"http://127.0.0.1:{PORT}/oauth2callback"
CLIENT_ID = os.environ["GOOGLE_OAUTH_CLIENT_ID"]
SCOPES = [
    "https://www.googleapis.com/auth/analytics",
    "https://www.googleapis.com/auth/analytics.edit",
    "https://www.googleapis.com/auth/analytics.readonly",
    "https://www.googleapis.com/auth/analytics.manage.users.readonly",
    "https://www.googleapis.com/auth/webmasters",
    "https://www.googleapis.com/auth/tagmanager.readonly",
    "https://www.googleapis.com/auth/tagmanager.edit.containers",
    "https://www.googleapis.com/auth/tagmanager.edit.containerversions",
    "https://www.googleapis.com/auth/tagmanager.publish",
]
HERE = os.path.dirname(os.path.abspath(__file__))

verifier = base64.urlsafe_b64encode(secrets.token_bytes(40)).rstrip(b"=").decode()
challenge = base64.urlsafe_b64encode(
    hashlib.sha256(verifier.encode()).digest()
).rstrip(b"=").decode()
state = secrets.token_urlsafe(24)

params = {
    "client_id": CLIENT_ID,
    "redirect_uri": REDIRECT_URI,
    "response_type": "code",
    "scope": " ".join(SCOPES),
    "access_type": "offline",
    "prompt": "consent",
    "code_challenge": challenge,
    "code_challenge_method": "S256",
    "state": state,
}
auth_url = "https://accounts.google.com/o/oauth2/v2/auth?" + urllib.parse.urlencode(params)

json.dump({"verifier": verifier, "state": state, "redirect_uri": REDIRECT_URI},
          open(os.path.join(HERE, "pending.json"), "w"))
open(os.path.join(HERE, "auth_url.txt"), "w").write(auth_url)
print(auth_url)

class Handler(http.server.BaseHTTPRequestHandler):
    def log_message(self, *a):
        pass

    def do_GET(self):
        qs = urllib.parse.urlparse(self.path).query
        got = urllib.parse.parse_qs(qs)
        self.send_response(200)
        self.send_header("Content-Type", "text/html")
        self.end_headers()
        if "error" in got:
            self.wfile.write(f"<h1>Denied or errored</h1><p>{got['error'][0]}</p>".encode())
            json.dump({"error": got["error"][0]}, open(os.path.join(HERE, "code.json"), "w"))
        elif got.get("state", [""])[0] != state:
            self.wfile.write(b"<h1>State mismatch, rejected</h1>")
            json.dump({"error": "state_mismatch"}, open(os.path.join(HERE, "code.json"), "w"))
        else:
            self.wfile.write(b"<h1>Done</h1><p>You can close this tab.</p>")
            json.dump({"code": got["code"][0]}, open(os.path.join(HERE, "code.json"), "w"))
        import threading
        threading.Thread(target=self.server.shutdown).start()

srv = http.server.HTTPServer(("127.0.0.1", PORT), Handler)
srv.serve_forever()
