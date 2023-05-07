import { useState } from "react"

const useConter = ({inicial=1, max=5, min=1}) => {
    console.log()
    if(inicial<min || inicial>max){
        inicial=min
    }
    const [contador,setCount] = useState(min)
    
    const   decrementar = () =>{
        if(contador>min){
            setCount(contador - 1)
    
        }}
        
        const incrementar = () => {
            if(contador<max){
                setCount(contador + 1)
            }
           
        }
        const reset= ()=>{
            setCount(inicial)
        }
  return {contador, incrementar, decrementar,reset}
  
}

export default useConter