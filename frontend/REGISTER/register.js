//ROUTING WITH BUTTONS

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

const oathDetails = document.getElementById('oath-details')
oathDetails.addEventListener('click', (e)=>{
    e.preventDefault()
    window.open("oathinfo.html", "_self")
})


//RESTORE INFORMATION ENTERED ON REFRESH
document.getElementById("first-name").value =  getSavedValue("first-name")
document.getElementById("middle-name").value =  getSavedValue("middle-name")
document.getElementById("last-name").value =  getSavedValue("last-name")
document.getElementById("email").value=  getSavedValue("email")
document.getElementById("dob").value =  getSavedValue("dob")
document.getElementById("nationality").value =  getSavedValue("nationality")
document.getElementById("phone-number").value =  getSavedValue("phone-number")
document.getElementById("occupation").value =  getSavedValue("occupation")
document.getElementById("home-address").value =  getSavedValue("home-address")

function saveValue(e){
    var id = e.id;  
    var val = e.value;
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




const error = document.getElementById('show-error')
const next = document.querySelector('.next-btn input')
console.log(next)
//FORM VALIDATION
next.addEventListener('click', (e)=>{
    
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
        error.innerHTML = `<p style="color:red" class='lines'> All credentials must be filled ❗️</p>`
    }else if(!middleName.value){
        error.innerHTML = `<p style="color:red" class='lines'> All credentials must be filled ❗️</p>`
    }else if(!lastName.value){
        error.innerHTML = `<p style="color:red" class='lines'> All credentials must be filled ❗️</p>`
    }else if(!email.value){
        error.innerHTML = `<p style="color:red" class='lines'> All credentials must be filled ❗️</p>`
    }else if(!dob.value){
        error.innerHTML = `<p style="color:red" class='lines'> All credentials must be filled ❗️</p>`
    }else if(!nationality.value){
        error.innerHTML = `<p style="color:red" class='lines'> All credentials must be filled ❗️</p>`
    }else if(!phoneNumber.value ){
        error.innerHTML = `<p style="color:red" class='lines'> All credentials must be filled ❗️</p>`
    }else if(!occupation.value){
        error.innerHTML = `<p style="color:red" class='lines'> All credentials must be filled ❗️</p>`
    }else if(!homeAddress.value){
        error.innerHTML = `<p style="color:red" class='lines'> All credentials must be filled ❗️</p>`
    }else if(!password.value){
        error.innerHTML = `<p style="color:red" class='lines'> All credentials must be filled ❗️</p>`
    }else if(!confirmPassword.value){
        error.innerHTML = `<p style="color:red" class='lines'> All credentials must be filled ❗️</p>`
    }else if(password.value !== confirmPassword.value){
        console.log('try')
        error.innerHTML = `<p style="color:red" class='lines'> passwords do not match ❌ </p>`
    }else{
        error.innerHTML = ''
        window.open("subjectinfo.html", "_self")
    }
    
})
