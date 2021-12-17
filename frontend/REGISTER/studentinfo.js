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
    const userInfo = JSON.parse(localStorage.getItem("regInfo"))
    id = userInfo.user._id
   
    let subjects = getCheckedBoxes()
    console.log(subjects)
    subjects.forEach(subject => {
        console.log(subject)
        fetch(`http://localhost:4000/subjectReg/${id}`,{
            method: 'PUT',
            headers: {'Content-type':'application/json'},
            body: JSON.stringify({"subject":subject})
        })
        .then(res => res.json())
        .then(newRes => console.log(newRes) )
    })
    alert( `${subjects.length} subjects added successfully`)
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