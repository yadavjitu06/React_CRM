import './index.css'

import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

import App from './App.jsx'
import store from './Redux/store.js'

createRoot(document.getElementById('root')).render(
 <Provider store={store}>
 <App />
 </Provider>
   
  
)
