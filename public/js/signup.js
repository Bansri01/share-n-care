function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--error");//success removed redirect to landing after login
    messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}


//----------------function to validate Email---------------------------//
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
//---------------End of function to validate Email----------------------//

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");





    // loginForm.addEventListener("submit", e => {
    //     e.preventDefault();

    //     // Perform your AJAX/Fetch login

    //     setFormMessage(loginForm, "error", "Invalid username or password");
    // });








    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            // if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 5) {
            //     setInputError(inputElement, "Username must be at least 5 characters in length");
            // }
            
            if (e.target.id == "firstName" && !e.target.value )  {
                setInputError(inputElement, "You must provide profile First Name");
              }
            if (e.target.id === "lastName" && !e.target.value )  {
                setInputError(inputElement, "You must provide profile Last Name");
            }
            if (e.target.id === "signupUsername" && !e.target.value )  {
                setInputError(inputElement, "You must provide profile Username");
            }
            if (e.target.id === "emailAddress" && !e.target.value )  {
                setInputError(inputElement, "You must provide profile Email Address");
            }
            if (e.target.id === "password" && !e.target.value )  {
                setInputError(inputElement, "You must provide profile Password");
            }   
            if (e.target.id === "phoneNumber" && !e.target.value )  {
                setInputError(inputElement, "You must provide profile Phone Number");
            } 
            if (e.target.id === "country" && !e.target.value )  {
                setInputError(inputElement, "You must provide profile Country");
            } 
            if (e.target.id === "Biography" && !e.target.value )  {
                setInputError(inputElement, "You must provide profile Biography");
            }
            if (e.target.id === "genderList" && !e.target.value )  {
                setInputError(inputElement, "You must provide Gender");
            }
            if (e.target.id === "userType" && !e.target.value )  {
                setInputError(inputElement, "You must provide UserType");
            }
            if (e.target.id === "dateOfBirth" && !e.target.value )  {
                setInputError(inputElement, "You must provide Date of Birth");
            } 
            //password implement     
            if (e.target.id === "firstName" && (/^ *$/.test(e.target.value)))  {
                setInputError(inputElement, "Firstname cannot be empty");
            }
            if (e.target.id === "lastName" && (/^ *$/.test(e.target.value)))  {
            setInputError(inputElement, "lastName cannot be empty");
            } 
            if (e.target.id === "signupUsername" && (/^ *$/.test(e.target.value)))  {
                setInputError(inputElement, "signupUsername cannot be empty");
            }
            if (e.target.id === "emailAddress" && (/^ *$/.test(e.target.value)))  {
                setInputError(inputElement, "emailAddress cannot be empty");
            }
            if (e.target.id === "password" && (/^ *$/.test(e.target.value)))  {
                setInputError(inputElement, "password cannot be empty");
            }
            if (e.target.id === "phoneNumber" && (/^ *$/.test(e.target.value)))  {
                setInputError(inputElement, "phoneNumber cannot be empty");
            }
            if (e.target.id === "country" && (/^ *$/.test(e.target.value)))  {
                setInputError(inputElement, "country cannot be empty");
            }
            if (e.target.id === "Biography" && (/^ *$/.test(e.target.value)))  {
                setInputError(inputElement, "Biography cannot be empty");
            } 
            if (e.target.id === "genderList" && (/^ *$/.test(e.target.value)))  {
                setInputError(inputElement, "genderList cannot be empty");
            }
            if (e.target.id === "userType" && (/^ *$/.test(e.target.value)))  {
                setInputError(inputElement, "userType cannot be empty");
            }
            if (e.target.id === "dateOfBirth" && (/^ *$/.test(e.target.value)))  {
                setInputError(inputElement, "dateOfBirth cannot be empty");
            }   

            if (e.target.id === "signupUsername" && (/[^A-Za-z0-9]/g.test(e.target.value)))  {
                setInputError(inputElement, "Username should only have numbers and alphabets");
            }
            if(e.target.id === "signupUsername" && e.target.value.length < 4){
                setInputError(inputElement, "Username should have atleast 4 characters");
            }
            if(e.target.id === "emailAddress" && !validateEmail(e.target.value)){
                setInputError(inputElement, "Please Enter valid Email Address");
            }


            if(e.target.id === "password" && /\s/g.test(e.target.value)){
                setInputError(inputElement, "password cannot have spaces");
            }

        });
        // inputElement.addEventListener("blur", e => {
            
            
                    
        // });













        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });
});


