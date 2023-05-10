function printError(Id, Msg) {
  document.getElementById(Id).innerHTML = Msg;
}

function validateForm() {
  var name = document.Form.name.value;
  var email = document.Form.email.value;
  var mobile = document.Form.mobile.value;
  var country = document.Form.country.value;
  var gender = document.Form.gender.value;

  var nameErr = (emailErr = mobileErr = countryErr = genderErr = true);

  if (name == "") {
    printError("nameErr", "Please enter your name");
    var elem = document.getElementById("name");
    elem.classList.add("input-2");
    elem.classList.remove("input-1");
  } else {
    if (name.length < 3) {
      printError("nameErr", "Name minimum 3 characters");
      var elem = document.getElementById("name");
      elem.classList.add("input-2");
      elem.classList.remove("input-1");
    } else {
      printError("nameErr", "");
      nameErr = false;
      var elem = document.getElementById("name");
      elem.classList.add("input-1");
      elem.classList.remove("input-2");
    }
  }

  if (email == "") {
    printError("emailErr", "Please enter your email address");
    var elem = document.getElementById("email");
    elem.classList.add("input-2");
    elem.classList.remove("input-1");
  } else {
    var regex = /^\S+@\S+\.\S+$/;
    if (regex.test(email) === false) {
      printError("emailErr", "Please enter a valid email address");
      var elem = document.getElementById("email");
      elem.classList.add("input-2");
      elem.classList.remove("input-1");
    } else {
      printError("emailErr", "");
      emailErr = false;
      var elem = document.getElementById("email");
      elem.classList.add("input-1");
      elem.classList.remove("input-2");
    }
  }

  if (mobile == "") {
    printError("mobileErr", "Please enter your mobile number");
    var elem = document.getElementById("mobile");
    elem.classList.add("input-2");
    elem.classList.remove("input-1");
  } else {
    var regex = /^[1-13]\d{13}$/;
    if (regex.test(mobile) === false && mobile.slice(0, 2) != "08") {
      printError(
        "mobileErr",
        "Please enter a valid 14 digit mobile number with first character 08"
      );
      var elem = document.getElementById("mobile");
      elem.classList.add("input-2");
      elem.classList.remove("input-1");
    } else {
      printError("mobileErr", "");
      mobileErr = false;
      var elem = document.getElementById("mobile");
      elem.classList.add("input-1");
      elem.classList.remove("input-2");
    }
  }

  if (country == "Select") {
    printError("countryErr", "Please select your country");
    var elem = document.getElementById("country");
    elem.classList.add("input-4");
    elem.classList.remove("input-3");
  } else {
    printError("countryErr", "");
    countryErr = false;
    var elem = document.getElementById("country");
    elem.classList.add("input-3");
    elem.classList.remove("input-4");
  }

  if (gender == "") {
    printError("genderErr", "Please select your gender");
    var elem = document.getElementById("gender");
    elem.classList.add("input-4");
    elem.classList.remove("input-3");
  } else {
    printError("genderErr", "");
    genderErr = false;
    var elem = document.getElementById("gender");
    elem.classList.add("input-3");
    elem.classList.remove("input-4");
  }

  if ((nameErr || emailErr || mobileErr || countryErr || genderErr) == true) {
    return false;
  }
}

let submit = document.getElementById("submit");

const firebaseConfig = {
  apiKey: "AIzaSyA-tG34elA5XrBcHEPL57jTi7K3R57VlZA",
  authDomain: "lntfinalproject-e9e69.firebaseapp.com",
  databaseURL: "https://lntfinalproject-e9e69-default-rtdb.firebaseio.com",
  projectId: "lntfinalproject-e9e69",
  storageBucket: "lntfinalproject-e9e69.appspot.com",
  messagingSenderId: "134163923116",
  appId: "1:134163923116:web:52be59f0bc987966cc9f09",
};

firebase.initializeApp(firebaseConfig);
let database = firebase.database().ref("user");

$("#submit").click(function (e) {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let mobile = document.getElementById("mobile").value;
  let country = document.getElementById("country").value;
  // let gender = document.getElementByClassName("gender").value;

  let newUser = database.push();
  newUser.set({
    name: name,
    email: email,
    mobile: mobile,
    country: country,
    // gender: gender
  });
});
