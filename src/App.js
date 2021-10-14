import axios from 'axios';
import {subData} from './data/subData';
import './App.scss';
import SubscriptionCardElement from './components/SubscriptionCardElement';
import React, {useEffect, useState} from 'react'
import useFetch from "react-fetch-hook"


function App() {
  const [categoryData, setCategoryData] = useState({})
  // [ ] Selected Main Category
  // [ ] Selected Sub Categoty
  // [ ] When select Main Category, sub category loads
  // [ ] Default selected is the Most Popular

  
  let url = "http://localhost:8080/get-categories";


  useEffect(()=>{
    getCategoryData();
  },[])


  const getCategoryData = () => {
    axios.get(url).then((res) => {
      const allData = res.data;
      setCategoryData(allData)
    }).catch(error => console.error(`Error: ${error}`))
  }
  
  return (
    <div className="App">
      <nav>
       
        {
          
        Object.keys(categoryData).map(function(key, index) {
          console.log(key,categoryData[key],index)
          return (
            <span key={key}>{key}</span>
          )
        })

        }
      
      </nav>
      <div className="sub-list">
        {subData.map((e) => <SubscriptionCardElement key={e.id} subData={e}/>)} 
      </div>
    </div>

  );
}

export default App;
