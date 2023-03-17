import { createRequire } from "module";  // use this to be able to get require and import in the same file
const require = createRequire(import.meta.url);

// Require and import from de npm libs
import { franc } from "franc";
const langs = require("langs"); 
const colors = require("colors");

const input = process.argv[2]; // take the first thing we type
const langCode = franc(input); 

if (langCode === 'und') {
    console.log("We couldn't find out what language it is. Try again with some more text.".red);
} else {
    const language = langs.where("3", langCode);
    console.log(`Our best guess is: ${language.name}`.green);
}

