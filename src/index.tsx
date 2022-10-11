import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ApiContextProvider } from './context/context';
import { ToastProvider } from 'rc-toastr'
import "rc-toastr/dist/index.css" 

ReactDOM.render(
  <React.StrictMode>
    <ApiContextProvider>
    <ToastProvider config={{
        position: "top-right",
        duration: 3000
    }} >
       <App />
       </ToastProvider>
     </ApiContextProvider>
        </React.StrictMode>,
  document.getElementById("root")
);