import { React } from "react";
import { useState } from "react";
import axios from "axios";

const Admin = () => {
  const [formData, setFormData] = useState({
    eventName: "",
    picture: "",
    location: "",
    time: "",
    amount: "",
    date: "",
    descriptionForVip: "",
    descriptionForRegular: "",
    descriptionForFive: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
    .post("http://localhost:5000/event",formData)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
    setFormData({
      eventName: "",
      picture: "",
      location: "",
      time: "",
      amount: "",
      date: "",
      descriptionForVip: "",
      descriptionForRegular: "",
      descriptionForFive: "",
    });
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl text-center text-blue-500">Admin page</h1>

      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="eventName"
          className=" p-2 w-full pl-10 border-2 border-slate-400 rounded-md"
          value={formData.eventName}
          onChange={handleChange}
          name="eventName"
        />

        <input
          type="text"
          placeholder="picture"
          className=" p-2 w-full pl-10 border-2 border-slate-400 rounded-md"
          value={formData.picture}
          onChange={handleChange}
          name="picture"
        />

        <input
          type="text"
          placeholder="location"
          className=" p-2 w-full pl-10 border-2 border-slate-400 rounded-md"
          value={formData.location}
          onChange={handleChange}
          name="location"
        />

        <input
          type="text"
          placeholder="time"
          className=" p-2 w-full pl-10 border-2 border-slate-400 rounded-md"
          value={formData.time}
          onChange={handleChange}
          name="time"
        />

        <input
          type="text"
          placeholder="amount"
          className=" p-2 w-full pl-10 border-2 border-slate-400 rounded-md"
          value={formData.amount}
          onChange={handleChange}
          name="amount"
        />

        <input
          type="text"
          placeholder="date"
          className=" p-2 w-full pl-10 border-2 border-slate-400 rounded-md"
          value={formData.date}
          onChange={handleChange}
          name="date"
        />

        <input
          type="text"
          placeholder="descriptionForVip"
          className=" p-2 w-full pl-10 border-2 border-slate-400 rounded-md"
          value={formData.descriptionForVip}
          onChange={handleChange}
          name="descriptionForVip"
        />

        <input
          type="text"
          placeholder="descriptionForRegular"
          className=" p-2 w-full pl-10 border-2 border-slate-400 rounded-md"
          value={formData.descriptionForRegular}
          onChange={handleChange}
          name="descriptionForRegular"
        />

        <input
          type="text"
          placeholder="descriptionForFive"
          className=" p-2 w-full pl-10 border-2 border-slate-400 rounded-md"
          value={formData.descriptionForFive}
          onChange={handleChange}
          name="descriptionForFive"
        />
        <button
          type="submit"
          className="p-2 w-full pl-10 border-2 border-slate-400 bg-blue-600  text-white rounded-md"
        >
          Submit
        </button>
      </form>
      
    </div>
  );
};

export default Admin;

// import React from 'react';
// import { useState, } from 'react';
// import axios from 'axios';

// const Admin = () => {
// const [formData,setFormData] = useState({
//   eventName:"",
//   picture:"",
//   location:"",
//   time:"",
//   amount:"",
//   date:"",
//   descriptionForVip:"",
//   descriptionForRegular:"",
//   descriptionForFive:"",

// });

// // setformData
// const handleInput = (e) =>{
// const {name,value} = e.target
// setFormData({...formData,[name]: value})

// };

// const handSubmit =async (e)=>{

//   e.preventDefault();
//     console.log(formData)
//   alert("data submit succesfully")
// //  axios.post("http://localhost:5000/event",formData)
// // .then((res) =>{
// //     console.log(res.data);
// //   })

// // .catch((err) =>{
// //   console.log(err);
// // });
// // //
// try{
//   await axios.post("http://localhost:5000/event",formData)

// }catch (error){
//  console.log("error message")
// }

//  setFormData({
//      eventName:"",
//    picture:"",
//    location:"",
//    time:"",
//   amount:"",
//    date:"",
//   descriptionForVip:"",
//   descriptionForRegular:"",
//    descriptionForFive:"",
//       });

// // try{
// //    await axios.post("http://localhost:5000/event",formData)

// // }catch (error){
// //   console.log("error message")
// // }

// };

//   return (
//   