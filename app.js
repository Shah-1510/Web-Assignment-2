// Auto input
var typed = new Typed(".auto-input", {
    strings: ["DATA ANALYST","WEB DEVELOPER", "BUSINESS ANALYST"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
})


// Scroll to Top
const totop = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
   if (window.pageYOffset > 100){
       totop.classList.add("active");
   }else{
       totop.classList.remove("active");
   }

})


// form validation
var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validatename(){
    var name = document.getElementById('contact-name').value;
    nameError.style.display = 'block';

    if(name.length == 0){
        nameError.innerHTML = 'Name is required';
        setTimeout(function(){nameError.style.display = 'none';}, 3000);
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Write Full Name';
        return false;
    }
    nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validatephone(){
    var phone= document.getElementById('contact-phone').value;
    phoneError.style.display = 'block';
    if(phone.length == 0){
        phoneError.innerHTML = 'Phone is Required';
        setTimeout(function(){phoneError.style.display = 'none';}, 3000);
        return false;
    }
    if(phone.length !== 10){
        phoneError.innerHTML = 'Phone no should be 10 digits';
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = 'Only input digits';
        return false;
    }
    phoneError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validateemail(){
    var email= document.getElementById('contact-email').value;
    emailError.style.display = 'block';
    if(email.length == 0){
        emailError.innerHTML = 'Email is Required';
        setTimeout(function(){emailError.style.display = 'none';}, 3000);
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'Email Invalid';
        return false;
    }
    emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}
function validatemessage(){
    var message= document.getElementById('contact-message').value;
    messageError.style.display = 'block';
    var required = 30;
    var left = required - message.length; // gives value how much character is left
    if(left > 0){
        messageError.innerHTML = left + ' more Characters Required';
        setTimeout(function(){messageError.style.display = 'none';}, 3000);
        return false;
    }
    messageError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}
function validateform(){
    if(!validatename() || !validatephone() || !validateemail() || !validatemessage()){
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fill all the fields';
        setTimeout(function(){submitError.style.display = 'none';},3000);
        return false;
    }

}