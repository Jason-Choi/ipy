# hello_widget/__init__.py
import pathlib
import anywidget
import traitlets

_DEV = False  # switch to False for production

if _DEV:
    # from `npx vite`
    ESM = "http://localhost:5173/src/index.ts?anywidget"
    CSS = ""
else:
    # from `npx vite build`
    bundled_assets_dir = pathlib.Path(__file__).parent / "static"
    ESM = (bundled_assets_dir / "index.js").read_text()
    CSS = (bundled_assets_dir / "style.css").read_text()


class HelloWidget(anywidget.AnyWidget):
    _esm = ESM
    _css = CSS
    name = traitlets.Unicode().tag(sync=True)
