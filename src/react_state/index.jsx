// There are two ways to create components in react
// 1. Class components
// 2. function components
// Hooks are tools used in function components to carry out some functions
// It was introduced in 2019. 


// Hooks used in creating react function components
// useState
// useEffect
// useRef
// useMemo
// useContext
// useReducer
// useCallback
// useId
// useOptimistic
// useActionState
// useLayoutEffect
// useInsertionEffect


// How does a class component look like
// class Counter extends React.Component {
// //     render(
//         return(
            
//         )
//     )
// }



import {useEffect, useState, useRef} from "react";

const Counter = () => {
    // FIRST PROGRAMME
    const [count, setCount] = useState(0);
    const prevCountRef = useRef();   
    useEffect(() => {
        prevCountRef.current = count
    }, [count])


    // SECOND PROGRAMME
    const [counter, setCounter] = useState(0)
    const [userInput, setUserInput] = useState("default")
    const inputRef = useRef(null)

    const increaseCounter = (num) => {
        setCounter(prevCounter => prevCounter + num)
    }
    const inputChange = function(e) {
        setUserInput(e.target.value ,"Input Value")
        console.log("e(Function inputChange parameter): " +  e);
        console.log("e.target: " +  e.target);
        console.log("e.target.value: " + e.target.value);
    }
    // The Use effect function use to operate render side effects in our function components
    
    useEffect(() => {
        setCounter((prev) => prev + 1)
        document.body.style.backgroundColor = "cyan";
        console.log("State has been changed, message logged to the console by useEffect hook")
    }, [])
    // [] passed in here is a dependency array saying only do this once!
    const clearInput  = () => {
        setUserInput("")
        inputRef.current.focus()
        console.log(inputRef.current)
    }
    return(
        <div style={{textAlign: "center", margin: "40px 0px"}}>
            <h1>FIRST PROGRAM</h1>
            <p>Now: {count}, Before: {prevCountRef.current}</p>
            <button onClick={() => {setCount(count + 1)}}>Increment Count</button>


            <h1>SECOND PROGRAM</h1>
            <h1 style={{fontSize: "4rem"}}>{counter}</h1>
            <button
            onClick={() => {
                increaseCounter(1);
            }}
            >Count</button>
            <p>{userInput}</p>
            <input type="text" ref={inputRef} onChange = {inputChange} value={userInput}/> <br />
            <button onClick={clearInput}>Clear</button>
        </div>
    )
}
export default Counter;