import logo from './logo.svg';
import {subData} from './data/subData';
import './App.scss';
import SubscriptionCardElement from './components/SubscriptionCardElement';
import React from 'react'

function App() {
  
  return (
    <div className="App">
   

   
      <div className="sub-list">
        {subData.map((e) => <SubscriptionCardElement key={e.id} subData={e}/>)} 
        {/* isHover={isHover} onHover={setIsHover} */}
      </div>
    </div>

  );
}

export default App;
