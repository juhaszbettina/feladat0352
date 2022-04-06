/*
* File: app.js
* Author: Juhász Bettina
* Copyright: 2022, Juhász Bettina
* Group: Szoft I/1/E
* Date: 2022-03.31
* Github: https://github.com/juhaszbettina/feladat0352.git
* Licenc: GNU GPL
*/

const magassagElem=document.querySelector("#magassag");
const testZsirSzazalekElem = document.querySelector("#zsirszazalek");
const testTomegElem = document.querySelector("#testtomeg");
const szamitGomb = document.querySelector("#szamitKaloria");
const kaloriaElem = document.querySelector("#kaloria");


szamitGomb.addEventListener('click',() =>{

    let magassag=Number(magassagElem);
    let testZsirSzazalek = Number(testZsirSzazalekElem.value);
    let testTomeg = Number(testTomegElem.value);    
    let kaloria = szamitKaloria(testZsirSzazalek,testTomeg);
    console.log(kaloria)
    kaloriaElem.value = kaloria;
    
});

var szamitKaloria = (testZsirSzazalek,testTomeg)=>{
    return +21.6* Math.pow(1-testZsirSzazalek)* testTomeg;

};