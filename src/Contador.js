import React, {useState}from 'react'


export const Contador = ({value, date}) => {
    const [counter, setCounter] = useState (value)
    const [fecha, setFecha]=useState (date)
    const click = () => {
        setCounter (counter+1)
        setFecha (Date())
        console.log (Date ())
    }

  return (
      <div>
        <button onClick={()=>click ()}></button>
        <div>{counter}</div>
        <div>{fecha}</div>
      </div>
  )
}
