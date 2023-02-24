import React, { useState, useEffect } from "react";
import "./AddCar.css";
import axios from 'axios';
import { useForm } from "react-hook-form";

// import { toast } from 'react-toastify'

import { useNavigate } from "react-router-dom";

function AddCar() {
  const intialState = {
    name: '',
    brand: '',
    price: '',
    year: '',
    kms: '',
    fuel:'',
    regNo:'',
    image:'',
}
const [preview, setPreview] = useState()
const [signUpData, setSignupData] = useState(intialState)

const handleSignUp = async (e) => {
  console.log();
    e.preventDefault();
    const formData = new FormData();
        
    formData.append("image", signUpData.image);
    formData.append("name", signUpData.name);
    formData.append("brand", signUpData.brand);
    formData.append("price", signUpData.price);
    formData.append("year", signUpData.year);
    formData.append("kms", signUpData.kms);
    formData.append("fuel", signUpData.fuel);
    formData.append("regNo", signUpData.regNo);
    console.log(signUpData.image);
    // const res = await fetch("http://localhost:5000/admin/addCars", {
    //         method: "POST",
    //         body: intialState,
    //     }).then((res) => {
          
    //       alert('company addded');
    //     })  
        
          await axios.post("http://localhost:5000/admin/addCars",formData).then((res) => {
              console.log(res) })
          // await axios.post("http://localhost:5000/admin/addCarsImages",formData).then((res) => {
              // console.log(res)})
      
  }  
// }

  return (
    <div className="add_car_container">
      <div className="add_car_wrapper">
        <div className="add_car_header">
          <h1>Add Car</h1>
          <span>
            <i className="ri-close-fill"></i>
          </span>
        </div>
        
          <div className="add_car_input_wrapper">
            <label htmlFor="">Name</label>
            <input
              type="text"
              name="name" onChange={(e) => setSignupData({ ...signUpData, name: e.target.value })} />            
          </div>
          <div className="add_car_input_wrapper">
            <label htmlFor="">Brand</label>
            <select  name="brand" >
              <optgroup>
                <option hidden value="" onChange={(e) => setSignupData({ ...signUpData, brand: e.target.value })}>
                  Select Brand
                </option>
                <option value="SUV">Rolls Roys</option>
                <option value="Sedan">BMW</option>
                <option value="MPV">Benz</option>
              </optgroup>
            </select>           
          </div>
          <div className="add_car_input_wrapper">
            <label htmlFor="">Price</label>
            <input
              type="text"
              name="price" onChange={(e) => setSignupData({ ...signUpData, price: e.target.value })} />            
          </div>
          <div className="add_car_input_wrapper">
            <label htmlFor="">year</label>
            <input
              type="text"
              name="year"  onChange={(e) => setSignupData({ ...signUpData, year: e.target.value })}/>            
          </div>
          <div className="add_car_input_wrapper">
            <label htmlFor="">kms</label>
            <input
              type="text"
              name="kms"  onChange={(e) => setSignupData({ ...signUpData, kms: e.target.value })}/>            
          </div>
          <div className="add_car_input_wrapper">
            <label htmlFor="">Fuel</label>
            <select
              name="fuel"  onChange={(e) => setSignupData({ ...signUpData, fuel: e.target.value })}>
              <optgroup>
                <option hidden value="">
                  Select Fuel Type
                </option>
                <option value="Petrol">Petrol</option>
                <option value="Diesel">Diesel</option>
                <option value="EV">EV</option>
              </optgroup>
            </select>
           
          </div>
          <div className="add_car_input_wrapper">
            <label htmlFor="">Registration No.</label>
            <input
              type="text"
              name="registrationNo" onChange={(e) => setSignupData({ ...signUpData, regNo: e.target.value })} />
            
          </div>
          <div className="add_car_input_wrapper">
            <label htmlFor="">Image</label>
            <img className="previewImage" src={preview} alt="preview" />
            <input
              type={"file"}
              name="image"
              accept="image/*"
              required  onChange={(e) => setSignupData({ ...signUpData, image: e.target.files[0] })} />
          </div>
          <button type="submit" onClick={handleSignUp}>Add</button>
        
      </div>
    </div>
  );
}

export default AddCar;
