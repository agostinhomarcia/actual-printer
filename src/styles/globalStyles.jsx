import { createGlobalStyle } from 'styled-components'


export default createGlobalStyle`

*{
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   font-family: 'Montserrat', sans-serif;
   font-weight: 700;
   outline: none;
   
}
/* Estilize a barra de rolagem */
::-webkit-scrollbar {
  width: 14.3px; /* Largura da barra de rolagem */
}

/* Estilize a área de fundo da barra de rolagem */
::-webkit-scrollbar-track {
  background-color: #f1f1f1;
}

/* Estilize o polegar (handle) da barra de rolagem */
::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 25px;
}

/* Estilize o polegar (handle) da barra de rolagem quando o mouse passar sobre ele */
::-webkit-scrollbar-thumb:hover {
  background-color: #555;
}
`
