
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Card from "./components/Card"
import "./index.css"
function App() {


  return (
    //this is just a wraper and this is the syntax to use jsx which means using js with html at exact time
   //remmeber that in return their should be one div or wraper in that you should write code for your app
   <>
    <Navbar/>

<div className="cards">
    <Card title = "modesty" description ="modesty is the beauty."/>
    <Card title = "pakistan" description ="Pakistan is the beauty."/>
    <Card title = "animals" description ="animals are more loyal than humans."/>
</div>


    <Footer/>
    </>
  )
}

export default App
