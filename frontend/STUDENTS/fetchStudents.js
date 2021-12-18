document.addEventListener('DOMContentLoaded', (e) => {
  e.preventDefault()
  main()
})
let url = 'http://localhost:4000/subjectReg'
    const userData = JSON.parse(localStorage.getItem('userInfo'))
const id = userData.user._id

async function main() {

  let result = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  result = await result.json()
  let studentData = result.subject
  let loggedStudent = studentData.filter((students) => {
    return students.userId === id
  })
  let studentName = ''
  let data = document.getElementById('content')
    let table = document.getElementById('table')
    // let newEle = ""
  const studentScores = loggedStudent.map((element, index) => {
   studentName = element.fullname
    return element.subjects
  })

  data.innerHTML = `<strong>Welcome</strong> ${studentName}`
 studentScores.forEach((item)=>{

  item.map((data, index)=>{
      console.log(data)
      table.innerHTML += `<tr>
          <td scope="row">${index+1}</td>
          <td>${data.subject || 'not yet registered any subjects'}</td>
          <td>${data.grade || 0}</td>
        </tr>`
  })    
  })


}






