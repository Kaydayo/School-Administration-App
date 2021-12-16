const path = require('path')
const http = require('http');
const express = require('express')
const socketio = require('socket.io')
const formatMessage =  require('./utils/messages')

const app = express()
const server = http.createServer(app)
const io = socketio(server)
const botName = 'F.M.S bot'

app.use(express.static(path.join(__dirname, 'public')))

io.on('connection', socket => {
    console.log('trial...')
    socket.on('joinRoom', ({username, room })=>{

        socket.join('fmsgroup')
        socket.emit('message', formatMessage(botName , 'welcome to yoursocket'))


    socket.broadcast.emit('message', 'A user has joined the chat');
 

    })
    
   

    socket.on('chatMessage', msg =>{
        io.emit('message',formatMessage('USER', msg))
    })

    socket.on('disconnect', ()=> {
        io.emit('message', formatMessage(botName ,'A user has left the chat'))
    }); 
    
} )



const port = 9000 || process.env.PORT



server.listen(port, ()=> console.log(`server running on port ${port}`))

