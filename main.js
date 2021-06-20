#!/usr/bin/env node

let fs = require("fs");
let path = require("path");
let helpObj = require("./commands/help");
let treeObj = require("./commands/tree");
let organizeObj = require("./commands/organize");

let inputArr = process.argv.slice(2);
// console.log(inputArr);

let command = inputArr[0];

let types = {
    media: ["mp4", "mkv","mp3"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"]
}

switch(command){
    case "tree":
        treeObj.treeFn(inputArr[1]);
        break;
    case "organize":
        organizeObj.organizeFn(inputArr[1]);
        break;
    case "help":
        helpObj.helpFn();
        break;
    default:
        console.log("Please Enter Valid Command");
        break;
}



//F:\Web Designing\Projects\File System Organizer













