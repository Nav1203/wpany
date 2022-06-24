const phoneInputField = document.querySelector("#phone");
const phoneInput = window.intlTelInput(phoneInputField, {
    utilsScript:
        "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});
function verifyphon(num)
{
    phoneno=/^\+?([0-9]{10})$/;
    return phoneno.test(num);
}
function send(){
    var valhold= document.getElementById('phone');
    var phone=phoneInput.getNumber();
    if(phone.length<7)
    {
        alert('Enter Valid Number!');
    }
    else{
    var pref='https://wa.me/';
    var url=pref+phone;
    window.open(url);
    }
}
