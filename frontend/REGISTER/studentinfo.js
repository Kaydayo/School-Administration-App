const back = document.querySelector('.back-btn input')

back.addEventListener('click', (e)=>{
    e.preventDefault()
    window.open('register.html', '_self')
})


const personalDetails = document.getElementById('personal-details')
personalDetails.addEventListener('click', (e)=>{
    e.preventDefault()
    window.open("register.html", "_self")
})
