import { readFileSync, writeFileSync } from "fs";

// Get the new version
let newVersion = process.argv[2];
if (!newVersion) {
    // If no version provided, bump the patch version
    const currentVersion = JSON.parse(readFileSync("package.json", "utf8")).version;
    const [major, minor, patch] = currentVersion.split('.').map(Number);
    newVersion = `${major}.${minor}.${patch + 1}`;
}

// Update package.json
let packageJson = JSON.parse(readFileSync("package.json", "utf8"));
packageJson.version = newVersion;
writeFileSync("package.json", JSON.stringify(packageJson, null, "\t"));

// Update manifest.json
let manifest = JSON.parse(readFileSync("manifest.json", "utf8"));
const { minAppVersion } = manifest;
manifest.version = newVersion;
writeFileSync("manifest.json", JSON.stringify(manifest, null, "\t"));

// Update versions.json
let versions = JSON.parse(readFileSync("versions.json", "utf8"));
versions[newVersion] = minAppVersion;
writeFileSync("versions.json", JSON.stringify(versions, null, "\t"));

console.log(`Updated to version ${newVersion}`);