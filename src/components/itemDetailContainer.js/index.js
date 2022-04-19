import React, { useEffect, useState } from 'react'
import ItemDetail from '../itemDetail';
import { stock } from '../../data/stock';
import { useParams } from 'react-router-dom';
import CategoryContainer from '../CategoryList';
import { collection, doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';

const ItemDetailContainer = () => {

    const [detail, setDetail] = useState(null)
    const {itemId} = useParams()
    console.log(detail)

  useEffect(() => {
    const itemRef = doc(db, "products", itemId)
    getDoc(itemRef).then((doc)=> {
      const prod = {id: doc.id, ...doc.data()}
      setDetail(prod) 
           

 
    })
         .catch(err=>console.log("error"))
   }, [itemId])
   

  return (
    <>
    
    
    
    <ItemDetail {...detail}/>
    </>

  )
}

export default ItemDetailContainer