let fs = require("fs");
let path = require("path");
let types = require("../utility"); 

function organize(dirPath){
    // console.log("Organize command activated",dirPath);
    //1.Input ->directory path given
    let destPath;
    if(dirPath == undefined){
        // console.log("Please Enter the path");
        destPath = process.cwd();
        return;
    }else{
        let doesExist = fs.existsSync(dirPath);
        if(doesExist){
            //2. create organized_file directory
            destPath = path.join(dirPath,"organized_files");
            if(fs.existsSync(destPath)==false){
                fs.mkdirSync(destPath);                
            }
            // console.log(dirPath);
            // console.log(destPath);
        }else{
            console.log("Please Enter the path");
            return;
        }
    }

    organizeHelper(dirPath,destPath);
    // 3. identify categories of all the files present in that input directory  ->

}

function organizeHelper(src,dest){
    // 3. identify categories of all the files present in that input directory  ->
    let childName = fs.readdirSync(src);
    // console.log(childName);

    for(let i=0; i<childName.length; i++){
        let childAddress = path.join(src,childName[i]);
        let isFile = fs.lstatSync(childAddress).isFile();
        
        if(isFile){
            // console.log(childName[i]);
            let category = getCategory(childName[i]);
            console.log(childName[i], "belongs to --> ", category);
            // 4. copy / cut  files to that organized directory inside of any of category folder 
            sendFiles(childAddress, dest, category);
        }
    }

}

function getCategory(name){
    let ext = path.extname(name);
    // console.log(ext);
    ext = ext.slice(1);
    for(let type in types){
        let cTypeArray = types[type];  
        for(let i=0; i<cTypeArray.length; i++){
            if(ext==cTypeArray[i]){
                return type;
            }
        }
    }

    return "others";
}

function sendFiles(srcFile, dest, category){
    let categoryPath = path.join(dest,category);    
    if(fs.existsSync(categoryPath) == false){
        fs.mkdirSync(categoryPath);
    }
    let fileName = path.basename(srcFile);
    let destFilePath = path.join(categoryPath, fileName);
    fs.copyFileSync(srcFile, destFilePath);
    // fs.unlinkSync(srcFile);
    console.log(fileName, "copied to ", category);
}

module.exports={
    organizeFn: organize
}