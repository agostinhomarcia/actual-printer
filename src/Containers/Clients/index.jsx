import {
    Client,
    ImgMaos,
    ClientMaos,
} from './styles.js'

import Maos from "../../assets/img/maos.png";

export function Clients(){
    return(
        <Client id = "clients">
        <ImgMaos>
          <img src={Maos} alt="Mãos" />
        </ImgMaos>

        <ClientMaos>
          <h1>CLIENTES</h1>
          <p>
            A ActualPrinter conta com uma carteira de diversos clientes, de
            pequeno a grande porte, em diversas áreas de atuação:
          </p>
          <ul>
            <li>Administradoras de condomínio.</li>
            <li>Instituições.</li>
            <li>Colégios.</li>
          </ul>
        </ClientMaos>
         </Client>
    )
}

