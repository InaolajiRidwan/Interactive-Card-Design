var button = document.getElementById("btn");


button.addEventListener("click", function () {
    var cvc = document.getElementById("cvc");
    var cardHolder = document.getElementById("cardholder");
    var cardNumber = document.getElementById("cardnumber");
    var expDate = document.getElementById("month");
    var expMonth = document.getElementById("year");

    var displayNumber = document.getElementById("number");
    var nameDisplay = document.getElementById("name");
    var monthYearDisplay = document.getElementById("monthyear");
  

   

    if (!cvc.value && !cardHolder.value && !cardNumber.value && !expDate.value && !expMonth.value) {
        cvc.style.borderColor = "hsl(0, 100%, 66%)";
        cardHolder.style.borderColor = "hsl(0, 100%, 66%)";
        cardNumber.style.borderColor = "hsl(0, 100%, 66%)";
        expDate.style.borderColor = "hsl(0, 100%, 66%)";
        expMonth.style.borderColor = "hsl(0, 100%, 66%)"; 
    }

  
    else {
      document.getElementById("backdisplay").innerHTML = cvc.value;
      displayNumber.innerHTML = cardNumber.value;
      nameDisplay.innerHTML = cardHolder.value;
      monthYearDisplay.innerHTML = expDate.value + "/" + expMonth.value;
      document.getElementById('normalsection').style.display = "none"
      document.getElementById('thankyou').style.display = "block"
    }

});

function btndisplay() {

    var cvc = document.getElementById("cvc");
    var cardHolder = document.getElementById("cardholder");
    var cardNumber = document.getElementById("cardnumber");
    var expDate = document.getElementById("month");
    var expMonth = document.getElementById("year");
  document.getElementById("normalsection").style.display = "block";
  document.getElementById("thankyou").style.display = "none";

  cvc.value = "";
  cardHolder.value = "";
  cardNumber.value = "";
  expDate.value = "";
  expMonth.value = "";
}


var button2 = document.getElementById("btn2");

button2.addEventListener("click", function () {
  var cvc = document.getElementById("cvc2");
  var cardHolder = document.getElementById("cardholder2");
  var cardNumber = document.getElementById("cardnumber2");
  var expDate = document.getElementById("month2");
  var expMonth = document.getElementById("year2");

  var displayNumber = document.getElementById("number2");
  var nameDisplay = document.getElementById("name2");
  var monthYearDisplay = document.getElementById("monthyear2");

  document.getElementById("backdisplay2").innerHTML = cvc.value;
  displayNumber.innerHTML = cardNumber.value;
  nameDisplay.innerHTML = cardHolder.value;
  monthYearDisplay.innerHTML = expDate.value + "/" + expMonth.value;


  if (
    !cvc.value &&
    !cardHolder.value &&
    !cardNumber.value &&
    !expDate.value &&
    !expMonth.value
  ) {
    cvc.style.borderColor = "hsl(0, 100%, 66%)";
    cardHolder.style.borderColor = "hsl(0, 100%, 66%)";
    cardNumber.style.borderColor = "hsl(0, 100%, 66%)";
    expDate.style.borderColor = "hsl(0, 100%, 66%)";
    expMonth.style.borderColor = "hsl(0, 100%, 66%)"; 

  }


  else {
    document.getElementById("backdisplay").innerHTML = cvc.value;
    displayNumber.innerHTML = cardNumber.value;
    nameDisplay.innerHTML = cardHolder.value;
    monthYearDisplay.innerHTML = expDate.value + "/" + expMonth.value;
    document.getElementById("normalsection2").style.display = "none";
    document.getElementById("thankyou2").style.display = "block";
  }

});


function congrat(){

    var cvc = document.getElementById("cvc2");
  var cardHolder = document.getElementById("cardholder2");
  var cardNumber = document.getElementById("cardnumber2");
  var expDate = document.getElementById("month2");
  var expMonth = document.getElementById("year2");

//   var displayNumber = document.getElementById("number2");
//   var nameDisplay = document.getElementById("name2");
//   var monthYearDisplay = document.getElementById("monthyear2");
    document.getElementById("normalsection2").style.display = "block";
    document.getElementById("thankyou2").style.display = "none";
    cvc.value =""
    cardHolder.value= ""
    cardNumber.value =""
    expDate.value =""
    expMonth.value=""
    // displayNumber.innerHTML=""
    // nameDisplay.innerHTML=""
    // document.getElementById("backdisplay").innerHTML =""
    // monthYearDisplay.innerHTML = ""
    
}



