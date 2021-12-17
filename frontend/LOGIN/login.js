const Login = document.querySelector('#log-button')

Login.addEventListener('click', (e) => {
    const password = document.getElementById('log-password').value
    const email = document.getElementById('log-email').value
    const showerr = document.getElementById('show-err')
    const details = {"email":email, "password":password}
    console.log(details)
    logUser("http://localhost:4000/users/login", details )
    .then(parseData => {
        if(parseData.status){
            localStorage.setItem('userInfo', JSON.stringify(parseData.data))
            alert(parseData.status)
            //redirect here
        }else{
            showerr.innerHTML = `<p style='color:red'>${parseData.message}</p>`

        }
    })
})

async function logUser(url, data) {
    const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(data)
    })

    const endData = await res.json()
    return endData
}