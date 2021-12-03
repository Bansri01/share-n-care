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
            
            if (e.target.id === "firstName" && !e.target.value.firstName )  {
                setInputError(inputElement, "You must provide profile First Name");
              }
            if (e.target.id === "lastName" && !e.target.value.lastName )  {
                setInputError(inputElement, "You must provide profile Last Name");
            }
            if (e.target.id === "signupUsername" && !e.target.value.username )  {
                setInputError(inputElement, "You must provide profile Username");
            }
            if (e.target.id === "emailAddress" && !e.target.value.emailAddress )  {
                setInputError(inputElement, "You must provide profile Email Address");
            }
            if (e.target.id === "password" && !e.target.value.password )  {
                setInputError(inputElement, "You must provide profile Password");
            }   
            if (e.target.id === "phoneNumber" && !e.target.value.phoneNumber )  {
                setInputError(inputElement, "You must provide profile Phone Number");
            } 
            if (e.target.id === "country" && !e.target.value.country )  {
                setInputError(inputElement, "You must provide profile Country");
            } 
            if (e.target.id === "Biography" && !e.target.value.biography )  {
                setInputError(inputElement, "You must provide profile Biography");
            }
            if (e.target.id === "genderList" && !e.target.value.gender )  {
                setInputError(inputElement, "You must provide Gender");
            }
            if (e.target.id === "userType" && !e.target.value.userType )  {
                setInputError(inputElement, "You must provide UserType");
            }
            if (e.target.id === "dateOfBirth" && !e.target.value.dateOfBirth )  {
                setInputError(inputElement, "You must provide Date of Birth");
            } 
            //password implement        
        });
        // inputElement.addEventListener("blur", e => {
            
        //     if (e.target.id === "firstName" && (/^ *$/.test(e.target.value.firstName)))  {
        //         setInputError(inputElement, "Firstname cannot be empty");
        //       }
                    
        // });













        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });
});


