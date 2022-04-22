import React, { useEffect, useState } from 'react'
import ItemDetail from '../itemDetail';
import { stock } from '../../data/stock';
import { useParams } from 'react-router-dom';
import CategoryContainer from '../CategoryList';
import { collection, doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { CircularProgress, Grid } from '@mui/material';

const ItemDetailContainer = () => {

    const [detail, setDetail] = useState(null)
    const {itemId} = useParams()
    const [ loading, setLoading] = useState(true)

  useEffect(() => {
    const itemRef = doc(db, "products", itemId)
    getDoc(itemRef).then((doc)=> {
      const prod = {id: doc.id, ...doc.data()}
      setDetail(prod) 
      setLoading(false)
           

 
    })
         .catch(err=>console.log("error"))
   }, [itemId])
   

  return (
    <>
     {loading ? (
       
      <Grid container item justifyContent="center" alignItems="center" height={"50vh"}>
          <CircularProgress style={{color:" #b98411"}} /> 
        </Grid>
     ): <ItemDetail {...detail}/>    
      }
    </>

  )
}

export default ItemDetailContainer