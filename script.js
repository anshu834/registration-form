/*let myform = document.getElementById("myForm");
myform.addEventListener("submit", function(e) {
  e.preventDefault();

  let myname = document.getElementById("myname");
   console.log(myname.value);
   window.location.href = "../to-do list/index.html";

});*/

document.getElementById("myForm").addEventListener("submit", function (e) {
    e.preventDefault(); // stop page reload

    let name = document.getElementById("myname").value;
    let rollno = document.getElementById("rollno").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let mobileNumber = document.getElementById("number").value;

    // Store data temporarily
    localStorage.setItem("name", name);
    localStorage.setItem("rollno", rollno);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    localStorage.setItem("number", mobileNumber);

    // Go to another page
    window.location.href = "registred-data.html";
});
