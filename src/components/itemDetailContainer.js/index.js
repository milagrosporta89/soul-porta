import React, { useEffect, useState } from 'react'
import ItemDetail from '../itemDetail';

const ItemDetailContainer = () => {

    const [detail, setDetail] = useState()

    const product = 

    {   
      id: 1, 
      name: "CUARZO ROSA",
      description_short: "Amuleto del Amor",
      description_long: "Armoniza la energia para todo fluya en tu corazon",
      price: "$2000",
      img: "../../img/cuarzo.jpg",
      stock: 4
    }
  ;

    
    const promProduct = new Promise ((req,res)=>{
        setTimeout(()=>
          req(product),
        2000)
      })
    
    useEffect(() => {
    promProduct.then(res=>setDetail(res))
            .catch(err=>console.log("error"))
    }, [])
    

  return (

    <ItemDetail {...detail}/>
  )
}

export default ItemDetailContainer