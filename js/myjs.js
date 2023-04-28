//crea variabili globali

const prizeForKm = 0.21;
const getDati = document.querySelector("#genera");


let userKm;
let userAge;
let userName;



let discountUnder;
let discountOver;
let price;
let priceDiscount;
let messageKm;
let messageEta;
let messageDiscount;
let messageSconto;
let messagePrezzo;
let messageFinalPrice;


//crea dati



//prendi dati

getDati.addEventListener("click",

    function () {

        userKm = document.getElementById("userKm").value;
        userName = document.getElementById("userName").value;
        userAge = document.getElementById("userAge").value;

        console.log("km: ", userKm);
        console.log("name: ", userName);
        console.log("age: ", userAge);

        //calcolo prezzo intero

        price = userKm * prizeForKm;

        //calcolo valore sconto

        discountUnder = price * 20 / 100;
        discountOver = price * 40 / 100;

        // calcolo prezzo scontato

        if(userAge === "under"){ //under
            priceDiscount = parseFloat((price - discountUnder).toFixed(2));
            //messaggi sconto
            messageDiscount = `Hai diritto allo sconto <u>under18</u> pari al 20%`;
            messageSconto = `Applica sconto: ${price} Euro - ${discountUnder} Euro`;
            
            
        }else if(userAge === "over"){ //over
            priceDiscount = parseFloat((price - discountOver).toFixed(2));
            //messaggi sconto
            messageDiscount = `Hai diritto allo sconto <u>over65</u> pari al 40%`;
            messageSconto = `Applica sconto: ${price} Euro - ${discountOver} Euro`;
        
            
        }else{ //no sconto
            priceDiscount = parseFloat(price.toFixed(2));
            //messaggi sconto
            messageDiscount = `Non hai diritto a sconti.`;
            messageSconto = `Applica sconto: ${price} Euro - 0 Euro`;
        }



                //creazione messaggi

        messageKm = `Devi percorrere ${userKm} km`;
        messageEta = `Hai ${userAge} anni`;
        messagePrezzo = `Prezzo intero ${price} Euro`;
        messageFinalPrice = `<u>Il prezzo finale é ${priceDiscount} Euro</u>`;


        //output

        document.getElementById("chilometri").innerHTML = messageKm;
        document.getElementById("eta").innerHTML = messageEta;
        document.getElementById("scontistica").innerHTML = messageDiscount;
        document.getElementById("prezzo").innerHTML = messagePrezzo;
        document.getElementById("sconto").innerHTML = messageSconto;
        document.getElementById("finalPrice").innerHTML = messageFinalPrice;


    }

)







