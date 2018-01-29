function phoneNumberFormat(phoneNumber) {
  phoneNumber = document.getElementById("phNumber").value;
  let phoneRegex = /^\(\d\d\d\) \d\d\d-\d\d\d\d$/g;
  if (phoneNumber.match(phoneRegex)) {
    alert("Valid number entered");
  } else {
    alert("Phone number entered is invalid");
  }
}

function phoneNumberFormat(phoneNumber) {
  let phoneNumber = document.getElementById("phNumber").value;
  const phoneRegex = /^\(\d\d\d\) \d\d\d-\d\d\d\d$/g ? "valid unmber entered" : "phone number is invalid";
  }
  