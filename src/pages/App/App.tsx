import BaseLayout from "@/Layout/BaseLayout";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Discover from "../Discover/Discover";
import MyMusic from "../MyMusic/MyMusic";
// import reactLogo from './assets/react.svg'
import "./App.css";
/**
 * 醒目启动后的全局展示界面，其余组件都作为子组件渲染展示
 */

function App() {
  return (
    <div className="App">
      <BaseLayout>
        <Routes>
          <Route path="/" element={<Discover />} />
          <Route path="/about" element={<MyMusic />} />
        </Routes>
      </BaseLayout>
    </div>
  );
}

export default App;
