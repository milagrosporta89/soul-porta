import { PropaneRounded } from "@mui/icons-material";
import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Item from "../item";
import { stock }from "../../data/stock"



const ItemList = () => {
  const [list, setList] = useState ([])
  const { categoryId} = useParams()
  console.log (stock)

  console.log(categoryId)
  const prom = new Promise ((req,res)=>{
    setTimeout(()=>
      req(stock),
    2000)
  })

  useEffect(() => {
   prom.then((res) =>{
     
    if (categoryId){
      setList(res.filter((prod)=>prod.category === categoryId))
    }else{
      setList(res)
    }

   })
        .catch(err=>console.log("error"))
  }, [categoryId])
  
  

  

console.log(list)
  

  return (
    <Grid container item sx={{ gap: 1 }}>
      {list.map((item) => {
        return (
          <Item
            name={item.name}
            description_short={item.description_short}
            img={item.img}
            price={item.price}
            id={item.id}
          ></Item>
        );
      })}
    </Grid>
  );
};

export default ItemList;
