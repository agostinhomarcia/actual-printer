import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyles from './styles/globalStyles.jsx'
export const REACT_APP_GOOGLE_API_KEY = "CHAVE-API";
import Page from './page/index.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <Page/>
  </React.StrictMode>,
)
