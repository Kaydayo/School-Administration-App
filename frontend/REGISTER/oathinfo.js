const back = document.querySelector('.back-btn input')
const next =  document.querySelector('.submit-btn input')
back.addEventListener('click', (e)=>{
    e.preventDefault()
    window.open('register.html', '_self')
})

next.addEventListener('click', (e)=>{
    e.preventDefault()
    window.open("oathinfo.html", "_self")
})


const personalDetails = document.getElementById('personal-details')
personalDetails.addEventListener('click', (e)=>{
    e.preventDefault()
    window.open("register.html", "_self")
})

const oathDetails = document.getElementById('oath-details')
oathDetails.addEventListener('click', (e)=>{
    e.preventDefault()
    window.open("oathinfo.html", "_self")
})

const subjectDetails = document.getElementById('subject-details')
subjectDetails.addEventListener('click',(e)=>{
    e.preventDefault()
    window.open('subjectinfo.html', "_self")
})