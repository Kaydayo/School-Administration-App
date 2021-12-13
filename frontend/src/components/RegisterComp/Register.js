

const Register = () => {
    return (
        <form className="add-form"> 
            <div className = "title">
                <label>Title</label>
                <input type = "text" placeholder="Mr/Mrs" required></input>
            </div>
            <div className="name">
                <div>
                    <label>First Name</label>
                    <input type = "text" placeholder="First Name" required></input>
                </div>
                <div>
                    <label>Middle Name</label>
                    <input type = "text" placeholder="Middle Name" required></input>
                </div>
                <div>
                    <label>Last Name</label>
                    <input type = "text" placeholder="Last Name" required></input>
                </div>
                
            </div>
            <div className = "name" >
                <div>
                    <label>Email</label>
                    <input type = "email" placeholder="Enter email" required></input>
                </div>
                <div>
                    <label>Date Of Birth</label>
                    <input type = "date" placeholder="Date of Birth" min = '2012-01-01' max = '2020-01-01' required></input>
                </div>
                <div>
                <label for="State of Origin">State of Origin:</label>
                <select name="States" id="select">
                        <option>--Select State--</option>
                        <option>ABUJA FCT</option>
                        <option>ABIA</option>
                        <option>ADAMAWA</option>
                        <option>AKWA IBOM</option>
                        <option>ANAMBRA</option>
                        <option>BAUCHI</option>
                        <option>BAYELSA</option>
                        <option>BENUE</option>
                        <option>BORNO</option>
                        <option>CROSS RIVER</option>
                        <option>DELTA</option>
                        <option>EBONYI</option>
                        <option>EDO</option>
                        <option>EKITI</option>
                        <option>ENUGU</option>
                        <option>GOMBE</option>
                        <option>IMO</option>
                        <option>JIGAWA</option>
                        <option>KADUNA</option>
                        <option>KANO</option>
                        <option>KATSINA</option>
                        <option>KEBBI</option>
                        <option>KOGI</option>
                        <option>KWARA</option>
                        <option>LAGOS</option>
                        <option>NASSARAWA</option>
                        <option>NIGER</option>
                        <option>OGUN</option>
                        <option>ONDO</option>
                        <option>OSUN</option>
                        <option>OYO</option>
                        <option>PLATEAU</option>
                        <option>RIVERS</option>
                        <option>SOKOTO</option>
                        <option>TARABA</option>
                        <option>YOBE</option>
                        <option>ZAMFARA</option>
                </select>
                </div>
            </div>
            <div className="name">
                <div>
                    <label>Nationality</label>
                    <input type = "text" placeholder="Nationality" required></input>
                </div>
                <div>
                    <label>Phone Number</label>
                    <input type = "number" placeholder="+234800000000" required></input>
                </div>
                <div>
                    <label>Occupation</label>
                    <input type = "text" placeholder="Occupation" required></input>
                </div>   
            </div>
            <div className="form-control">
                <label>Home Address</label>
                <input type = "text" placeholder="Home Address" required></input>
            </div>
            <div className="form-control">
                <label>Password</label>
                <input type = "password" placeholder="Add Password" required></input>
            </div>
            <div className="form-control">
                <label> Repeat Password</label>
                <input type = "password" placeholder="Repeat Password" required></input>
            </div>

            <input type = 'submit' value = 'Submit' className="btn btn-block" style = {{backgroundColor:'purple'}}/>
        
        
            
        </form>
    )
}

export default Register
