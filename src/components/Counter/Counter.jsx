import { useState } from "react"
import './counter.css'
import useConter from "../hooks/useConter"

 const Counter = ({initial =1, max=5, min=1,onAdd}) =>{
    const {contador, incrementar, decrementar,reset} = useConter(initial, max, min )

  function handleOnAdd(){
        onAdd(contador)
    }
    return(
        <div id="counter">
            <button onClick = {decrementar} type="button" className="btn btn-outline-primary">-</button>
            <label className='label'>{contador}</label>
            <button onClick= {incrementar} type="button" className="btn btn-outline-primary">+</button>
            <br /><br />
            <button className="btn" onClick={reset}>Reset 🔙</button>
            <button  type="button" className="btn btn-outline-primary" onClick={handleOnAdd}> 🛒 Agregar al Carrito </button>
          
            
        </div>
    )
 }

    
 
 export default Counter