import { PropaneRounded } from "@mui/icons-material";
import { CircularProgress, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Item from "../item";
import { stock } from "../../data/stock";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";

const ItemList = () => {
  const [list, setList] = useState([]);
  const { categoryId } = useParams();
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    
    const prodRef = categoryId 
    ? query(collection(db, "products"),where("category","==", categoryId)) //para traer desde bd directamente con query de category
    : collection(db, "products");

    getDocs(prodRef).then((resp) => {
      const items = resp.docs.map((doc) => ({id: doc.id, ...doc.data()})) ///parseado del snapshot que vviene desde firebase-- el metodo .data() es de firebase. se genera un nuevo arreglo que ya sirve para operar
      setList(items)
      setLoading(false)
   
      }
    );

  }, [categoryId]);


  return (
    <>
      {loading &&
      <Grid container item justifyContent="center" alignItems="center" height={"50vh"}>
          <CircularProgress style={{color:" #b98411"}} /> 
        </Grid>
      }
    <Grid container item sx={{}}>        
        {list.map((item) => { 
          return (
            <Item
              name={item.name}
              description_short={item.description_short}
              img={item.img}
              price={item.price}
              id={item.id}
              key={item.id}
            ></Item>
          );
        })}

           
    </Grid>
    
    </>

  );
};

export default ItemList;
