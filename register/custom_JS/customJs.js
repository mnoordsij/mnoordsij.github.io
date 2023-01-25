function validation(event) {
    event.preventDefault();
    var userId=userIdValidation();
    var country =countryValidation();
    var language =languageValidation();
    var name =nameValidation();
    var zipCode =zipCodeValidation();
    var sex = sexValidation();
    var email =emailValidation();
    var password =passwordValidation();

    if (!userId || !country || !name || !language ||!zipCode ||!sex
        || !email || !password) {
        return;
    }
     
    alert("Name: "+ document.forms["signup"][id="name"].value
    +"\nUsername: "+ document.forms["signup"][id="id"].value
    +"\nGender: "+ document.forms["signup"]["sex"].value
    +"\nEmail: "+ document.forms["signup"]["email"].value
    +"\nCountry: "+ document.forms["signup"][id="country"].value
    +"\nZipcode: "+ document.forms["signup"][id="zip"].value
    +"\nLanguage(s): "+ document.forms["signup"][id="language"].value)
    window.location.href="../account/account.html";
}

containsSpecialChar = (input) =>{
    const formatSpecialChar = "/[`!@#$%^&*()_+\-=\[\]{};':\"\\\|,.<>\/?~]/"; 
    for (let c in formatSpecialChar) {
        if (input.includes(formatSpecialChar[c])){
            return true;
        }
    }
    return false;
}
containsUpperCase = (input) =>{
    for (let c in input) {
        if (input[c] == input[c].toUpperCase()){
            return true;
        }
    }
    return false;
}
containsLowerCase = (input) =>{
    for (let c in input) {
        if (input[c] == input[c].toLowerCase()){
            return true;
        }
    }
    return false;
}
containsLettersOnly = (input) =>{
    
    const allowedLowerCase = "abcdefghijklmnopqrstuvwxyz";
    const allowedUpperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const space =" ";
    for (let c in input) {
        if (!allowedLowerCase.includes(input[c])  && !allowedUpperCase.includes(input[c]) &&  !space.includes(input[c])){
            return false;
        }
    }
    return true;
}
containsNumbers = (input) =>{
    for (let c in input) {
        if (!isNaN(input[c])){
            return true;
        }
    }
    return false;
}

containsNumbersOnly = (input) =>{
    for (let c in input) {
        if (isNaN(input[c])){
            return false;
        }
    }
    return true;
}

function userIdValidation() {
    let user_id = document.forms["signup"][id="id"].value;
    let message;
    var x = false;
    var color ="red";
    
    if (user_id == null || user_id == "") {
       message ="This is a required field.";
    }
    else if (user_id.length< 5 || user_id.length>12) {
        message ="The username must contain 5 to 12 characters.";
    }
    else if (user_id[0].toUpperCase() != user_id[0]){
        message="The username must start with a capital letter.";
    }

    else if (!containsSpecialChar(user_id[user_id.length-1]) && isNaN(user_id[user_id.length-1])){
        message="The username must end end with a number or special character.";
    }
    else{
        message ="Looks good!";
        color="green";
        x=true;
    }
    document.getElementById("under-reg").innerHTML = message;
    document.getElementById("under-reg").style.color =color;
    return x;
}


nameValidation = () =>{
    let name= document.forms["signup"][id="name"].value;
    let message;
    var color ="red";
    var x = false;
    if (name == null || name == "")  {
        message="This is a required field.";
    }
    else if (!containsLettersOnly(name)) {
        message="The name must only contain letters.";
    }
    else{
        message ="Looks good!";
        color="green";
        x=true;
    }
    document.getElementById("under-name").innerHTML = message;
    document.getElementById("under-name").style.color =color;
    return x;
}

countryValidation = () =>{
    let country= document.forms["signup"][id="country"].value;
    var message;
    var color ="red";
    var x = false;
    if (country == null || country == "") {
        message="This is a required field.";
    }
    else{
        message ="Looks good!";
        color="green";
        x=true;
    }
    
    document.getElementById("under-country").innerHTML = message;
    document.getElementById("under-country").style.color =color;
    return x;
}

languageValidation = () =>{
    let language =document.forms["signup"][id="language"].value;
    let message;
    var color ="red";
    var x = false;
    if (language== null || language =="") {
        message="This is a required field.";
    }
    else{
        message ="Looks good!";
        color="green";
        x=true;
    } 
    document.getElementById("under-language").innerHTML = message;
    document.getElementById("under-language").style.color =color;
    return x;
}



zipCodeValidation = () =>{
    let zip= document.forms["signup"]["zip"].value; 
    let message;
    var color ="red";
    var x = false;
    
    if (zip == null || zip =="") {
        message="This is a required field.";
    }
    else if (zip.length!=6) {
        message="Invalid zipcode.";
    }
    
    else if (!containsNumbersOnly(zip.slice(0,4)) || !(containsUpperCase(zip[4]) && isNaN(zip[4])) || !(containsUpperCase(zip[5]) && isNaN(zip[5])) ) {  
        message="Invalid zipcode.";
    }
    
    else {
        message ="Looks good!";
        color="green";
        x=true;
    }
    document.getElementById("under-zip").innerHTML = message;
    document.getElementById("under-zip").style.color =color;
    return x;
}
sexValidation = () =>{
    let message;
    var color ="red";
    var x = false;
    var checkedSex = document.querySelector('input[type= "radio"]:checked');
    
    if (!checkedSex) {
        message="This is a required field.";
    }
    
    else {
        message ="Looks good!";
        color="green";
        x=true;
    }
    document.getElementById("under-sex").innerHTML = message;
    document.getElementById("under-sex").style.color =color;
    return x;
}

validEmail =(email) => {
    if (!email.includes("@") || !email.includes(".")){
        return false;
    }
    var atEmail = email.indexOf("@");
    var dotEmail = email.indexOf(".");
    
    if(atEmail <= 0) {
        return false;
    }

    if (dotEmail == (email.length - 1)){
        return false;
    }

    if((atEmail+1) == dotEmail) {
        return false;
    }
    return true;
}

emailValidation = () =>{
    let email= document.forms["signup"]["email"].value; 
    let message;
    var color ="red";
    
    var x = false;
    if (email == null || email =="") {
        message="This is a required field.";
    }
    
    else if (!validEmail(email)) {
        message="Invalid email address.";
    }
    
    else {
        message ="Looks good!";
        color="green";
        x=true;
    }
    document.getElementById("under-email").innerHTML = message;
    document.getElementById("under-email").style.color =color;
    return x;
}

passwordValidation = () =>{
    var password = document.forms["signup"]["password"].value; 
    let message;
    var color ="red";
    
    
    var x = false;
    if (password == null || password =="") {
        message="This is a required field.";
    }
    
    else if (password.length<12) {
        message="The password must contain at least 12 characters.";
    }
    else if (!containsUpperCase(password) || !containsLowerCase(password) || !containsNumbers(password) || !containsSpecialChar(password)) {
        message="The password must be a combination of lowercase letters, uppercase letters, numbers, and special characters.";
    }

    else if (password.length>=12 && password.length< 14) {
        message="The password is recommended to contain 14 or more characters.";
        color="orange";
        x=true;
    }
    else {
        message ="Looks good!";
        color="green";
        x=true;
    }
    document.getElementById("under-pass").innerHTML = message;
    document.getElementById("under-pass").style.color =color;
    return x;
}

showPassword  = () =>{
    
    var password = document.getElementById("password");
    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }
      
}
