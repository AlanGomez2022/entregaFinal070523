import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import {collection, doc, getDoc, getDocs, getFirestore, query, where} from 'firebase/firestore'
import gFetch from "../Utils/gFetch"
import { useParams } from "react-router-dom"

const ItemListContainer = ()=>{
    const [productos,setProductos] = useState([])
    const {cid} =useParams()

    // useEffect(()=>{
    //     if(cid){
    //         gFetch()
    //         .then(res=>setProductos(res.filter(prod=>prod.categoria===cid)))
    //         .catch(err=>console.log(err))
    //         .finally(()=>console.log('Proceso terminado'))
    //     }else{
    //         gFetch()
    //         .then(res=>setProductos(res))
    //         .catch(err=>console.log(err))
    //         .finally(()=>console.log('Proceso terminado'))
    //     }
      
    // },[cid])
    
    // ESTO ERA PARA TRAERME UN SOLO DOCUMNTO DE FIRESTORE
    // useEffect(()=>{
    //     const db = getFirestore()
    //     const queryDoc = doc(db, 'productos', '5FKGawUihyiR33J1mYWS') // 3 argumentos

    //     getDoc(queryDoc)//getDocs
    //     .then(resp=>console.log({id:resp.id,...resp.data()}))
    // }, [])

    useEffect(() => {
        if(cid){
            //TRAE LOS PRODUCTOS FILTRADOS
            const db = getFirestore()
            const queryCollection = collection(db, 'productos')
            const queryFilter = query(queryCollection, where('categoria', '==', cid))
    
            getDocs(queryFilter)
            .then(resp=> setProductos(resp.docs.map(producto => ({id:producto.id, ... producto.data()}))))
            .catch (err=>console.log(err))
            .finally(()=>console.log('Proceso terminado'))
        }else{
            //TRAE TODOS LOS PRODUCTOS
            const db = getFirestore()
            const queryCollection = collection(db, 'productos')
                
            getDocs(queryCollection)
            .then(resp=> setProductos(resp.docs.map(producto => ({id:producto.id, ... producto.data()}))))
            .catch (err=>console.log(err))
            .finally(()=>console.log('Proceso terminado'))
        }
      

    }, [cid])
    
    return(
        <div style={{'backgroundColor':'darkgrey', 'padding':'20px'}}>
            
            <ItemList productos={productos}/>    
        </div>
        
        
    )
}
export default ItemListContainer
