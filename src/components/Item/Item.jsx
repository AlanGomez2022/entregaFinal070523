import { Link } from 'react-router-dom'
import Counter from '../Counter/Counter'
import './Item.css'

const Item = ({productos}) =>{
    return(
        <>
            {productos.map(producto =>{
               return( 
                <div key={producto.id} className="card">
                        <h3>{producto.name}</h3>
                        <img  src={producto.foto} alt="" />
                        <div className='card-body'>
                            <h4>Categoria: {producto.categoria}</h4>
                            <p className='stock'>Stock: {producto.stock}</p>
                            
                        </div>
                    <Link to={ `/detail/${producto.id}` }>
                      <button className='btn'>Detalle</button>
                    </Link>
                    </div>
               
                )
            })}
        </>
    )
}

export default Item