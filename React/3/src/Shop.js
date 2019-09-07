import React, {useState, useEffect} from 'react';
import './App.css';

// fetch : https://fortnite-api.theapinetwork.com/upcoming/get?authorization=e23f8d7474d9dabe9864e82c7d7b1b1b

function Shop() {

  useEffect(()=>{
    fetchItems();
  },[]);

  const [items, setItems]=useState([]);

  const fetchItems = async()=>{
    const data = await fetch('https://fortnite-api.theapinetwork.com/upcoming/get?authorization=e23f8d7474d9dabe9864e82c7d7b1b1b');
    
    const items = await data.json();
    console.log(items.items);
    //setItems(items.items);
  }

  return (
    <div className="App">
      {
        items.map(item=>(
          <h1>{item.name}</h1>
        ))
      }
    </div>
  ); 
}

export default Shop;