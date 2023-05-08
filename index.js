let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let username = this[0];
  let password = this[1];
  let email = this[2];
  let phone = this[3];
  let maiden = this[4];
  let fatherDobNumber = this[5];

  if (username.value == "") {
    addError("Username", username);
  } else {
    console.log(username.value);
  }

  if (password.value == "") {
    addError("Password", password);
    console.log("password is empty");
  } else {
    console.log(password.value);
  }

  if (phone.value == "") {
    addError("Phone", phone);
  } else {
    console.log(phone.value);
  }

  if (email.value == "") {
    addError("Email", email);
  } else {
    console.dir(email.value);
  }

  if (maiden.value == "") {
    newError("Maiden", maiden);
  } else {
    console.log("MAIDEN EMPTY");
  }

  if (fatherDobNumber.value == "") {
    addError("FatherDOB", fatherDobNumber);
  } else {
    console.dir(fatherDobNumber.value);
  }
});

// DRY - DON'T REPEAT YOURSELF
//  WET - WRITE EVERYTHING TWICE

function addError(valueName, element) {
  let errMsg = document.createElement("span");
  errMsg.setAttribute("class", "err-msg");
  errMsg.innerHTML = `${valueName} cannot be blank`;
  const label = element.parentElement;
  label.appendChild(errMsg);
}

function newError(nameGivenToElement, element) {
  let newErrMsg = document.createElement("span");
  newErrMsg.setAttribute("class", "err-msg");
  newErrMsg.innerHTML = `You no sabi your mother ${nameGivenToElement} name.`;
  const label = element.parentElement;
  label.appendChild(newErrMsg);
}
