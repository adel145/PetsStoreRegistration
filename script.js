//<!-- Adel Mohsen 207282542 -->
const form = document.getElementById('registeration');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const firstName = document.getElementById('name').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    function checkPasswordMatch() {
        var password = document.getElementById("password").value;
        var confirmPassword = document.getElementById("confirmPassword").value;
        if (password !== confirmPassword) {
            document.getElementById("passwordError").innerHTML = "הסיסמאות אינן תואמות";
        } else {
            document.getElementById("passwordError").innerHTML = "";
        }
    }

    checkPasswordMatch();

});
