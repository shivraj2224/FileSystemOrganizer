function help(){
    console.log(`
    List of All the Commands:
        1.node main.js organize "dirpath"
        2.node main.js tree "dirpath"
        3.node main.js help 
    `);
}

module.exports={
    helpFn: help
}