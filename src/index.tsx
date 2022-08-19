import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './routes/App';
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from "react-toastify";
import HubProvider from './contexts/HubProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <HubProvider>
        <App />
        <ToastContainer
          position="top-center"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          toastStyle={{ backgroundColor: 'var(--grey-3)', color: "white" }}
        />
      </HubProvider>
    </BrowserRouter>
  </React.StrictMode>
);
