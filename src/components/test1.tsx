import React, {useEffect, useState} from 'react'


const useCustoHook = (inicial) => {
    console.log('init useCustoHook')
    const [contador, setContador] = useState(inicial)
    const incrementar = () => {
      console.log('onclick');
      setContador(contador+1)
    }

    console.log('useCustoHook')
    return [contador, incrementar]
  
}
export function Test(props) {
    const {v1} = props
    const {v2} = props

    const [contador, incrementar] = useCustoHook(0)

    useEffect(() => {
        console.log('useEffect')    
        document.title = contador
    }
    , [contador])
    console.log('Test componenet')
    
  return (
    <div>
        <p>Contador = {contador}</p>
        <p>v1={v1}</p>
        <p>v2={v2}</p>
        {props.children}
        <button onClick={ incrementar}> Click Me</button>
    </div>
  )
}

Test.propTypes = {}




