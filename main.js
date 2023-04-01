import {KUTYAK} from "./adatok.js";
window.addEventListener("load", init);

function init(){
    //console.log(KUTYAK)
    
    const inputELEM=document.getElementById("szurnev");
    inputELEM.addEventListener("keyup",function(){
        let szurFeltetel=inputELEM.value;
        let szurtLista = szuresNevSzerint(KUTYAK,szurFeltetel);
        console.log(szurtLista)
    })
}

function szuresNevSzerint(lista,keresett){
    
    let resultList=lista.filter(
        function(elem){
        //console.log(elem)

        return elem.nev.toUpperCase().includes(keresett.toUpperCase());
    })
    //console.log(resultList);
    return resultList;
};