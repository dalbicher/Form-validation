const usernameField = document.getElementById("username");
const warningMessageUsername = document.getElementById("username-warning");

usernameField.addEventListener('keyup', getUsername);

function getUsername(e) {
    if(e.target.value.includes("@")) {
        warningMessageUsername.textContent = "Gebruikersnaam mag geen @ bevatten";
    } else {
        warningMessageUsername.textContent = '';
    }
};

const passwordField = document.getElementById("password");
const warningMessagePassword = document.getElementById("password-warning");

passwordField.addEventListener('keyup', getPassword);

function getPassword(e) {
    if(e.target.value === '' || e.target.value.length > 6) {
    warningMessagePassword.textContent = '';
} else (e.target.lenght < 6) {
    warningMessagePassword = "Wachtwoord is te kort, gebruik minimaal 6 tekens";
}
