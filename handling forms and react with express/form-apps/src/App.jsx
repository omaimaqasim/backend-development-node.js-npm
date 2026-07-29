import { useState } from 'react'
import './App.css'
import { useForm } from 'react-hook-form'
function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();


  const onSubmit = (data)=> console.log(data)
  return (
    <>
      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input placeholder='username' type="username" {...register("username" , 
            {required :{value : true , message: "this field is required"} , minLength: {value : 3 , message: "min length is 3"},
          maxLength: {value : 8 , message: "max length is 8"}}
          )} />  
          {errors.username && <div className="red">{errors.username.message}</div> } 
          <br />
          <input placeholder='password'{...register("password")} type="password" />
          <input type="submit" />
        </form>
      </div>

    </>
  )
}

export default App
