const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const STYLES_DIR = path.join(__dirname, "..", "src", "styles");
const COPY_SCRIPT = path.join(__dirname, "copy-css.js");

console.log("🔍 Watching CSS files for changes...");
console.log(`📁 Monitoring: ${STYLES_DIR}`);

// Initial copy
try {
  execSync(`node "${COPY_SCRIPT}"`, { stdio: "inherit" });
} catch (error) {
  console.error("❌ Initial CSS copy failed:", error.message);
}

// Watch for changes
fs.watch(STYLES_DIR, { recursive: true }, (eventType, filename) => {
  if (filename && filename.endsWith(".css")) {
    console.log(`\n📝 CSS file changed: ${filename}`);
    console.log("🔄 Copying CSS files...");

    try {
      execSync(`node "${COPY_SCRIPT}"`, { stdio: "inherit" });
      console.log("✅ CSS files updated successfully!");
    } catch (error) {
      console.error("❌ CSS copy failed:", error.message);
    }
  }
});

console.log("✅ CSS file watcher is running. Press Ctrl+C to stop.");

// Handle graceful shutdown
process.on("SIGINT", () => {
  console.log("\n👋 CSS file watcher stopped.");
  process.exit(0);
});

process.on("SIGTERM", () => {
  console.log("\n👋 CSS file watcher stopped.");
  process.exit(0);
});
