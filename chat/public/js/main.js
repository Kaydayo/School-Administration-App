const socket = io()
const arrowSubmit = document.getElementById('send-icon')
const chatMsg = document.getElementById('chart-content')
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
let username = ''


fetch(`http://localhost:4000/student/${id}`)
.then(res => res.json())
.then(parseData => parseData.student)
.then(data => {
    username += data.firstname + ' ' + data.lastname;
    room = 'fmsgroup'
    // console.log(username)
    socket.emit('joinRoom', {username, room})
    
})




 


socket.on('message', message =>{
    if(message.username === 'F.M.S bot'){
        outputBotMessage(message)
    }else if(message.id == socket.id){
        outputMessage1(message)
    }else{
        outputMessage(message)
    }
    console.log(message)
    console.log(socket.id)
    chatMsg.scrollTop = chatMsg.scrollHeight 
    document.getElementById('message').value = ''
    document.getElementById('message').focus()
})

arrowSubmit.addEventListener('click', (e)=>{
    console.log("arrowSubmit")
    const inputText = document.getElementById('message')

    const msg = inputText.value;


    socket.emit('chatMessage', msg)
})

function outputMessage1(message){
    const divNew = document.createElement('div');
    divNew.classList.add('recieved-chat');
    divNew.innerHTML= `<p id='lil-info'>${message.username}  <span> ${message.time}</span></p><p> ${message.text}</p>`
    document.getElementById('chart-content').appendChild(divNew)
}


function outputMessage(message){
    const divNew = document.createElement('div');
    divNew.classList.add('sent-chat');
    divNew.innerHTML= `<p id='lil-info'>${message.username}  <span> ${message.time}</span></p><p> ${message.text}</p>`
    document.getElementById('chart-content').appendChild(divNew)
}

function outputBotMessage(message){
    const divNew = document.createElement('div')
    divNew.classList.add('bot-chat');
    divNew.innerHTML=`<p id='lil-info'>${message.username}  <span> ${message.time}</span></p><p> ${message.text}</p>`
    document.getElementById('chart-content').appendChild(divNew)
}


fetch("http://localhost:4000/student")
.then(res => res.json())
.then(allData => {
    const studentData = allData.students
    const showGrp = document.getElementById('Group-members')
    const grpMem = document.createElement('div')
    studentData.map(el => {
        grpMem.classList.add('all-members')
        grpMem.innerHTML += `
            <p><img class="side-m" src="https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/58/4a90e2/external-chat-group-social-media-vitaliy-gorbachev-flat-vitaly-gorbachev.png"/> <span>${el.firstname} ${el.lastname}</span></p>
         `  
    })
    showGrp.appendChild(grpMem)
})

