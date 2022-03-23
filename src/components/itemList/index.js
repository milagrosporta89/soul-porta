import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Item from "../item";


const ItemList = () => {
  const [list, setList] = useState ([])
  const products = [
    {
      name: "CUARZO",
      description: "Amuleto Protector",
      price: "$2000",
      img: "../../img/cuarzo.jpg",
    },
    {
      name: "TURMALINA",
      description: "Amuleto guia",
      price: "$2030",
      img: "../../img/cuarzo.jpg",
    },
    {
      name: "LAPIAZULI",
      description: "Amuleto Sueños",
      price: "$2500",
      img: "../../img/cuarzo.jpg",
    },
    {
      name: "CUARZO ROSA",
      description: "Amuleto del Amor",
      price: "$2000",
      img: "../../img/cuarzo.jpg",
    },
  ];
  const prom = new Promise ((req,res)=>{
    setTimeout(()=>
      req(products),
    2000)
  })

  useEffect(() => {
   prom.then(res=>setList(res))
        .catch(err=>console.log("error"))
  }, [])
  
  

  

console.log(list)
  

  return (
    <Grid container item sx={{ gap: 1 }}>
      {list.map((item) => {
        return (
          <Item
            name={item.name}
            description={item.description}
            img={item.img}
            price={item.price}
          ></Item>
        );
      })}
    </Grid>
  );
};

export default ItemList;
