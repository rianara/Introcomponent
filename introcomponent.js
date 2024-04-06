/* on button press, look at the fields to see if theyre filled in, check if email follows rules 
all lines that dont follow rules should be emptied and show error message, other fields can stay filled in? */

let button = document.querySelector(".button")
let firstName = document.querySelector("#firstName")
let lastName = document.querySelector("#lastName")
let email = document.querySelector("#email")
let password = document.querySelector("#password")
let errorText = document.querySelectorAll(".errorText")
let errorImage = document.querySelectorAll(".errorImage")

let inputs = [firstName, lastName, email, password]

button.onclick = function(){
    for (let i = 0; i < inputs.length; i++){ 
        if (inputs[i].validity.valueMissing === true){
            errorText[i].innerText = inputs[i].attributes.name.value + " cannot be empty";
            inputs[i].attributes.placeholder.value = "";
            inputs[i].style.borderColor = "#ff0000";
            inputs[i].style.borderWidth = "2px";
            errorImage[i].style.visibility = "visible";
        }
        else if (inputs[i].validity.typeMismatch === true){
            errorText[i].innerText = "Not a valid email";
            inputs[i].attributes.placeholder.value = "";
            inputs[i].style.borderColor = "#ff0000";
            inputs[i].style.borderWidth = "2px";
            errorImage[i].style.visibility = "visible"
        }
        else{
            inputs[i].style.borderColor = "";
            inputs[i].style.borderWidth = "";
            errorText[i].innerText = "";
            errorImage[i].style.visibility = "hidden"
        }
    }
};
