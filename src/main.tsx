import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/pages/App/App";
import "./index.css";
// 引入antd的样式文件
import "antd/dist/antd.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
