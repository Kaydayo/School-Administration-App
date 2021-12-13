import React from 'react'

const RegisterTeacher = () => {
    return (<div id='form-content'>
        <h1>Teacher Registration</h1>
        <form action="">
            <div id="teacher-name">
                <div><label htmlFor="Name">❗️Teacher's Name:</label>
                <input type="text" name="teacher-name" class="teacher-name" placeholder="Enter teachers name" /></div>
                <div>
                <label htmlFor="Name">Teacher's Middle Name: </label>
                <input type="text" name="teacher-name" class="teacher-name" placeholder="Enter teachers name" />
                </div>
                <div>
                <label htmlFor="Name">Teacher's Last Name: </label>
                <input type="text" name="teacher-name" class="teacher-name" placeholder="Enter teachers name" />
                </div>
            </div>
            <div id="line2">
                <div><label htmlFor="email">❗️Email: </label>
                <input type="text" name="teacher-email" class="teacher-email" placeholder="Enter teachers email" /></div>
                <div>
                <label htmlFor="DOB">DOB</label>
                <input type="date" name="DOB" id="DOB" />
                </div>
                <div>
                <label htmlFor="StateOfOrigin">State Of origin: </label>
                <select>
                    <option disabled selected>--Select State--</option>
                    <option value="Abia">Abia</option>
                    <option value="Adamawa">Adamawa</option>
                    <option value="Akwa Ibom">Akwa Ibom</option>
                    <option value="Anambra">Anambra</option>
                    <option value="Bauchi">Bauchi</option>
                    <option value="Bayelsa">Bayelsa</option>
                    <option value="Benue">Benue</option>
                    <option value="Borno">Borno</option>
                    <option value="Cross Rive">Cross River</option>
                    <option value="Delta">Delta</option>
                    <option value="Ebonyi">Ebonyi</option>
                    <option value="Edo">Edo</option>
                    <option value="Ekiti">Ekiti</option>
                    <option value="Enugu">Enugu</option>
                    <option value="FCT">Federal Capital Territory</option>
                    <option value="Gombe">Gombe</option>
                    <option value="Imo">Imo</option>
                    <option value="Jigawa">Jigawa</option>
                    <option value="Kaduna">Kaduna</option>
                    <option value="Kano">Kano</option>
                    <option value="Katsina">Katsina</option>
                    <option value="Kebbi">Kebbi</option>
                    <option value="Kogi">Kogi</option>
                    <option value="Kwara">Kwara</option>
                    <option value="Lagos">Lagos</option>
                    <option value="Nasarawa">Nasarawa</option>
                    <option value="Niger">Niger</option>
                    <option value="Ogun">Ogun</option>
                    <option value="Ondo">Ondo</option>
                    <option value="Osun">Osun</option>
                    <option value="Oyo">Oyo</option>
                    <option value="Plateau">Plateau</option>
                    <option value="Rivers">Rivers</option>
                    <option value="Sokoto">Sokoto</option>
                    <option value="Taraba">Taraba</option>
                    <option value="Yobe">Yobe</option>
                    <option value="Zamfara">Zamfara</option>
                </select>
                </div>
            </div>
            <div id="line3">
                <div>
                <label htmlFor="Nationality">Nationality: </label>
                <input type="text" name="nationality" id="nationality" />
                </div>
               <div>
               <label htmlFor="Phone No">❗️Phone no: </label>
                <input type="number" name="phone-no" id="phone-no" />
               </div>
               <div>
               <label htmlFor="Address">Address</label>
                <input type="text" name="address" id="address" />
               </div>
            </div>
            <div id="line4">
                <div>
                <label htmlFor="pin">PIN: </label>
                <input type="password" name="pin" id="pin" />
                </div>
                <div>
                <label htmlFor="Repeatpin">REPEAT PIN: </label>
                <input type="password" name="Repeatpin" id="pin" />
                </div>
            </div>
            <div id="line5">
                <div>
                <label htmlFor="passport">Upload passport: </label>
                <input type="file" name="Passport" id="passport" />
                </div>
            </div>
            <div id="submit">
                <input type="button" value="Submit" />
            </div>
        </form>
    </div>
    )
}

export default RegisterTeacher
