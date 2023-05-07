import Item from "../Item/Item"
import './itemList.css'
const ItemList = ({productos}) =>{
    
    return (
        <div className="itemList">
           
           {productos.length!==0 ?
                <Item productos={productos}/>
            :
                <h2>C A R G A N D O . . .</h2>       
        }
            
        </div>
    )
}

export default ItemList