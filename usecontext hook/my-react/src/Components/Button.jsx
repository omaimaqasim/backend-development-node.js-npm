import React , {useContext} from 'react'
import Text from './Text'
import { CounterContext } from '../context/Context'
const Button = () => {

  const value = useContext(CounterContext)
  return (

    <div>
      <Text/>
      <button onClick={() => value.setCount((count) => count + 1)}>change count</button>
    </div>
  )
}

export default Button
