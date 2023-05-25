import React from 'react'

const BuyDetail = ({formData,compra}) => {
  return (
    <div className='text-center'>
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
                  </div>
  )
}

export default BuyDetail