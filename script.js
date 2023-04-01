window.addEventListener("load",init);

let SECTION;

const OBJ ={
    nev:"Jakab",
    cim:"Fő",
    telefon:"123",
    email:"mail@"
};
function init(){
    const GOMB = document.querySelector("#ok");
    GOMB.addEventListener("click", okMegnyom);
    SECTION = document.querySelectorAll("section")[0];
    
};

function okMegnyom(){
    console.log("megnyomtad");
    let adat = adatgyujt();
    osszeallit(adat);
    
}

function adatgyujt(){
let adat = {
    nev: document.querySelector("#nev").value,
    cim: document.querySelector("#cim").value,
    telefon: document.querySelector("#tel").value,
    email: document.querySelector("#email").value,
};
return adat;
};

function osszeallit(adat){
    SECTION.innerHTML="";
    let sectionDiv=SECTION.appendChild(document.createElement("div"));
    for(let mezo in adat){
        let pElem = SECTION.appendChild(document.createElement("p"));
        pElem.innerText =mezo+": "+adat[mezo];
    }
}

