import React , {useState} from 'react'
import PropTypes from 'prop-types'


const CounterApp = ({value}) => {
    const [counter, setCounter ]= useState (value)

    const handleAdd= (e) => {
        setCounter (counter +1)
    }
    const handleSubstract = (e) =>  {
        setCounter (counter -1)
    }
    const handleReset = (e) => {
        setCounter (value) 
    }

  return (
    <div>
        <h1>Counter</h1>
        <h2>{counter}</h2>
        <button onClick={handleSubstract}>-1</button> {/* no se pone con parentesis la funcion por que toma por defecto que on click es un evento , es lo mismo que ponerla (e)=>{handleAdd (e)} */}
        <button onClick={handleReset}>Reset</button> 
        <button onClick={handleAdd}>+1</button> 
    </div>
  )
}

CounterApp.propTypes = {
    value: PropTypes.number
    
}
export default CounterApp