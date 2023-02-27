// Step 1: Add event handler with the submit button
document.getElementById("btn-submit").addEventListener("click",function(){
    // step 1: Get the email address inside the email input field
    const emailField = document.getElementById("user-email");
    const email = emailField.value;
    // console.log(email);
    
    // step 2: Get the password inside the password input field
    const passField = document.getElementById("user-password");
    const pass = passField.value;
    // console.log(pass);

    // Danger: DO not verify email & password on the client side
    // Step 3: Verify email & password
    if(email === "rupok@sajmin.com" && pass === "secret"){
        console.log("Valid User");
    }
    else{
        console.log("Invalid User");
    }
})