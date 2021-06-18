import React,{useState} from 'react'

const Checkbox = () => {
    const [op1,setop1]=useState(false);
    const [op2,setop2]=useState(false);
    const [op3,setop3]=useState(false);
    return (
        <>
          <input type="checkbox" checked={op1} onChange={e=>setop1(e.target.checked)}/><span> Option1</span><br />
          <input type="checkbox" checked={op2} onChange={e=>setop2(e.target.checked)}/><span> Option2</span><br />
          <input type="checkbox" checked={op3} onChange={e=>setop3(e.target.checked)}/><span> Option3</span><br />  
        </>
    )
}

export default Checkbox
