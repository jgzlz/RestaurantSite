const submit = document.getElementById("submitBtn");

submit.addEventListener("click", () => {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let reasonForInquiry = document.getElementsByName("reasonSelect").value;
  let additionalInfo = document.getElementById("additionalInfo");

  let monday = document.getElementById("monday").value;
  let tuesday = document.getElementById("tuesday").value;
  let wednesday = document.getElementById("wednesday").value;
  let thursday = document.getElementById("thursday").value;
  let friday = document.getElementById("friday").value;

  if (name === "" || email === "" || phone === "") {
    document.getElementById("verification").innerHTML =
      "Please enter name and contact information!";
  } else {
    document.getElementById("verification").innerHTML =
      "Information submitted is valid!";
  }
});
