import Item from "../Item/Item"
import './itemList.css'
const ItemList = ({productos}) =>{
    
    return (
        <div className="itemList">
           
           {productos.length!==0 ?
                <Item productos={productos}/>
            :
                
                <div className="container-fluid text-center">
                    <img  src="https://64.media.tumblr.com/92967db86fb630fd5fc063e6ee1c7aa7/tumblr_inline_nqjtwp7d4e1qk1op9_1280.gif" alt="cargando" />     
                </div> 
        }
            
        </div>
    )
}

export default ItemList