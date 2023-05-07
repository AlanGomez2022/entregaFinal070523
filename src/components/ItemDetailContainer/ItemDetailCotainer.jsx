import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import gFetch from '../Utils/gFetch'
import { useParams } from 'react-router-dom'


export const ItemDetailCotainer = () => {
    const [product,setProduct]=useState({})
    const {pid} =useParams()
    
    useEffect(()=>{
            gFetch(parseInt(pid))//parseo porque mi mock esta en int y esto era un string
            .then(res=>setProduct(res))
            .catch(err=>console.log(err))
    },[])

    return (
    <div>
        <ItemDetail product={product}/>
    </div>
  )}

export default ItemDetailCotainer