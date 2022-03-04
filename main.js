const url="https://www.espncricinfo.com/series/ipl-2020-21-1210595";


const cheerio=require("cheerio")
const request=require("request")
 
const allMatchObj= require('./allMatch')

const fs=require('fs')
const path=require('path')

let iplPath=path.join(__dirname,"IPL");
dirCreator(iplPath);

request(url,cb)

function cb(err,response,html){
    if(err){
        console.error(err)
    }
    else{
        extractLink(html)
    }
}

function extractLink(html){
    let $=cheerio.load(html);
    let anchorElem=$('a[data-hover="View All Results"]')

    let link=anchorElem.attr('href')
   // console.log(link)

   let fullLink= "https://www.espncricinfo.com" + link;

  // console.log(fullLink);
    // getAllMatchLink(fullLink)

     allMatchObj.getAllMatch(fullLink)
}

function dirCreator(filePath){
    if(fs.existsSync(filePath)==false)
    {
        fs.mkdirSync(filePath);
    }
}