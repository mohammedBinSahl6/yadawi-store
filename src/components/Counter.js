import { useState } from "react"

export default function Counter(){
    const[value,setValue] = useState(0)
  const [names , setNames] = useState([])
  const [name , setName]= useState('')
  function add(){
    setValue(value +1)
  }
  
  function minus(){
    setValue(value - 1)
  }

function addName(e){
e.preventDefault(e)
setNames(
  names.push(name)
)
}

  function namess(){
    return(
      names.map((n,index)=>(
        <li key={index} className='list-group-item'>{n}</li>
      ))
    )
  }
  
  
  
  
    return(
        <>
        
        
<div className='f-holder'>
<button onClick={add} className='btn btn-success' disabled={value==5}>Add</button>
 <h1 className='p-5'>{value}</h1>
<button onClick={minus} disabled={value==0} className='btn btn-danger' >minus</button>

</div>

<div className='container pt-5 mt-5'>
  <div className='row'>
    <div className='col-sm-6'>
    <form onSubmit={addName}>
    <input className='form-control' value={name} onChange={e=>setName(e.target.value)}/>
    <button className='btn btn-primary mt-3' type='submit'>Add</button>
  </form>
    </div>
    <div className='col-sm-6'>
      <ul className='list-group'>
      {namess}
      </ul>
    </div>
  </div>
</div>




        
        </>
    )
}