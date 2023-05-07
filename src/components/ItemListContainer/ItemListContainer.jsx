import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import gFetch from "../Utils/gFetch"
import { useParams } from "react-router-dom"

const ItemListContainer = ()=>{
    const [productos,setProductos] = useState([])
    const {cid} =useParams()
    useEffect(()=>{
        if(cid){
            gFetch()
            .then(res=>setProductos(res.filter(prod=>prod.categoria===cid)))
            .catch(err=>console.log(err))
            .finally(()=>console.log('Proceso terminado'))
        }else{
            gFetch()
            .then(res=>setProductos(res))
            .catch(err=>console.log(err))
            .finally(()=>console.log('Proceso terminado'))
        }
      
    },[cid])
    
    
    return(
        <div style={{'backgroundColor':'lightblue', 'padding':'20px'}}>
            SOY ITEM LIST CONTAINER
            <ItemList productos={productos}/>    
        </div>
        
        
    )
}
export default ItemListContainer
