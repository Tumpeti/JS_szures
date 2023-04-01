$(document).ready(function(){
    const OBJ = {
        nev:"Jakab"
    }
    const articleElem=$("article")
    articleElem.append("<h1>Jqueryvel tettem bele</h1>")
    articleElem.on("click",function(){
        console.log("Articlere kattintottam")
    })
});