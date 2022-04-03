import React, { useEffect, useState } from 'react'
import ItemDetail from '../itemDetail';
import { stock } from '../../data/stock';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

    const [detail, setDetail] = useState(null)
    const {itemId} = useParams()
    console.log(itemId)

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
  const prom = new Promise ((req,res)=>{
    setTimeout(()=>
      req(stock),
    2000)
  })
    
  useEffect(() => {
    prom.then((res) =>{
      
      setDetail( res.find((prod)=>prod.id === Number (itemId) ))
      

 
    })
         .catch(err=>console.log("error"))
   }, [itemId])
    console.log(detail)

  return (

    <ItemDetail {...detail}/>
  )
}

export default ItemDetailContainer