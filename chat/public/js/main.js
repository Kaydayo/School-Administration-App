const socket = io()
const arrowSubmit = document.getElementById('send-icon')
const chatMsg = document.getElementById('chart-content')

const {username, room} = Qs.parse(location.search, {ignoreQueryPrefix: true})

console.log(username, room)
 
socket.emit('joinRoom',{username, room})

socket.on('message', message =>{
    outputMessage(message)
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

function outputMessage(message){
    const divNew = document.createElement('div');
    divNew.classList.add('sent-chat');
    divNew.innerHTML= `<p id='lil-info'>${message.username}  <span> ${message.time}</span></p><p> ${message.text}</p>`
    document.getElementById('chart-content').appendChild(divNew)
}