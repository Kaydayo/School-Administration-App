

const Login = () => {
    return (
        <form className="add-form">
            <div className="form-control">
                <label>Email</label>
                <input type = "email" placeholder="Add Email"></input>
            </div>
            <div className="form-control">
                <label>Password</label>
                <input type = "password" placeholder="Add Password"></input>
            </div>

            <input type = 'submit' value = 'Login' className="btn btn-block" style = {{backgroundColor:'purple'}}/>
        
        
            
        </form>
    )
}

export default Login
