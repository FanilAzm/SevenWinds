import React, {useState, useEffect} from "react";
import { Routes, Route } from "react-router-dom";

import './App.css';
import Header from './components/Header';
import Main from './pages/Main';
import Control from './pages/Control';

export default function App() {
  const [responseID, setResponseID] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 
  useEffect(() => {
   fetch(`http://185.244.172.108:8081/v1/outlay-rows/entity/create`, {method: 'POST'})
    .then((response) => response.json())
    .then(json => setResponseID(json.id));
  }, []);

  console.log(responseID);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/control" element={<Control />} />
      </Routes>
    </div>
  );
};
