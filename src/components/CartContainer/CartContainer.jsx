import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import { addDoc, collection, getFirestore } from 'firebase/firestore'

const CartContainer = () => {
  const {cartList,vaciarCart,quitProduct,precioTotal} = useContext(CartContext)
  const [compra,setCompra] = useState({})
  const [formData,setFormData] = useState({
    name:'',
    phone:'',
    email:''
  })
  console.log(formData)

  const handleOnChange = (event)=>{
    console.log(event.target.name)
    console.log(event.target.value)
    setFormData({
      ... formData,
      [event.target.name]: event.target.value
    })
  }
 
  const quitarProducto = (product)=>{
    quitProduct(product.id)
  }

  const handleSubmit = (event) =>{
    event.preventDefault()
    const orden = {
      buyer:formData,
      items:cartList.map(product =>{
        return(
          { id:product.id,
            item:product.name,
            price:product.price  
          }
        )
      } ),
      total:precioTotal()
    }

    const db = getFirestore()

    const queryCollection = collection(db,'orders')
    addDoc(queryCollection, orden)
    .then(resp => setCompra(resp))
    .catch(err=>console.log(err))
    .finally(()=> console.log('termino la promesa'))

    console.log('enviando orden', orden)
    vaciarCart()
  }

  return (
    <>
    {compra.id && <div className='text-center'>
                      <div className='card container bg-warning'>
                        <h2>El id de su compra es: </h2>
                        <div className='card w-50'>
                          <br />
                          <h3>{compra.id}</h3>
                          <br /><br />
                        </div>
                        <br />
                      </div>
                      <br />
                      <div className='card container bg-success'>
                        <h2>Compra a nombre de:</h2>
                        <div className='card w-50'>
                          <br />
                          <h4>Comprador: {formData.name}</h4>
                          <h4>Tel: {formData.phone}</h4>
                          <h4>E-mail:{formData.email}</h4>
                          <br /><br />
                        </div>
                        <br />
                      </div>
                      <br />                    
                  </div> }
    {cartList.length === 0 ?
    <div className='card container-fluid'>
      <h3>No hay productos</h3>
      <Link to='/'> 
        <button className='btn btn-primary text-white'>Ir a ver productos</button>
      </Link>
    </div>
    :
    <div>
        {cartList.map(product =>{
            return(
              <>
              <br />
              <div className='container card' key={product.id}>
                
                <div className='card-body'>
                  <h2 className=''>{product.name}</h2>
                  <img src={product.foto} alt="" />
                  <h3 className='card-text'>${product.price}</h3>
                  <p>Categoria: {product.categoria}</p>
                  <h3>Cantidad: {product.quantity}</h3>
                </div>
                <button className='btn' onClick={()=>quitarProducto(product)}> Quitar del carrito 🗑</button>
                
              </div>
              <br />
              </>
              )
        })}
        <div className="container text-center p-200">
          <br />
          <br />
          <h3 className='btn-info'>Precio total: $ {precioTotal()}</h3>
          <br />
          <button className='btn container btn-danger text-white text-center' onClick={vaciarCart}>⛔ Vaciar Carrito ⛔</button>
          <br /><br />
        </div>
        <div className='card container'>
          <br />
          <form onSubmit={handleSubmit} className='text-center'>
            <h2>Para finalizar la compra</h2>
            <h4>Ingrese sus datos personales</h4>
            <input className='w-100' type="text"
                   name="name"
                   placeholder='Ingrese su Nombre'
                   onChange={handleOnChange}
                   value={formData.name}
             />
             <br /><br />
             <input className='w-100' type="text"
                   name="phone"
                   placeholder='Ingrese su nro celular'
                   onChange={handleOnChange}
                   value={formData.phone}
             />
             <br /><br />
             <input className='w-100' type="text"
                   name="email"
                   placeholder='Ingrese su E-mail'
                   onChange={handleOnChange}
                   value={formData.email}
             /> <br /><br />
            <button className='btn container btn-success text-white'  >✅ Generar Orden ✅</button>
          </form>
        </div>
    </div>}
    </>
  )
}

export default CartContainer