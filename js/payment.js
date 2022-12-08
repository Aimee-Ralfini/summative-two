// Payment Form
var userObj = { fullName: "", email: "", contactNum:"", cardName:"", cardNum:"", cardExp:"", cardCCV:"" };
function checkFullName(event) {
  console.log(event.target.value);
  userObj.fullName = event.target.value;

  checkInputs();
  showBeautifulTable();
}

function checkEmail(event) {
  console.log(event.target.value);
  userObj.email = event.target.value;

  checkInputs();
  showBeautifulTable();
}

function checkContactNum(event) {
    console.log(event.target.value);
    userObj.contactNum = event.target.value;
  
    checkInputs();
    showBeautifulTable();
  }

  function checkCardName(event) {
    console.log(event.target.value);
    userObj.cardName = event.target.value;
  
    checkInputs();
    showBeautifulTable();
  }

  function checkCardNum(event) {
    console.log(event.target.value);
    userObj.cardNum = event.target.value;
  
    checkInputs();
    showBeautifulTable();
  }

  function checkCardExp(event) {
    console.log(event.target.value);
    userObj.cardExp = event.target.value;
  
    checkInputs();
    showBeautifulTable();
  }

  function checkCardCCV(event) {
    console.log(event.target.value);
    userObj.cardCCV = event.target.value;
  
    checkInputs();
    showBeautifulTable();
  }


function checkInputs() {
    if (userObj.email.length > 1 && userObj.contactNum.length >= 2) {
    // && userObj.contactNum.length > 2 && userObj.cardName.length > 2 && userObj.cardNum.length > 2 && userObj.cardExp.length > 2 && userObj.cardCCV  >2
    enableSumit();
  } else {
    disableSumit();
  }
}

function disableSumit() {
  var theButton = document.querySelector("button");
  if (theButton) {
    theButton.classList.add("disabled");
  }
}

function enableSumit() {
  var theButton = document.querySelector(".disabled");
  if (theButton) {
    theButton.classList.remove("disabled");
  }
}

function showBeautifulTable() {
  console.table(userObj);
}