//start time is set to the time the page is loaded
let start = Date.now();

//clicks anywhere on the page are counted 
let clicks = 0;
document.addEventListener("click", function() {
  clicks += 1;
});

//this variable is used to count the total number of keys pressed in the field of the form
//this value is not shown when the form is submitted
var key_total = 0;

//key presses in the name field are counted
var key_name = 0;
let namefield = document.getElementById('name');
namefield.addEventListener("keypress", function() {
    key_name += 1;
    key_total += 1;
  });

//key presses in the user id field are counted
var key_id = 0;
let idfield = document.getElementById('id');
idfield.addEventListener("keypress", function() {
    key_id += 1;
    key_total += 1;
    });

//key presses in the email field are counted
var key_email = 0;
let emailfield = document.getElementById('email');
emailfield.addEventListener("keypress", function() {
    key_email += 1;
    key_total += 1;
    });

//key presses in the password field are counted
var key_password = 0;   
let passwordfield = document.getElementById('pass');
passwordfield.addEventListener("keypress", function() {
    key_password += 1;
    key_total += 1;
    });

//key presses in the address field are counted
var key_address = 0;
let addressfield = document.getElementById('street+nr');
addressfield.addEventListener("keypress", function() {
    key_address += 1;
    key_total += 1;
    });

//key presses in the zipcode and city field are counted
var key_zip_city = 0;
let zipfield = document.getElementById('zip+city');
zipfield.addEventListener("keypress", function() {
    key_zip_city += 1;
    key_total += 1;
    });

//key presses in the country field are counted
var key_country = 0;
let countryfield = document.getElementById('country');
countryfield.addEventListener("keypress", function() {
    key_country += 1;
    key_total += 1;
    });

//key presses in the language field are counted
var key_language = 0;
let languagefield = document.getElementById('language');
languagefield.addEventListener("keypress", function() {
    key_language += 1;
    key_total += 1;
    });

//key presses in the bio field are counted
var key_bio = 0;
let biofield = document.getElementById('bio');
biofield.addEventListener("keypress", function() {
    key_bio += 1;
    key_total += 1;
    });

//key presses anywhere on the page are counted
//opposed to key_total that only counts key presses in form fields
//this value is shown for the total number of key presses after submitting the form
var key_total_2 = 0;
document.addEventListener("keypress", function() {  
    key_total_2 += 1;
    });

//this function is called when the form is submitted
function show_tracked_data(){
    //end time is set to the time the form is submitted
    let end = Date.now();
    //the total number of characters submitted in the form is calculated per field and for the total
    let name = document.getElementById('name').value.length;
    let id = document.getElementById('id').value.length;
    let email = document.getElementById('email').value.length;
    let password = document.getElementById('pass').value.length;
    let address = document.getElementById('street+nr').value.length;
    let zip_city = document.getElementById('zip+city').value.length;
    let country = document.getElementById('country').value.length;
    let language = document.getElementById('language').value.length;
    let bio = document.getElementById('bio').value.length;
    let total = name + id + email + password + address + zip_city + country + language + bio;
    
    //the hidden div under the form is made visible and the tracked data is shown
    document.getElementById("tracked_data").style.visibility= 'visible';
    document.getElementById("tracked_data").innerHTML += 
    //the time it took to complete the form is converted to seconds
    "Time to complete the form: " + (end - start)/1000 + " seconds" + "<br><br>" + 
    "Clicks: " + clicks + "<br><br>" + 
    "Input for name: " + key_name + " keys pressed and " + name + " characters submitted" + "<br><br>" +
    "Input for user id: " + key_id + " keys pressed and " + id + " characters submitted" + "<br><br>" +
    "Input for email: " + key_email + " keys pressed and " + email + " characters submitted" + "<br><br>" +
    "Input for password: " + key_password + " keys pressed and " + password + " characters submitted" + "<br><br>" + 
    "Input for address: " + key_address + " keys pressed and " + address + " characters submitted" + "<br><br>" +
    "Input for zipcode and city: " + key_zip_city + " keys pressed and " + zip_city + " characters submitted" + "<br><br>" +
    "Input for country: " + key_country + " keys pressed and " + country + " characters submitted" + "<br><br>" +
    "Input for language: " + key_language + " keys pressed and " + language + " characters submitted" + "<br><br>" +
    "Input for bio: " + key_bio + " keys pressed and " + bio + " characters submitted" + "<br><br>" +
    "Total input: " + key_total_2 + " keys pressed and " + total + " characters submitted";   
}


