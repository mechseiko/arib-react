import React from 'react'; //Import react from the react module
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;