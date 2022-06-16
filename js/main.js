//creazione var legate all'user


//creo una var per chiedere il nome all'utente
let userName ;
//cero una var per chiedere l'età dell'utente
let userAge ;
//creo una var per chiedere quanti km dovrà percorrere
let kmToCover ;
//creo una var per il numero di carozza
let carriageNumber ;
//creo una var per il codice di prenotazione
let codeBooking ;

//creo una var per il btn invia form
let btnGenerated = document.getElementById('btn-generated');
//creo una var per il btn calla form
let btnDelete = document.getElementById('btn-delete');



//?Compilazione form 

btnDelete.addEventListener(`click`,
function(){
    document.getElementById(`user_name`).value = ``;
    document.getElementById(`km_tocover`).value = ``;
    document.getElementById('name').innerHTML = ``;
    document.getElementById('carriage').innerHTML = ``;
    document.getElementById('c_booking').innerHTML = ``;
    document.getElementById('price').innerHTML = ``;
})

btnGenerated.addEventListener(`click`, 
function(){
    //creo una var per chiedere il nome all'utente
    let userName = document.getElementById(`user_name`).value ;
    console.log(userName)
    //cero una var per chiedere l'età dell'utente
    let userAge = document.getElementById('user_age').value ;
    console.log(userAge)
    //creo una var per chiedere quanti km dovrà percorrere
    let kmToCover = parseInt(document.getElementById('km_tocover').value);
    console.log(kmToCover)
    //creo una var per il numero di carozza
    let carriageNumber = Math.floor((Math.random() * 10) + 1);
    console.log(carriageNumber)
    //creo una var per il codice di prenotazione
    let codeBooking =((Math.random() * 100) + 1).toFixed(5);
    console.log(codeBooking)



        //! creazione costo biglietto

    let PriceNoDiscount = (kmToCover * 0.26);
    console.log(PriceNoDiscount);

    let PriceDiscount ;
    let Price ;

    if (isNaN(kmToCover) == true){
        alert(`i km da lei indicati non sono validi`);
        carriageNumber = `0`;
        codeBooking = `0`;
    } else {
            if( userAge == `age_<18`){
                PriceDiscount=((PriceNoDiscount * 15 ) / 100);
                Price=( PriceNoDiscount - PriceDiscount ).toFixed(2);
        }else if(userAge == `age_>65`){
                PriceDiscount=((PriceNoDiscount * 35 ) / 100);
                Price=( PriceNoDiscount - PriceDiscount ).toFixed(2);
        }else{
                Price=PriceNoDiscount.toFixed(2);
        }
    }

       
    console.log(PriceDiscount);
    console.log(Price + '€');

    //! creazione biglietto
    
    document.getElementById('name').innerHTML = userName;
    document.getElementById('carriage').innerHTML = carriageNumber;
    document.getElementById('c_booking').innerHTML = codeBooking;
    document.getElementById('price').innerHTML = Price + `€`;
}
)




