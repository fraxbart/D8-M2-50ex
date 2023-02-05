/* 21)
 let x="john"
let y="doe"
console.log(x+"<>"+y); */

 /* 22)
    let utente = {
    name:"pippo",
    surname:"doe",
    email:"pippodoe@ingmail.com"

} */

/* 23)
    let utente = {
    name:"pippo",
    surname:"doe",
    email:"pippodoe@ingmail.com" 
}
delete utente.email; */

/* 
24)
const array = ["1a","2a","3a","4a","5a","6a","7a","8a","9a","10a"]; */

/* 
25)
const array = ["1a","2a","3a","4a","5a","6a","7a","8a","9a","10a"];
console.log(array); */

/* 26) 
const array = [];
let i=0;
for(i=0;i<100;i++){
    array[i]=Math.floor(Math.random()*100);
} */



/* 27) 
const vettore = [];
let i=0;
for(i=0;i<100;i++){
    vettore[i]=Math.floor(Math.random()*100);
}
function valorimaxemin(array){
    let massimo=array[0];
    let minimo=array[0];
    for(let i=1;i<array.length;i++){
        if(array[i]>massimo){
            massimo=array[i];
        }
        if(array[i]<minimo){
            minimo=array[i];
        }
    }
    return {massimo , minimo} ;
}
const risultato=valorimaxemin(vettore);
console.log(risultato.minimo)
console.log(risultato.massimo) */


/* 
28)
const matrice = [];
for(let i=0;i<5;i++){
    const riga= [];
    for(let j=0;j<10;j++){
        riga.push(Math.floor(Math.random()*100));
    }
    matrice.push(riga);
}

console.log(matrice); */

/* 29) 
function largharr(vett1,vett2){
   if(vett1.length>vett2.length){
        return vett1
   }else{
    return vett2
   }

}

const arr1=[1,2,3,4];
const arr2=[1,2,3,4,5];
const maggiore=largharr(arr1,arr2);
console.log(maggiore); */


/* 30) 
function largharr(vett1,vett2){
    let somma1=0;
    let somma2=0;
    for(let i=0;i<vett1.length;i++){
        somma1=somma1+vett1[i];
    }
    for(let j=0;j<vett2.length;j++){
        somma2=somma2+vett2[j];
    }
    if(somma1>somma2){
        return vett1
   }else{
    return vett2
   }
 
 }
 
 const arr1=[10,2,3,4];
 const arr2=[1,2,3,4,5];
 const maggiore=largharr(arr1,arr2);
 console.log(maggiore); */

 /* 31) const container = document.getElementById("container"); */

/* 32) const elementitd=document.getElementsByTagName("td"); */

/*  33)
const elementitd=document.getElementsByTagName("td");
let i=0;

for(i=0;i<elementitd.length;i++){
    console.log(elementitd[i].innerText);
} */

/* 34) 
const title=document.getElementsByTagName("title");

function cambiotitolo(titolino){
    document.title=titolino;
} */


/* 
35)
function addriga(col){
 const tabella=document.getElementsByTagName("table");
 const riganuova=tabella.insertRow(-1);
 for(let i=0;i<col.length;i++){
    const nuovacol=riganuova.insertCell(i);
    nuovacol.innerHTML=col[i];

 }
} */

/*36)
function AggiungiClasseRiga(NomeClasse) {
  const tabella = document.getElementByTagName("table");
  const righe = tabella.getElementsByTagName("tr");
  for (let i = 0; i < righe.length; i++) {
    righe[i].classList.add(NomeClasse);
  }
}*/
/* 37) 

        function SfondoRossoLink() {
          const link = document.getElementsByTagName("a");
          for (let i = 0; i < link.length; i++) {
            link[i].style.backgroundColor = "red";
          }
        }*/


        /* 38) 

        window.addEventListener("load", function() {
          console.log("Page loaded");
        });
        */

        /* 39) 

        function AggElementi(text) {
          const ul = document.getElementsByTagName("ul");
          const li = document.createElement("li");
          li.innerHTML = text;
          ul.appendChild(li);
        }*/
        /* 40) 
        function svuota() {
          const ul = document.getElementsByTagName("ul");
          while (ul.firstChild) {
            ul.removeChild(ul.firstChild);
          }
        }*/