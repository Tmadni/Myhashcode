import React,{useState} from 'react'

const Select = () => {
    const [option,setoption]=useState("Random1");
    return (
        <>
        <select
        value={option}
        onChange={e=>{
            setoption(e.target.value)
        }}
        >
            <option value="random1">Random1</option>
            <option value="random2">Random2</option>
            <option value="random3">Random3</option>
            <option value="random4">Random4</option>
        </select><br />
        <h4>Selected value is {option}</h4>
        <br /><br /> 
        </>
    )
}

export default Select
