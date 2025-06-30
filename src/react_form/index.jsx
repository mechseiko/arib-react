// import { useState } from "react";

// const FormContainer = () => {
//     // const [firstName, setFirstName] = useState("");
//     // const [lastName, setLastName] = useState("");
//     // const [email, setEmail] = useState("");
//     // const [phoneNumber, setPhoneNumber] = useState("");
//     // const [password, setPassword] = useState("");
    
//     const [form, setForm] = useState({firstName: "", lastName: "", email: "", phoneNumber: "", passoword: ""})
//     const firstNameChange = (e) => {
//         setForm({...form, firstName: e.target.value})
//     }
//     const lastNameChange = (e) => {
//         setForm({...form, lastName: e.target.value})
//     }
//     const emailChange = (e) => {
//         setForm({...form, email: e.target.value})
//     }
//     const phoneNumberChange = (e) => {
//         setForm({...form, phoneNumber: e.target.value})
//     }
//     const passwordChange = (e) => {
//         setForm({...form, password: e.target.value})
//     }
//     return(
//         <div>
//             <form action="">
//                 <div>
//                     <label htmlFor="">First name</label>
//                     <input type="text" onChange={firstNameChange}/>
//                 </div>
//                 <div>
//                     <label htmlFor="">Last name</label>
//                     <input type="text" onChange={lastNameChange}/>
//                 </div>
//                 <div>
//                     <label htmlFor="">Email</label>
//                     <input type="email" onChange={emailChange}/>
//                 </div>
//                 <div>
//                     <label htmlFor="">Phone number</label>
//                     <input type="text" onChange={phoneNumberChange}/>
//                 </div>
//                 <div>
//                     <label htmlFor="">Password</label>
//                     <input type="password" onChange = {passwordChange}/>
//                     {/* <input type="password" onChange = {(e) => {
//                         setPassword(e.target.value)
//                     }}/> */}
//                 </div>
//                 <input type="submit" value='submit'/>
//             </form>

//             <div>
//                 <p>First name: {form.firstName}</p> 
//                 <p>Last name: {form.lastName}</p>
//                 <p>Email: {form.email}</p>
//                 <p>Phone number: {form.phoneNumber}</p>
//                 <p>Password: {form.password}</p>
//             </div>
//         </div>
//     )
// }

// export default FormContainer;






// SAME CODE BUT WITH DRY PROTOCOL

import { useState } from "react";

const FormContainer = () => {
    // const [firstName, setFirstName] = useState("");
    // const [lastName, setLastName] = useState("");
    // const [email, setEmail] = useState("");
    // const [phoneNumber, setPhoneNumber] = useState("");
    // const [password, setPassword] = useState("");
    const [form, setForm] = useState({firstName: "", lastName: "", email: "", phoneNumber: "", passoword: "", gender: ""})
    const [formSubmitted, setFormSubmitted] = useState(false)

    // We are looking for a way such that we will create only one function and that function
    // will be attached to all the event handler inputs
    const inputChange = (e) => {
        console.log(e.target.name)
        // setForm({...form})
        setForm({...form, [e.target.name]: e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormSubmitted(true);
        alert("Form submitted successfully")
    }
    return(
        <div>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">First name</label>
                    <input type="text" name="firstName" onChange={inputChange}/>
                </div>
                <div>
                    <label htmlFor="">Last name</label>
                    <input type="text" name="lastName" onChange={inputChange}/>
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" onChange={inputChange}/>
                </div>
                {/* It also works for select tags! */}
                <div>
                    <label htmlFor="">gender</label>
                    <select name="gender" id="" onChange={inputChange}>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                    {/* <input type="email" name="email" onChange={inputChange}/> */}
                </div>
                <div>
                    <label htmlFor="">Phone number</label>
                    <input type="text" name="phoneNumber" onChange={inputChange}/>
                </div>
                <div>
                    <label htmlFor="">Password</label>
                    <input type="password" name="password" onChange = {inputChange}/>
                </div>
                <input type="submit" value='submit'/>
            </form>


{/* What if we want all the details below to be visible only when the form has been submitted */}

        {
            formSubmitted &&
            <div>
                <h2>User inputs</h2>
                <p>First name: {form.firstName}</p>
                <p>Last name: {form.lastName}</p>
                <p>Email: {form.email}</p>
                <p>Gender: {form.gender}</p>
                <p>Phone number: {form.phoneNumber}</p>
                <p>Password: {form.password}</p>
            </div>
        }
    {/* THERE ARE THREE TOOLS WE USE TO RENDER COMPONENTS AND CONTENTS CONDITIONALLY IN REACT, THEY ARE:
    1. TERNARY OPERATOR ? : 
    2. && LOGICAL OPERATOR
    3. || LOGICAL OPERATOR */}
    {/* USING && and || in conditional ternary operators */}
        {/* || means if this is true, then do/display this, ortherwise do that! */}
        {/* && means if this is true, then display this! */}
        </div>
    )
}
export default FormContainer;