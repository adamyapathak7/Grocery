import React, { useState, useEffect, useRef} from 'react'
import { Link } from 'react-router-dom';
const Home = () => {
  let inputRef=useRef();
    const [item,setitem]=useState([]);
    const[searchitem,setsearchitem]=useState("pizza");
    console.log(searchitem)
    async function myData(){
        let res = await fetch(`https://api.edamam.com/search?q=${searchitem}&app_id=5877f685&app_key=d57b032f28b4fc856122f896dee0110d`)
        let data=await res.json()
        setitem(data.hits)
}

  useEffect(()=>{
    myData()
  },[searchitem])
console.log(item)
 
const handleSearch=(e)=>{
e.preventDefault()
let searchvalue=inputRef.current.value;
// console.log(searchvalue)
if(searchvalue){
  setsearchitem(searchvalue)
}}
const handleClick=(ans)=>{
  console.log(ans)
}
  return (
    <div>
      <form  onSubmit={handleSearch} className="d-flex col-md-6 m-auto my-2 " role="search">
  <input ref={inputRef}  className="form-control me-2 " type="search" placeholder="Search" aria-label="Search" />
  <button className="btn btn-outline-success" type="submit">Search</button></form>


       <div className='row d-flex gap-2 justify-content-center padding-top-30rem'>
        {item.map((ele)=>{
          return <div className="card" style={{width: "18rem"}}>
          <img src={ele.recipe.image} className="card-img-top" alt="https://edamam-product-images.s3.amazonaws.com/web-img/962/9621d023f3e19"/>
          <div className="card-body">
            <h5 className="card-title text-truncate">{ele.recipe.label}</h5>
            <div className='d-flex gap-3 justify-content-center'>
              <Link  state={ele} to="/Order" onClick={()=>handleClick(ele)} className='btn btn-danger' >Order Now</Link>
            <Link state={ele} to="/recipe" className="btn btn-primary space-between">View Recipe</Link></div>
          </div>
        </div>
          })
          }
      </div>
      </div>
      )
}

export default Home
