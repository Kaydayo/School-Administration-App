const back = document.querySelector('.back-btn input')
const next =  document.querySelector('.next-btn input')
back.addEventListener('click', (e)=>{
    e.preventDefault()
    window.open('register.html', '_self')
})

function getCheckedBoxes(){
    let checkboxes = document.querySelectorAll('input[type="checkbox"]')
    let checkboxesChecked = []
    for(let i = 0; i<checkboxes.length; i++){
        if(checkboxes[i].checked){
            checkboxesChecked.push(checkboxes[i].value)
        }
    }
    return checkboxesChecked
}
next.addEventListener('click', (e)=>{
    e.preventDefault()
    const userInfo = JSON.parse(localStorage.getItem("userInfo"))
    id = userInfo.user._id
   
    let subjects = getCheckedBoxes()
    subjects.forEach(subject => {
        fetch(`http://localhost:4000/subjectReg/${id}`,{
            method: 'PUT',
            body: JSON.stringify({"subject":subject})

        })
    })
    
    // window.open("oathinfo.html", "_self")
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