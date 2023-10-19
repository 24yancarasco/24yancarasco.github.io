var submitButton = document.getElementById("submitButton");
var passwordInput = document.getElementById("passwordInput");
var correctPassword = "Testpassword123!" 

submitButton.addEventListener("click", function () {
    var password = passwordInput.value;
    if (password === correctPassword) {
        window.location.href = "front.html";
    }
});





