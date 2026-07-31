import { useState } from 'react'
import './App.css'
import { useForm } from 'react-hook-form'
function App() {
  const { register, handleSubmit, setError, formState: { errors , isSubmitting } } = useForm();

const delay = (time)=>{
   return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, time *1000);
   })
}

  const onSubmit = async (data)=>{
    await delay(3)
    console.log(data)
    //custom error

    // if(data.username !=="omaima"){
    //   setError("username" , {message: "invalid username"})
    //  }
    // if (data.password != "ummi123"){
    //         setError("password" , {message: "invalid passowrd"})
    //  }
  } 
  return (
    <>
    {isSubmitting &&  <div>submitting form wait...</div>}
   
      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input placeholder='username' type="username" {...register("username" , 
            {required :{value : true , message: "this field is required"} , minLength: {value : 3 , message: "min length is 3"},
          maxLength: {value : 8 , message: "max length is 8"}}
          )} />  
          {errors.username && <div className="red">{errors.username.message}</div> } 
          <br />
          <input placeholder='password'{...register("password" , 
            {required :{value : true , message: "this field is required"} , minLength: {value : 7 , message: "atleast 7 characters needed"},
          maxLength: {value : 10 , message: "atlmost 10 charactoers needed"}})} type="password" />
              {errors.password && <div className="red">{errors.password.message}</div> } 
          {/* disable button while form is submitting s that user acidently will not  click button again and resumit it */}
          <input disabled = {isSubmitting} type="submit" />
        {errors.myform && <div className="red">{errors.myform.message}</div> } 

          {/* if you want to create custom error if your name and password is invalid when server give you message then do this */}

        </form>
      </div>

    </>
  )
}

export default App
