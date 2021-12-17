document.addEventListener('DOMContentLoaded', (e) => {
  e.preventDefault()
  console.log("hello function")

main()
})

let url = 'http://localhost:4000/student'

async function main() {
   let result = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    result = await result.json()
    console.log(result.students)
    let studentData = result.students
studentData.forEach((element, i) => {
   const name = document.getElementById('show')
   name.innerHTML += `<div class="card" style="width: 18rem;">
    <img src="" class="card-img-top" alt="..." width="300px" height="250px">
    <div class="card-body">
      <h5 class="card-title">HERO DETAILS</h5>
      <p class="card-text">Click on the name to view more characteristics</p>
      <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
    
    </button>
    </div>
  </div>
  <!-- Button trigger modal -->

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel"></h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="flex">
      <div class="modal-body">
      <input type="text" class="form-control" placeholder="First name">
          </div>
          <div class="modal-body">
          <input type="text" class="form-control" placeholder="Last name">
          </div>
          <div class="modal-body">
          </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>`
})
}
