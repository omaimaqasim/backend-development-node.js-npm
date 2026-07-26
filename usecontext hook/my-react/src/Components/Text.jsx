import React , {useContext} from 'react'
import { CounterContext } from '../context/Context'

const Text = () => {

  const value = useContext(CounterContext) 
  return (
    <div>
    {value.count}
    </div>
  )
}

export default Text
