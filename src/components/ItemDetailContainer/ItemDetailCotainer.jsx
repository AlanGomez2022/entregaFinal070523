import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { doc, getDoc, getFirestore } from 'firebase/firestore'


export const ItemDetailCotainer = () => {
    const [product,setProduct]=useState({})
    const {pid} =useParams()
    
    // ESTO ERA PARA TRAERME UN SOLO DOCUMNTO DE FIRESTORE
    useEffect(()=>{
        const db = getFirestore()
        const queryDoc = doc(db, 'productos', pid) // 3 argumentos

        getDoc(queryDoc)//getDocs
        .then(resp=>setProduct({id:resp.id,...resp.data()}))
    }, [])

    return (
    <div>
        <ItemDetail product={product}/>
    </div>
  )}

export default ItemDetailCotainer