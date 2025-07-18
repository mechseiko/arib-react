import logo from "../images/geegstack.png"
import { Link } from "react-router-dom";
// import EditProfileButton from "../../public/Button";
// props are used the same way we use parameters in functions, props will represent an object!
// An object of variables which are styles!
const User = ({studentName, course, location, image}) => {
    return(
        <article className="user">
            <img src = {logo} alt="logo" width="200px" />
            {!course ? <img src = {image} alt="userImg" width="200px" /> : <></>}
            <h1 style = {{color: "brown", fontSize: "2rem"}}>{studentName.toUpperCase()}</h1>
            <hr />
            {course ? <p>This is {studentName}, a student of Geegstack Academy studying {course}</p> : <></> }
            {location ? <p>This is {studentName}, Located at {location}</p> : <></>}
            {/* As ARIB SIR said:
            Note that when using ternary operators to define conditions
            The following will return false in Javascript
            1. 0
            2. ""
            3. Undefined
            4. Null */}
            {course ? <Link to={"/users/" + studentName}>See Student Profile</Link> : <Link to={"/users/" + studentName}>See Character Profile</Link>}            {/* <a href={"/users/" + studentName}>See profile</a> */}
        </article>
    )
} 
export default User