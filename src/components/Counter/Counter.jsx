import { useState } from "react"
import './counter.css'
import useConter from "../hooks/useConter"
import { Link } from "react-router-dom"

 const Counter = ({initial =1, max=5, min=1,onAdd}) =>{
    const {contador, incrementar, decrementar,reset} = useConter(initial, max, min )
    const [inputType,setInputType] = useState('button')

   const intercambiabilidad = () =>{
        setInputType('input')
   } 

  function handleOnAdd(){   
        intercambiabilidad()
        onAdd(contador)
    }
    return(
        <div id="counter">
            {
                inputType === 'button' ?
                <>
                    <button onClick = {decrementar} type="button" className="btn btn-outline-primary">-</button>
                    <label className='label'>{contador}</label>
                    <button onClick= {incrementar} type="button" className="btn btn-outline-primary">+</button>
                    <br /><br />
                    <button className="btn" onClick={reset}>Reset 🔙</button>
                    <button  type="button" className="btn btn-outline-primary" onClick={handleOnAdd}> 🛒 Agregar al Carrito </button>
                </>
                :
                <>
                    <Link to="/cart"><button className="btn btn-outline-primary"> Ir al carrito</button></Link> 
                    <Link to="/"><button className="btn btn-outline-primary"> Seguir comprando </button></Link> 
                </>
            }

           
          
            
        </div>
    )
 }

    
 
 export default Counter