const fs = require("fs");
const path = require("path");
const { minify } = require("terser");

const rootDir = process.cwd();
const publicJsDir = path.join(rootDir, "public", "js");

function walk(dir, acc = []) {
  if (!fs.existsSync(dir)) return acc;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const ent of entries) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      walk(full, acc);
    } else if (ent.isFile()) {
      if (
        full.endsWith(".js") &&
        !full.endsWith(".min.js") &&
        !full.endsWith(".map")
      ) {
        acc.push(full);
      }
    }
  }
  return acc;
}

async function minifyOne(file) {
  const code = fs.readFileSync(file, "utf8");
  const outFile = file.replace(/\.js$/, ".min.js");
  try {
    const result = await minify(code, {
      compress: {
        passes: 2,
        pure_getters: true,
        toplevel: true,
        // Set DROP_CONSOLE=true to drop all console.* in public JS if desired
        drop_console: process.env.DROP_CONSOLE === "true",
      },
      mangle: { toplevel: true },
      format: { comments: false },
    });

    if (!result || !result.code) {
      throw new Error("No code output from terser");
    }

    fs.writeFileSync(outFile, result.code);
    console.log(
      `✓ Minified ${path.relative(rootDir, file)} -> ${path.relative(
        rootDir,
        outFile
      )}`
    );
  } catch (err) {
    console.error(`❌ Failed to minify ${file}: ${err.message}`);
    process.exitCode = 1;
  }
}

(async () => {
  if (!fs.existsSync(publicJsDir)) {
    console.log("ℹ️ No public/js directory found. Skipping JS minification.");
    return;
  }

  const files = walk(publicJsDir);
  if (!files.length) {
    console.log("ℹ️ No JS files found in public/js.");
    return;
  }

  await Promise.all(files.map(minifyOne));
  // minifyOne sets process.exitCode = 1 on failure. Without this guard the
  // success banner printed even when every file had failed, so a broken
  // minification looked identical to a clean one in build logs.
  if (process.exitCode === 1) {
    console.error("❌ Public JS minification finished with errors.");
    return;
  }
  console.log("✅ Public JS minification complete.");
})();
