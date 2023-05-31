const pwdField1 = document.querySelector("#pwd-1");
const pwdField2 = document.querySelector("#pwd-2");
const pswErrorMsg = document.querySelector(".psw-match-message");

// The 'testPassword' function compares the values of two password fields ('pwdField1' and 'pwdField2')
// and updates their states based on the comparison.
// It also defines two helper functions, 'setValidState' and 'setInvalidState',
// which update the visual appearance of the password fields and display an error message accordingly.

function testPassword() {
    if (pwdField1.value == "" || pwdField2.value == "" || pwdField1.value !== pwdField2.value) {
        setInvalidState(pwdField1, pwdField2);
    } else if (pwdField1.value == pwdField2.value) {
        setValidState(pwdField1, pwdField2);
    }
}

function setValidState(pwd1, pwd2) {
    pswErrorMsg.textContent = "";
    pwd1.style.border = "1px solid #36ca36";
    pwd2.style.border = "1px solid #36ca36";
}

function setInvalidState(pwd1, pwd2) {
    pswErrorMsg.textContent = "* Passwords do not match!";
    pwd1.style.border = "1px solid #ff0000";
    pwd2.style.border = "1px solid #ff0000";
}

pwdField1.addEventListener("keyup", testPassword);
pwdField2.addEventListener("keyup", testPassword);
