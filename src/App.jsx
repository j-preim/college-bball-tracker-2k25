import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cookie from "js-cookie";
import Header from "./components/Header";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  function verifyUser() {
    const cookie = Cookie.get("auth_cookie");
  }

  useEffect(() => {
    verifyUser();
  }, []);

  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
    </div>
  )
}

export default App
