import os

ENV_VAR = "ZY_ROOT"
MARKER = "zyneto-frontend"

def _resolve():
    override = os.environ.get(ENV_VAR)
    if override:
        root = os.path.abspath(os.path.expanduser(override))
        if not os.path.isdir(os.path.join(root, MARKER)):
            raise SystemExit(
                f"ABORT: {ENV_VAR}={override} does not contain {MARKER}/. "
                "Point it at the directory holding zyneto-frontend, Blog and tools."
            )
        return root
    here = os.path.dirname(os.path.abspath(__file__))
    while True:
        if os.path.isdir(os.path.join(here, MARKER)):
            return here
        parent = os.path.dirname(here)
        if parent == here:
            raise SystemExit(
                f"ABORT: no parent of {os.path.dirname(os.path.abspath(__file__))} "
                f"contains {MARKER}/, so the workspace root cannot be derived. "
                f"Set {ENV_VAR} to the directory holding zyneto-frontend, Blog and tools."
            )
        here = parent

ZY_ROOT = _resolve()

def zy(*parts):
    return os.path.join(ZY_ROOT, *parts)
