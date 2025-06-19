// WELCOME TO THE .JSX EXTENSION FILE
// Only one element can be returned from a component
// But multiple components can be returned if a container or a <></> is provided as a parent

import myImg from "../images/mech.jpg"

function Welcome() {
    return(
        <article className="greetings">
            {/* Any name of our choice can be given to 
                a media/i.e img file when  importing it
                But this isn't the case for css files 
                Note that all tags in react must be closed
                Even self-closing tags*/}  
            <img src={myImg} alt="myImg" height="200px"/>
            <h1>React App || Welcome Component</h1>
        </article>
    )
}
export default Welcome;