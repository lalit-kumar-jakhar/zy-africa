import json
import os
import sys
import urllib.request
import urllib.parse

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from zy_paths import zy  # noqa: E402

HERE = os.path.dirname(os.path.abspath(__file__))
TOKEN_PATH = zy(".google-oauth-token.json")

code_data = json.load(open(os.path.join(HERE, "code.json")))
if "error" in code_data:
    sys.exit(f"ABORT: the consent step returned an error: {code_data['error']}")

pending = json.load(open(os.path.join(HERE, "pending.json")))
client_id = os.environ["GOOGLE_OAUTH_CLIENT_ID"]
client_secret = os.environ["GOOGLE_OAUTH_CLIENT_SECRET"]

body = urllib.parse.urlencode({
    "code": code_data["code"],
    "client_id": client_id,
    "client_secret": client_secret,
    "redirect_uri": pending["redirect_uri"],
    "grant_type": "authorization_code",
    "code_verifier": pending["verifier"],
}).encode()

req = urllib.request.Request(
    "https://oauth2.googleapis.com/token", data=body,
    headers={"Content-Type": "application/x-www-form-urlencoded"},
)
try:
    with urllib.request.urlopen(req, timeout=30) as r:
        tok = json.loads(r.read())
except urllib.error.HTTPError as e:
    detail = e.read().decode(errors="replace")
    sys.exit(f"ABORT: token exchange failed, HTTP {e.code}: {detail}")

if "refresh_token" not in tok:
    sys.exit("ABORT: no refresh_token in the response. Google omits it on a repeat "
             "consent for the same client+account; revoke prior access at "
             "https://myaccount.google.com/permissions and run the flow again.")

fd = os.open(TOKEN_PATH, os.O_WRONLY | os.O_CREAT | os.O_TRUNC, 0o600)
with os.fdopen(fd, "w") as f:
    json.dump({
        "refresh_token": tok["refresh_token"],
        "scope": tok.get("scope", ""),
        "token_type": tok.get("token_type", ""),
    }, f, indent=1)

print(f"stored refresh token at {TOKEN_PATH}, scopes: {tok.get('scope','')}")

print("ACCESS_TOKEN_FOR_VERIFICATION_ONLY=" + tok["access_token"])

for f in ("code.json", "pending.json", "auth_url.txt"):
    p = os.path.join(HERE, f)
    if os.path.exists(p):
        os.remove(p)
