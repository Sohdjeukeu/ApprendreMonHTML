// Écicre dans la console
//console.info("Merlin est un developpeur ");


const monTableau = [];
monTableau.push("Merlin");
monTableau.push("Mbakop");

//console.table(monTableau);
//console.log(monTableau[0]);
// console.log(monTableau[1]);
/**
 * @return
 * @param
 */
monTableau.forEach((element,index,monTableau)=>{
    console.log(element);
    console.info(index);
});

console.table(monTableau);
