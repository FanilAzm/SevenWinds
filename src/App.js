import React, {useEffect} from "react";
import { Routes, Route } from "react-router-dom";

import styles from './App.module.scss';
import Header from './components/Header/Header';
import Main from './pages/Main/Main';
import Control from './pages/Control/Control';
import Navbar from "./components/Navbar/Navbar";

export default function App() {
  const BASE_URL = 'http://185.244.172.108:8081/v1/outlay-rows/entity';
  const ENTITY = JSON.parse(localStorage.getItem("eID"));

  useEffect(() => {
    fetch(`${BASE_URL}/create`, {method: 'POST'})
      .then((response) => response.json())
      .then(data => localStorage.setItem('eID', JSON.stringify(data)));
  }, []);

  // const getTreeRows = () => {
  //   fetch(`${BASE_URL}/${ENTITY.id}/row/list`)
  //     .then((response) => response.json())
  //     .then(data =>  localStorage.setItem('list', JSON.stringify(data)))
  // }

  const projects = [
    {
      name: 'Название проекта',
      abb: 'Аббревиатура',
      options: [
        {optionName: 'СМР'}
      ]
    }
  ];

  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.appContent}>
        <Navbar projects={projects} />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/control" element={<Control />} />
        </Routes>
      </div>
    </div>
  );
};
