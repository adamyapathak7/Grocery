import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const SingleRecipe = () => {
    let location=useLocation()
    console.log(location.state.recipe)
  return (
    <div className='container'>
<div className='row mt-2'>
    <div className='col-md-6 d-flex justify-content-center'>
        <img src={location.state.recipe.image} alt=''/>
    </div>
      <div className='col-md-6'>
        <h3 className='text-center'>{location.state.recipe.label}</h3>
        <h5 className='text-center'>Meal-Type:{location.state.recipe.mealType}</h5>
        <div className='text-center'>
            <Link to={location.state.recipe.url} className='btn btn-success'>View recipe</Link>
        </div>
        <div className='row my-3 gap-2 d-flex justify-content-center'>
            <div className='=col-3 bg-warning'>
                <p>FAT</p>
                <p>{Math.floor(location.state.recipe.digest[24].total)}g</p>
            </div>
            <div className='col-3 bg-warning'>
                <p>"Cholesterol"</p>
                <p>{Math.floor(location.state.recipe.digest[3].total)}g</p>
            </div>
            <div className='col-3 bg-warning'>
                <p>"SUGAR"</p>
                <p>{Math.floor(location.state.recipe.digest[24].total)}g</p>
            </div>
        </div>
        <div className='row my-3 gap-2 d-flex justify-content-center'>
            <div className='col-3 bg-warning'>
            <p>FAT</p>
                <p>{Math.floor(location.state.recipe.digest[24].total)}g</p>
            </div>
            <div className='col-3 bg-warning'>
                <p>"Cholesterol"</p>
                <p>{Math.floor(location.state.recipe.digest[3].total)}g</p>
            </div>
            <div className='col-3 bg-warning'>
                <p>"SUGAR"</p>
                <p>{Math.floor(location.state.recipe.digest[24].total)}g</p>
            </div>
        </div>
      </div>
    </div>
    <div className='row bg-warning mt-2'>
    <div className='col-md-6 m-auto d-flex justify-content-center'>
        <ul className="">
            <h3>Ingredients</h3>
            {location.state.recipe.ingredientLines.map((text)=>{
                return<li>{text}</li>
            })}
        </ul>
    </div>
    </div>
    
    </div>
  )
}

export default SingleRecipe
