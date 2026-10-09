const fs = require("fs");
const path = require("path");

// Ensure public/styles directory exists
const publicStylesDir = path.join(process.cwd(), "public", "styles");
if (!fs.existsSync(publicStylesDir)) {
  fs.mkdirSync(publicStylesDir, { recursive: true });
}

// Copy CSS files to public directory.
// blog.css was removed from this list: it is imported directly by
// DetailsBlog.tsx and bundled by Next, and the only thing that ever read the
// public/ copy was src/app/blog/[slug]/head.tsx - a Pages-Router convention
// the App Router never executed. The other three are fetched at runtime by
// URL, so they do need to exist under public/.
const cssFiles = ["deferred.css", "performance.css", "mobile.css"];

cssFiles.forEach((file) => {
  const srcPath = path.join(process.cwd(), "src", "styles", file);
  const destPath = path.join(publicStylesDir, file);

  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`✓ Copied ${file} to public/styles/`);
  } else {
    console.warn(`⚠ Warning: ${file} not found in src/styles/`);
  }
});

console.log("CSS files copied successfully!");
