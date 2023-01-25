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
    
    show_tracked_data(); 
    alert("Name: "+ document.forms["signup"][id="name"].value
    +"\nUsername: "+ document.forms["signup"][id="id"].value
    +"\nGender: "+ document.forms["signup"]["sex"].value
    +"\nEmail: "+ document.forms["signup"]["email"].value
    +"\nCountry: "+ document.forms["signup"][id="country"].value
    +"\nZipcode: "+ document.forms["signup"][id="zip"].value
    +"\nLanguage(s): "+ document.forms["signup"][id="language"].value)
    event.target.submit(); 
    //window.location.href="../account/account.html";
}

function userIdValidation() {
    let user_id = document.forms["signup"][id="id"].value;
    let message;
    var x = false;
    var color ="red";
    var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/; 
    if (user_id == null || user_id == "") {
       message ="This is a required field.";
    }
    else if (user_id.length< 5 || user_id.length>12) {
        message ="The username must contain 5 to 12 characters.";
    }
    else if (/^[A-Z]+$/.test(user_id[0])){
        message="The username must start with a capital letter.";
    }

    else if (!format.test(user_id[user_id.length-1]) && !/^\d+$/.test(user_id[user_id.length-1])){
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
    
    //document.getElementsById("id").style.borderStyle = solid;
    // document.getElementsById("id").style.borderColor = color;
    // document.getElementsById("id").style.borderWidth = "thick";
}

nameValidation = () =>{
    let name= document.forms["signup"][id="name"].value;
    let message;
    var color ="red";
    var x = false;
    if (name == null || name == "")  {
        message="This is a required field.";
    }
    else if (!/^[a-zA-Z\s]*$/.test(name)) {
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
        message="This is a required field*.";
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
    
    else if (!/^\d+$/.test(zip.slice(0, 4)) || (!/^[A-Z]+$/.test(zip.slice(4, 7)))) {  
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

emailValidation = () =>{
    let email= document.forms["signup"]["email"].value; 
    let message;
    var color ="red";
    var formatEmail = /\S+@\S+\.\S+/;
    
    var x = false;
    if (email == null || email =="") {
        message="This is a required field.";
    }
    
    else if (!formatEmail.test(email)) {
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
    var formatSpecialChar = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/; 
    
    var x = false;
    if (password == null || password =="") {
        message="This is a required field.";
    }
    
    else if (password.length<12) {
        message="The password must contain at least 12 characters.";
    }
    else if (!/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/\d/.test(password) ||!formatSpecialChar.test(password)) {
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

// (isNaN(zip.slice(0, 4)) 