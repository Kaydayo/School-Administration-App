//ROUTING WITH BUTTONS
const next = document.querySelector('.next-btn input')
const cancel = document.querySelector('.cancel-btn input')

cancel.addEventListener('click', (e)=>{
    e.preventDefault()
    window.open("../LOGIN/login.html", "_self")
    localStorage.clear()
})

//ROUTING WITH HEAD DETAILS
const subjectDetails = document.getElementById('subject-details')
subjectDetails.addEventListener('click', (e)=>{
    e.preventDefault()
    window.open("subjectinfo.html", "_self")
})


//RESTORE INFORMATION ENTERED ON REFRESH
document.getElementById("first-name") =  getSavedValue("first-name")
document.getElementById("middle-name") =  getSavedValue("middle-name")
document.getElementById("last-name") =  getSavedValue("last-name")
document.getElementById("email")=  getSavedValue("email")
document.getElementById("dob") =  getSavedValue("dob")
document.getElementById("nationality") =  getSavedValue("nationality")
document.getElementById("phone-number") =  getSavedValue("phone-number")
document.getElementById("occupation") =  getSavedValue("occupation")
document.getElementById("home-address") =  getSavedValue("home-address")



function saveValue(e){
    var id = e.id;  
    var val = e;
    localStorage.setItem(id, val)
}

function getSavedValue  (v){
    if (!localStorage.getItem(v)) {
        return "";
    }
    return localStorage.getItem(v);
}
//TOGGLE PASSWORD EYE ICON
const togglePassword1 = document.querySelector('#togglePassword1');
const togglePassword2 = document.querySelector('#togglePassword2');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password')


togglePassword1.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye / eye slash icon
    this.classList.toggle('bi-eye');
});
togglePassword2.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = confirmPassword.getAttribute('type') === 'password' ? 'text' : 'password';
    confirmPassword.setAttribute('type', type);
    // toggle the eye / eye slash icon
    this.classList.toggle('bi-eye');
});






//FORM VALIDATION
next.addEventListener('click', (e)=>{
    e.preventDefault()
    let firstName = document.getElementById("first-name")
    let middleName = document.getElementById("middle-name")
    let lastName = document.getElementById("last-name")
    let email = document.getElementById("email")
    let dob = document.getElementById("dob")
    let nationality = document.getElementById("nationality")
    let phoneNumber = document.getElementById("phone-number")
    let occupation = document.getElementById("occupation")
    let homeAddress = document.getElementById("home-address")
    if(!firstName.value){
        alert('All credentials must be filled!')
    }else if(confirmPassword.value !== password.value ){
        alert('passwords do not match')
    }else{
        window.open("subjectinfo.html", "_self")
    }
    
})
