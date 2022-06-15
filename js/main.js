//creazione var legate all'user

//creo una var per chiedere il nome all'utente
let userName ;
//cero una var per chiedere l'età dell'utente
let userAge ;
//creo una var per chiedere quanti km dovrà percorrere
let kmToCover ;

//creo una var per chiamare il btn
let btnGenerated = document.getElementById('btn-generated');
//?Compilazione form 

btnGenerated.addEventListener(`click`, 
function(){
    //creo una var per chiedere il nome all'utente
    let userName = document.getElementById(`user_name`).value ;
    console.log(userName)
    //cero una var per chiedere l'età dell'utente
    let userAge = parseInt( document.getElementById('user_age').value );
    console.log(userAge)
    //creo una var per chiedere quanti km dovrà percorrere
    let kmToCover = parseInt(document.getElementById('km_tocover').value);
    console.log(kmToCover)

    //! creazione costo biglietto

let PriceNoDiscount = (kmToCover * 0.26);
console.log(PriceNoDiscount);

let PriceDiscount ;
let Price ;

if (isNaN(userAge) == true){
    alert(`l'età da lei indicata non è valida`);
} else if (isNaN(kmToCover) == true){
    alert(`i km da lei indicati non sono validi`);
 } else {
          if( userAge < 18){
              PriceDiscount=((PriceNoDiscount * 15 ) / 100);
          Price=( PriceNoDiscount - PriceDiscount ).toFixed(2);
     }else if(userAge > 65){
              PriceDiscount=((PriceNoDiscount * 35 ) / 100);
          Price=( PriceNoDiscount - PriceDiscount ).toFixed(2);
     }else{
              Price=PriceNoDiscount.toFixed(2);
     }
 }

 console.log(PriceDiscount);
 console.log(Price + '€');
}
)



