import './App.css';
import Header from './MyComponents/Header';
import Mydo from './MyComponents/Mydo';
import Footer from './MyComponents/Footer';
import AddMydo from './MyComponents/AddMydo';
import React, { useState } from 'react';


function App() {
  const onDelete = (mydo) =>{
    console.log("I am ondelete of mydo", mydo);
    //deleting this way in react does not working  
    // let index = mydos.indexOf(mydo);
    // mydos.splice(index, 1);
    setMydo(mydos.filter((e)=>{
      return e!==mydo;
    }));
  }
  const addMydo =(title,desc)=>{
    console.log("I am add a MyDo", title,desc)
    const myTodo = {
      slno : mydos[mydos.length -1].slno +1,
      // slno: slno,
      title: title,
      desc: desc,
    }
    console.log(myTodo);
  }
  const[mydos, setMydo]= useState([
    {
      slno:1,
      title:"Go to the market",
      desc:"You need to go to the market to get this job done 1",
    },
    {
      slno:2,
      title:"Go to the hospital",
      desc:"You need to go to the market to get this job done 2",
    },
    {
      slno:3,
      title:"Go to the mall",
      desc:"You need to go to the market to get this job done 3",
    }
  ]);
  return (
    <>
   <Header title="MyDo" searchBar = {false}/>
   <AddMydo addMydo ={addMydo} />
   <Mydo mydos ={mydos} onDelete ={onDelete}/>
   <Footer/>
    </>
  );
}

export default App;
