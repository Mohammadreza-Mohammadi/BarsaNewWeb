import { zip } from "zip-a-folder";
import * as fs from "fs";
const json = JSON.parse(fs.readFileSync("package.json", "utf8"));
const version = json.version;

fs.readFile("angular.json", "utf8", async function (err, data) {
  if (err) throw err;
  const obj = JSON.parse(data);

  const outputPath = obj.projects.app.architect.build.options.outputPath;
  console.log(outputPath);
  console.log(version);
  const outputVersion = outputPath + "_" + version;
  const outputRar = outputVersion + ".zip";
  const temppath = "dist/temp/";
  fs.rm(temppath, { recursive: true }, () => {
    const tempDistPath = temppath + outputVersion.split("/")[1];
    fs.cp(outputPath, tempDistPath, { recursive: true }, async () => {
      console.log("copied " + tempDistPath);
      await zip(temppath, outputRar);
    });
  });
});
