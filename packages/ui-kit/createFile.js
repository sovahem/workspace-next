const fs = require("fs");
const path = require("path");
const ts = require("typescript");

const uiDir = path.join(__dirname, "src/components/ui");
const resDir = path.join(__dirname, "src/components");

const createResFile = (exportName, props) => {
  const resFilePath = path.join(
    resDir,
    "share",
    exportName,
    `${exportName}.res`,
  );
  const resFileDir = path.dirname(resFilePath);

  if (!fs.existsSync(resFileDir)) {
    fs.mkdirSync(resFileDir, { recursive: true });
  }

  if (!fs.existsSync(resFilePath)) {
    const propsString = props
      .map((prop) => `~${prop.name}: ${prop.type}${prop.optional ? "=?" : ""}`)
      .join(", ");
    const content = `
@react.component
@module("@/components/ui/${exportName.toLowerCase()}")
external make: (${propsString} ~children: React.element, unit) => React.element = "${exportName}"
`;
    fs.writeFileSync(resFilePath, content.trim());
    console.log(`Created: ${resFilePath}`);
  } else {
    console.log(`Already exists: ${resFilePath}`);
  }
};

const createStoryFile = (exportName) => {
  const storyFilePath = path.join(
    resDir,
    "share",
    exportName,
    `${exportName}.stories.tsx`,
  );
  const storyFileDir = path.dirname(storyFilePath);

  if (!fs.existsSync(storyFileDir)) {
    fs.mkdirSync(storyFileDir, { recursive: true });
  }

  if (!fs.existsSync(storyFilePath)) {
    const content = `
import React from 'react';
import { ${exportName} } from '@/components/ui/${exportName.toLowerCase()}';

export default {
  title: 'Components/${exportName}',
  component: ${exportName},
};

export const Default = () => <${exportName} />;
`;
    fs.writeFileSync(storyFilePath, content.trim());
    console.log(`Created: ${storyFilePath}`);
  } else {
    console.log(`Already exists: ${storyFilePath}`);
  }
};

const extractProps = (sourceFile) => {
  const props = [];
  const visit = (node) => {
    if (ts.isInterfaceDeclaration(node) && node.name.text.endsWith("Props")) {
      node.members.forEach((member) => {
        if (ts.isPropertySignature(member) && member.type) {
          const propName = member.name.getText();
          const propType = member.type.getText();
          const optional = !!member.questionToken;
          props.push({ name: propName, type: mapType(propType), optional });
        }
      });
    }
    ts.forEachChild(node, visit);
  };
  visit(sourceFile);
  return props;
};

const mapType = (tsType) => {
  switch (tsType) {
    case "string":
      return "string";
    case "boolean":
      return "bool";
    case "number":
      return "int";
    default:
      return "string";
  }
};

const processFile = (filePath) => {
  const content = fs.readFileSync(filePath, "utf-8");
  const sourceFile = ts.createSourceFile(
    filePath,
    content,
    ts.ScriptTarget.Latest,
    true,
  );
  const exportRegex = /export\s+{\s*([^}]+)\s*}/g;
  const matches = content.matchAll(exportRegex);

  for (const match of matches) {
    const exports = match[1].split(",").map((exp) => exp.trim());
    const props = extractProps(sourceFile);
    console.log(exports);
    // exports.forEach((exportName) => {
    //   createResFile(exportName, props);
    //   createStoryFile(exportName);
    // });
  }
};

fs.readdirSync(uiDir).forEach((file) => {
  if (file.endsWith(".tsx")) {
    processFile(path.join(uiDir, file));
  }
});
