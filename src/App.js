import './App.css';
import React, { useEffect, useState } from "react";
import Navbar from './Components/Navbar';
import Center from './Components/Center';
import Card from './Components/Card';
function App() {
  // fetching data
  const [val, setVal] = useState({});
  const [isFetched,setisFetched] = useState(false);
  const getData = async()=>{
    try{
    const res= await fetch('https://backend-ohlocal-development.umnsbhcb5nb6a.ap-south-1.cs.amazonlightsail.com/api/test_web_assignment/');
    const data = await res.json();
    setVal(data);
    if(Object.keys(val).length != 0)
    setisFetched(true)
    else
    setisFetched(false);
  }
    catch(err){
      console.log(err);
    }
    };
    // useEffect keeps on executing till data is fetched i.e. isFetched=true
    useEffect(() => {
      getData();
    }, [isFetched==false]);
    
  return (
    <>
    {/* displays design only if data is fetched */}
   { isFetched == true ?
    (<div className="App">
      <Navbar img={val.nav_bar.person_icon}/>
      <Center val={val}/>
      <div className='alternate_products'>
      { 
        (val.bids)?.map((bid)=>(
        <Card bid={val.bids[0]}/>
        )) 
     } 
      </div>
    </div>)
  : 
  (<div className='App'>
  </div>)
   }
    </>
  );
}

export default App;
