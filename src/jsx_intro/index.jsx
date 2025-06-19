import User from "./User"
import '../App.css'
import '../App.scss'
import { useEffect, useState } from "react"
import Job from "./Job"


// const h1Style = {
//     color: "gray",
//     textDecoration: "overline",
//     backgroundColor: "blue",
//     textAlign: "center", 
//     padding: "15px",
// }

// React doesn't allow us to change the state of an element like this
// So you have to use the useState module
// To work with each element of the array below, we use our knowledge of loops from js
const JSXIntro = () => {
    const [title, setTitle] = useState("Change Title")
    const changeTitle = () => {
       document.querySelector("button").textContent === "Change Title" ? setTitle("A new title") : setTitle("Change Title")
    }


    // INTEGRATING API IN REACT USING USEEFFECT
    // The useEffect hook is going to rerun/rerender anythinh a state is updated
    // The useEffect takes two arguments, a function and an empty array to prevent running infinite loops
    // That's how the useEffect() works


     // -----------CHARACTERS----------
    const [persons, setPersons] = useState([])
    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character", {
        // fetch("https://jobicy.com/api/v2/remote-jobs?count=20&geo=usa&industry=marketing&tag=seo", {
            method: "GET"
        })
        .then((res) => res.json())
        .then(response => {
            setPersons(response.results)
        })
        .catch(err => {
            console.log(err)
        })
        console.log(new Date())
    }, [])


    const [jobs, setJobs] = useState([])
    useEffect(() => {
        fetch("https://jobicy.com/api/v2/remote-jobs?count=20&geo=usa&industry=marketing&tag=seo", {
            method: "GET"
        })
        .then((res) => res.json())
        .then(info => {
           setJobs(info.jobs)
           console.log(info.jobs)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    // -----------STUDENTS----------
    const students = [
        {name: "Arib", course: "Fullstack Development"},
        {name: "Seiko", course: "Front-end Development"},
        {name: "Abdulqudus", course: "Web App Development"},
        {name: "Olans"},
        {name: "", course: ""},
        {name: "Mechseiko", course: ""}
    ]
    return(
        <div className="user-container">
            <h1>{title}</h1>
            <button onClick={changeTitle}>Change Title</button>
        {/* // -----------STUDENTS---------- */}
            {
                students.map((student, index) => {
                    return <User studentName = {student.name} key={index} course = {student.course}/>
                })
            }


        {/* // -----------CHARACTERS--------- */}
            {
                persons.map((person, index) => {
                    return <User studentName = {person.name} key={index} location = {person.location.name} image={person.image}/>
                })
            }

        {/* // -----------JOBS--------- */}
            {
                jobs.map((job, index) => {
                    return <Job key={index} companyName={job.companyName} jobTitle={job.jobTitle} companyLogo={job.companyLogo} jobType={job.jobType} pubDate={job.pubDate}
                    />
                })
            }
            {/* <User studentName = {"Bolaji Ajibola"} course = {"Front-End Development"} age = {20}/>
            <User studentName = {"ARIB ismail"} course = {"Back-End Development"} age = {17}/>
            <User studentName = {"OLa folu"} course = {"Full-stack Development"} age = {18}/> */}
        </div>
    )
}
export default JSXIntro;