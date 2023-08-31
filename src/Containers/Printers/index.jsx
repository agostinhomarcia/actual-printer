


import Impressora1 from "../../assets/img/Imagem-1.png";
import Impressora2 from "../../assets/img/Imagem-2.png";
import Impressora3 from "../../assets/img/Imagem-3.png";
import Impressora4 from "../../assets/img/Imagem-4.png";
import ImgCirculos from "../../assets/img/imagens-circulo.png";

import {  
    Printer,
    PrinterLine1,
    PrinterLine2,
    MiniLogo
    } from './styles'

export function Printers(){


    return (
        <Printer id='printers'>
        <PrinterLine1>
          <img src={Impressora1} alt="Impressora" />
          <img src={Impressora2} alt="Impressora" />
          <img src={Impressora3} alt="Impressora" />
        </PrinterLine1>
        <PrinterLine2>
          <img src={Impressora4} alt="Impressora" />
        </PrinterLine2>
        <h2>IMPRESSÕES DE MANEIRA RÁPIDA, SIMPLES E SEGURA</h2>
        <MiniLogo>
          <img src={ImgCirculos} alt="circles" />
        </MiniLogo>
      </Printer>

    )
}