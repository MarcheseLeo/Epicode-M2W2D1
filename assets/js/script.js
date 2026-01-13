//ESERCIZI SUGLI IF: 

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.


*/

/* SCRIVI QUI LA TUA RISPOSTA */
function biggestNumber() {
  let a = parseInt(document.getElementById("aUno").value)
  let b = parseInt(document.getElementById("bUno").value)
  let result = document.getElementById("result1")

  if (!a || !b) {
    resultError(result, "I numeri non possono essere vuoti")
  }
  else if (a == b) {
    resultError(result, "I numeri sono uguali, inserisci due numeri differenti")
  } else if (a > b) {
    resultRight(result, `Il numero più grande è: ${a}`)
  } else {
    resultRight(result, `Il numero più grande è: ${b}`)
  }

}

/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function checkNumberSize() {
  let num = parseInt(document.getElementById("aDue").value)
  let result = document.getElementById("result2")

  if (!num) {
    resultError(result, "Il numero non possono essere vuoto")
  } else {
    if (num < 5) {
      resultRight(result, `Tiny`)
    } else if (num < 10) {
      resultRight(result, 'Small')
    } else if (num < 15) {
      resultRight(result, 'Medium')
    } else if (num < 20) {
      resultRight(result, 'Large')
    } else {
      resultRight(result, 'Huge')
    }
  }
}


//ESERCIZI SUI CICLI: 

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function printNumbers() {

  let a = parseInt(document.getElementById("aTre").value)
  let b = parseInt(document.getElementById("bTre").value)
  let result = document.getElementById("result3")

  if (!a && a != 0 || !b && b != 0) {
    resultError(result, "I numeri non possono essere vuoti")
  } else if (a >= b) {
    resultError(result, "Inzio deve essere minore di fine")
  } else if (a < 0 || b > 10) {
    resultError(result, "Il range dei  numeri deve essere tra 0 e 10")
  } else {
    let card = document.getElementById("card3")
    result.style.display = 'none'
    const figliDaEliminare = card.querySelectorAll('.right');

    figliDaEliminare.forEach(figlio => {
      figlio.remove();
    }); 1

    while (a <= b) {
      if (a === 3 || a === 8) {
        a++
        continue
      }
      let newResult = document.createElement('p')
      newResult.textContent = a
      newResult.removeAttribute("class", "notDone")
      newResult.setAttribute("class", "right")
      let i = document.createElement("i")
      i.classList.add("fa-solid")
      i.classList.add("fa-circle-check")
      i.style.marginLeft = "10px"
      i.style.fontSize = "1.3em"
      newResult.appendChild(i)
      card.appendChild(newResult)
      console.log(a)
      a++
    }
  }
}
/* ESERCIZIO 11
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function printOddOrEven() {
  let a = parseInt(document.getElementById("aQuattro").value)
  let b = parseInt(document.getElementById("bQuattro").value)
  let card = document.getElementById('card4')
  let result = document.getElementById('result4')

  if (!a && a != 0 || !b && b != 0) {
    resultError(result, "I numeri non possono essere vuoti")
  } else if (a >= b) {
    resultError(result, "Inzio deve essere minore di fine")
  } else if (a < 0 || b > 15) {
    resultError(result, "Il range dei  numeri deve essere tra 0 e 15")
  } else {
    result.style.display = 'none'
    const figliDaEliminare = card.querySelectorAll('.right');

    figliDaEliminare.forEach(figlio => {
      figlio.remove();
    });


    for (let i = a; i <= b; i++) {
      let newResult = document.createElement('p')
      if (i % 2 === 0) {
        newResult.textContent = `Il numero ${i} è pari`
        newResult.style.backgroundColor = " #BADFDB"
      } else {
        newResult.textContent = `Il numero ${i} è dispari`
        newResult.style.backgroundColor = " #FFA4A4 "
      }
      newResult.removeAttribute("class", "notDone")
      newResult.setAttribute("class", "right")
      let icona = document.createElement('i')
      icona.classList.add("fa-solid")
      icona.classList.add("fa-circle-check")
      icona.style.marginLeft = "10px"
      icona.style.fontSize = "1.3em"
      newResult.appendChild(icona)
      card.appendChild(newResult)
    }
  }

}

//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function checkEight() {
  let a = parseInt(document.getElementById('aCinque').value)
  let b = parseInt(document.getElementById('bCinque').value)
  let result = document.getElementById('result5')

  if (!a && a != 0 || !b && b != 0) {
    resultError(result, "Inserisci un numero valido")
  } else {
    if (a === 8 || b === 8)
      resultRight(result, "Uno dei due numeri è uguale a 8")
    else if ((a + b) === 8)
      resultRight(result, "La somma dei due numeri è uguale a 8")
    else if ((a - b) === 8 || (b - a) === 8)
      resultRight(result, "La sottrazione tra i due numeri è uguale a 8")
    else
      resultRight(result, "Nessuna condizione è soddisfatta")
  }
}

/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalPrice = 0;
function calculateTotal(priceContainer) {
  let result = document.getElementById('result6')
  let price = parseFloat(document.getElementById(priceContainer).textContent)
  const SHIPPINGCOST = 10
  totalPrice += price
  if (totalPrice >= 50) {
    resultRight(result, `Il totale del carrello è di: ${totalPrice}€. La spedizione e' sgratuita!`)
  } else {
    let total = totalPrice + SHIPPINGCOST
    resultError(result, `Il totale del carrello è di: ${total}€. (${totalPrice} + ${SHIPPINGCOST}€)`)

  }
}

/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalPriceBlackFriday = 0
function calculateTotalBlackFriday(priceContainer) {
  let result = document.getElementById('result7')
  let price = parseFloat(document.getElementById(priceContainer).textContent)
  totalPriceBlackFriday += price
  const SHIPPINGCOST = 10
  const DISCOUNT = 0.20
  let discountedPrice = totalPriceBlackFriday - (totalPriceBlackFriday * DISCOUNT)


  if (discountedPrice >= 50) {
    resultRight(result, `Il totale del carrello è di: ${discountedPrice}€.(${totalPriceBlackFriday} - 20%) La spedizione e' sgratuita!`)
  } else {
    let total = discountedPrice + SHIPPINGCOST
    resultError(result, `Il totale del carrello è di: ${total}€. (${totalPriceBlackFriday} - 20% + ${SHIPPINGCOST}€)`)
  }

}

/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function genderAssignment() {
  let isMale = document.querySelector('input[name="genere"]:checked').value;
  let result = document.getElementById('result8')
  let gender = (isMale === 'M') ? 'Sei Uomo' : 'Sei Donna';

  if (isMale === 'M') {
    resultRight(result, gender)
    result.style.backgroundColor = '#647FBC'
  } else {
    resultRight(result, gender)
    result.style.backgroundColor = '#FFCDC9'
  }

}

/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
  */
function fizzBuzz() {
  let a = parseInt(document.getElementById("aNove").value)
  let b = parseInt(document.getElementById("bNove").value)
  let card = document.getElementById('card9')
  let result = document.getElementById('result9')

  if (!a && a != 0 || !b && b != 0) {
    resultError(result, "I numeri non possono essere vuoti")
  } else if (a >= b) {
    resultError(result, "Inzio deve essere minore di fine")
  } else if (a < 1 || b > 100) {
    resultError(result, "Il range dei  numeri deve essere tra 1 e 100")
  } else {
    result.style.display = 'none'
    const figliDaEliminare = card.querySelectorAll('.right');

    figliDaEliminare.forEach(figlio => {
      figlio.remove();
    });

    for (let i = a; i <= b; i++) {
      let newResult = document.createElement('p')
      if (i % 3 === 0 && i % 5 === 0) {
        newResult.textContent = "FizzBuzz"
        newResult.style.backgroundColor = "#AEDEFC"
      } else if (i % 3 === 0) {
        newResult.textContent = "Fizz"
        newResult.style.backgroundColor = "#AEDEFC"
      } else if (i % 5 === 0) {
        newResult.textContent = "Buzz"
         newResult.style.backgroundColor = "#F875AA"
      } else {
        newResult.textContent = i
      }

      newResult.removeAttribute("class", "notDone")
      newResult.setAttribute("class", "right")
      let icona = document.createElement('i')
      icona.classList.add("fa-solid")
      icona.classList.add("fa-circle-check")
      icona.style.marginLeft = "10px"
      icona.style.fontSize = "1.3em"
      newResult.appendChild(icona)
      card.appendChild(newResult)
    }
  }

}



function resultError(result, messaggio) {
  result.textContent = messaggio
  result.removeAttribute("class", "notDone")
  result.setAttribute("class", "error")
  let i = document.createElement("i")
  i.classList.add("fa-solid")
  i.classList.add("fa-circle-exclamation")
  i.style.marginLeft = "10px"
  i.style.fontSize = "1.3em"
  result.appendChild(i)
}

function resultRight(result, messaggio) {
  result.textContent = messaggio
  result.removeAttribute("class", "notDone")
  result.setAttribute("class", "right")
  let i = document.createElement("i")
  i.classList.add("fa-solid")
  i.classList.add("fa-circle-check")
  i.style.marginLeft = "10px"
  i.style.fontSize = "1.3em"
  result.appendChild(i)
}