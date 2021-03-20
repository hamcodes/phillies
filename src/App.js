import React,{useState,useEffect, useMemo} from 'react';
import './App.css';

function App() {
  const [data,setData]=useState([]);
  const getData=()=>{
    fetch('data.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        return response.json();
      })
      .then(function(myJson) {
        setData(myJson)
      });
  }
  useEffect(()=>{
    getData()
  },[])
  
  const avg = useMemo(() => {
    if (data.length === 0) {
      return 0;
    }
    
    return Math.round(data.reduce((sum, item) => sum + item.Salary, 0) / data.length);
    }, [data])
    

  return (

    <div className="App">
      <h1 className="top">This free agent player should earn the below amount as an average of the top 125 paid players!</h1>
      <div className="block">
         {avg}
      </div>

     {/* code to show all the salaries for the players */}
     {/* {data && data.length>0 && data.map((item)=><p>{item.Salary}</p>)} */}

    </div>
  );
}

export default App;




