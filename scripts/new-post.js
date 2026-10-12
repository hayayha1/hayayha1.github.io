/* This is a script to create a new post markdown file with front-matter or import an existing text/markdown file */

import fs from "node:fs";
import path from "node:path";
import { pinyin } from "pinyin-pro";

function getDate() {
	const today = new Date();
	const year = today.getFullYear();
	const month = String(today.getMonth() + 1).padStart(2, "0");
	const day = String(today.getDate()).padStart(2, "0");

	return `${year}-${month}-${day}`;
}

const args = process.argv.slice(2);

if (args.length === 0) {
	console.error(`Error: No filename argument provided
Usage: npm run new-post -- <filename-or-filepath>`);
	process.exit(1);
}

const rawInput = args[0].trim();
let sourceContent = "";
let postTitle = "";
let fileName = "";

// Check if rawInput is an existing file to import
if (fs.existsSync(rawInput) && fs.statSync(rawInput).isFile()) {
	sourceContent = fs.readFileSync(rawInput, "utf-8").trim();
	const parsed = path.parse(rawInput);
	postTitle = parsed.name;
	fileName = parsed.name;
} else {
	// If it's a path string, extract the basename
	const parsed = path.parse(rawInput);
	postTitle = parsed.name;
	fileName = parsed.name;
}

// Ensure valid markdown extension
const fileExtensionRegex = /\.(md|mdx)$/i;
let ext = ".md";
if (fileExtensionRegex.test(rawInput)) {
	ext = path.extname(rawInput);
}

// Normalize file name: replace spaces and invalid filesystem characters with hyphens
let safeName = fileName
	.trim()
	.replace(/[\s\t\n]+/g, "-")
	.replace(/[\\/:*?"<>|]/g, "");

// Convert Chinese in filename to pinyin slug
let slug = safeName;
if (/[一-鿿]/.test(slug)) {
	const chars = [...slug];
	const parts = [];
	let buf = "";
	for (const ch of chars) {
		if (/[一-鿿]/.test(ch)) {
			if (buf) {
				parts.push(buf);
				buf = "";
			}
			parts.push(pinyin(ch, { toneType: "none", type: "array" })[0]);
		} else {
			buf += ch;
		}
	}
	if (buf) parts.push(buf);
	slug = parts
		.join("-")
		.toLowerCase()
		.replace(/[^a-z0-9-]/g, "")
		.replace(/-+/g, "-")
		.replace(/^-|-$/g, "");
}

const finalFileName = `${safeName}${ext}`;
const targetDir = "./src/content/posts/";
const fullPath = path.join(targetDir, finalFileName);

if (fs.existsSync(fullPath)) {
	console.error(`Error: File ${fullPath} already exists`);
	process.exit(1);
}

const dirPath = path.dirname(fullPath);
if (!fs.existsSync(dirPath)) {
	fs.mkdirSync(dirPath, { recursive: true });
}

let content = "";
if (sourceContent) {
	// If source already has frontmatter
	if (sourceContent.startsWith("---")) {
		content = sourceContent;
	} else {
		// Wrap source content with frontmatter
		content = `---
title: ${postTitle}
published: ${getDate()}
description: ''
image: ''
tags: []
category: ''
draft: false
lang: ''
---

${sourceContent}
`;
	}
} else {
	content = `---
title: ${postTitle}
published: ${getDate()}
description: ''
image: ''
tags: []
category: ''
draft: false
lang: ''
---
`;
}

fs.writeFileSync(fullPath, content);
console.log(`Post ${fullPath} created successfully!`);
