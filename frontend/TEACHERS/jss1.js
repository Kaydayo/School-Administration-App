document.addEventListener('DOMContentLoaded', (e) => {
  e.preventDefault()
  main()
})

let url = 'http://localhost:4000/subjectReg'
const showModal = document.getElementById('show')

async function main() {
  let result = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  result = await result.json()
  let studentData = result.subject
  let jss1Students = studentData.filter((students) => {
    return students.class === 'JSS1'
  })

  console.log(jss1Students)
  const name = document.getElementById('show')
  jss1Students.forEach((element, index) => {
    console.log('this is the element', element._id)
    name.innerHTML += `<div class="card" style="width: 18rem;">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS61Yc_gkstWIohq87UCRg29WrB5Ik6NfTs0w&usqp=CAU" class="card-img-top" alt="..." width="300px" height="250px">
    <div class="card-body">
      <h5 class="card-title primary">${element.fullname}</h5>
      <p class="card-text">${element.class}</p>
      <p class="card-text"> 'No Subject Registered'</p>
      <p class="card-text"></p>
      <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal" >update grades>>
    </button>
    </div>
  </div>
  <!-- Button trigger modal -->

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
    <form id="form${index}" data-id="${element.userId}">
      <input type="text" class="form-control text" placeholder="subject">
      <input type="number" class="form-control number" placeholder="grade: numbers only">
      <button type="submit" id="update" data-id="${element.userId}"  class="btn btn-secondary update">Update</button>
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
</form>
    </div>
  </div>
</div>`
  })
}
//understand datasets

showModal.addEventListener('click', (e) => {
  // console.log(`Show Modal@@@`)
  if (e.target.id === `update`) {
    console.log(e.target.parentElement.dataset.id)
    let id = document.getElementById('update').dataset.id
    console.log('this is the idProps', id)
    e.preventDefault()
    console.log(`i'm about to update!!!`)
    let subject = document.querySelector('.text')
    let grade = document.querySelector('.number')
    const obj = {
      subject: subject.value,
      grade: grade.value,
    }
    // console.log('i skipped that line')

    // const userData = JSON.parse(localStorage.getItem('userInfo'))
    // const id = userData.user._id
    console.log('this is the id', id)
    fetch(`http://localhost:4000/subjectReg/grade/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    })
      .then((raw) => raw.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err))
  }
})
