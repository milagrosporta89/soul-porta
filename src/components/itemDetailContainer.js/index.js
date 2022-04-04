import React, { useEffect, useState } from 'react'
import ItemDetail from '../itemDetail';
import { stock } from '../../data/stock';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

    const [detail, setDetail] = useState(null)
    const {itemId} = useParams()
    console.log(itemId)

  
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