const productos = [
    {id: 1 , name:'Fondecave' , price:'$2000', categoria: 'vinos',  descripcion: 'Cabernet - De color rojo púrpura con reflejos violáceos, este vino entrega aromas de mermelada de casis y ciruela con un sutil fondo de vainilla. Su entrada es voluminosa con taninos dulces, con persistentes notas de vainilla.' , stock:20, foto: 'https://http2.mlstatic.com/D_NQ_NP_809254-MLA31025460267_062019-O.webp'},
    {id: 2, name:'Norton' ,  price:'$2000', categoria: 'vinos',  descripcion: 'Malbec - olor rojo violáceo intenso.Aromas a ciruelas maduras, especias y pimienta negra.De buena estructura en boca, taninos dulces, redondo y aterciopelado.' , stock:30, foto:'https://http2.mlstatic.com/D_NQ_NP_904372-MLA48519322900_122021-O.webp'},
    {id: 3 , name:'Trumpeter' ,  price:'$2000', categoria: 'vinos',  descripcion: 'Chardonay - De color amarillo dorado con reflejos verdosos. Aromas a fruta de carozo como durazno maduro, manzana y notas tropicales de ananá. Es un vino elegante y de gran suavidad en boca, untuoso y con buen balance, con un fino marco mineral en su final.s' , stock:40, foto:'https://http2.mlstatic.com/D_NQ_NP_808289-MLA50019891358_052022-O.webp'},
    {id: 4 , name:'Rutini' ,  price:'$2000', categoria: 'vinos',  descripcion: 'Malbec - Rojo rubí profundo. El dúo de cepas de origen francés da como resultado un tinto armonioso y equilibrado: la Cabernet Sauvignon entrega su carácter corpóreo y pleno, y la Malbec matiza el corte con taninos suaves y dulces, realzando una combinación única de aromas y sabores frutados.' , stock:20, foto:'https://http2.mlstatic.com/D_NQ_NP_826358-MLA49900398110_052022-O.webp'},
    {id: 5 , name:'Heineken' ,  price:'$2000', categoria: 'cervezas',  descripcion:'Lager - es una cerveza única, y desde 1873 hasta la fecha conserva la misma calidad, principios e ingredientes. A diferencia de cualquier otra cerveza en México, Heineken® se fermenta en el fondo de tanques horizontales, lo que la hace mas clara, pura y durable. 5% Alc.' , stock:50  , foto:'https://http2.mlstatic.com/D_NQ_NP_824217-MLA46568875993_062021-O.webp'},
    {id: 6 , name:'Sol' ,  price:'$2000', categoria: 'cervezas',  descripcion:'Lager - Cerveza Mexicana rubia, liviana, del estilo Pilsener Lager, con un color dorado. Leve sabor a malta, frutado, refrescante y suave. ' , stock:50  , foto:'https://http2.mlstatic.com/D_NQ_NP_887412-MLA46569073160_062021-O.webp'},
    {id: 7 , name:'Miller' ,  price:'$2000', categoria: 'cervezas',  descripcion:'Lager - Miller Genuine Draft es una cerveza Premium americana. Tiene un exclusivo proceso de elaboración de 4 veces filtrada, que le da un sabor excepcionalmente suave y refrescante.' , stock:50  , foto:'https://http2.mlstatic.com/D_NQ_NP_815865-MLA46568960569_062021-O.webp'},
    {id: 8 , name:'Blue Moon' ,  price:'$2000', categoria: 'cervezas',  descripcion:'Lager - Cerveza de trigo estilo belga sin filtrar, unica por sus particulares ingredientes como cascara de naranja, cilantro y avena que le dan un sutil sabor dulce y cremoso final.' , stock:50  , foto:'https://http2.mlstatic.com/D_NQ_NP_892057-MLA52352021571_112022-O.webp'},
    {id: 9 , name:'Jack Daniels Honey' ,  price:'$2000', categoria: 'whiskies',  descripcion:'Bourbon - Este tipo de whisky se caracteriza por ser elaborado como un bourbon, aplicando la técnica de mosto ácida, la cual consiste en ser sazonado con carbón vegetal, proceso por el cual pasan todos los whiskies de Tennessee.' , stock:50  , foto:'https://http2.mlstatic.com/D_NQ_NP_704045-MLA44850206709_022021-O.webp'},
    {id: 10 , name:'Jack Daniels' ,  price:'$2000', categoria: 'whiskies',  descripcion:'Bourbon - Este tipo de whisky se caracteriza por ser elaborado como un bourbon, aplicando la técnica de mosto ácida, la cual consiste en ser sazonado con carbón vegetal, proceso por el cual pasan todos los whiskies de Tennessee.' , stock:50  , foto:'https://http2.mlstatic.com/D_NQ_NP_712680-MLA44850207740_022021-O.webp'},
    {id: 11 , name:'Jamson' ,  price:'$2000', categoria: 'whiskies',  descripcion:'Irish' , stock:50  , foto:'https://http2.mlstatic.com/D_NQ_NP_973306-MLA44850203779_022021-O.webp'},
    {id: 12 , name:'Jhonnie Walker Black' ,  price:'$2000', categoria: 'whiskies',  descripcion:'Scotch' , stock:50  , foto:'https://http2.mlstatic.com/D_NQ_NP_755824-MLA48384453394_112021-O.webp'},
    {id: 13 , name:'Jhonnie Walker Gold' ,  price:'$2000', categoria: 'whiskies',  descripcion:'Scothc' , stock:50  , foto:'https://http2.mlstatic.com/D_NQ_NP_659031-MLA51506410473_092022-O.webp'},
    {id: 14 , name:'Jhonnie Walker Red' ,  price:'$2000', categoria: 'whiskies',  descripcion:'Scotch' , stock:50  , foto:'https://http2.mlstatic.com/D_NQ_NP_618895-MLA45459067093_042021-O.webp'},
    {id: 15 , name:'Trumpeter' ,  price:'$2000', categoria: 'espumantes',  descripcion:'Extra Brut' , stock:50  , foto:'https://http2.mlstatic.com/D_NQ_NP_818058-MLA52762220057_122022-O.webp'},
    {id: 16 , name:'Baron B' ,  price:'$2000', categoria: 'espumantes',  descripcion:'Extra Brut' , stock:50  , foto:'https://http2.mlstatic.com/D_NQ_NP_733209-MLA31036044721_062019-O.webp'},

]

 const gFetch = (id) => {
    
        return new Promise ( (resolve, reject) =>{
            // reject('rechazado')
            setTimeout(  () =>{
                resolve(id ? productos.find(prod=>prod.id===id): productos)
            },1000)
            
        })
 

}
export default gFetch