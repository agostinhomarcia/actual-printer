import {
  Services,
  ContainerServices,
  ContainerServices2,
  ContainerServices3,
  ContainerServices4,
  ContainerServices5,
  ContainerServices6,
  ContainerServices7,
  ContainerServices8,
} from "./styles";


import Services1 from "../../assets/img/Serviços-1.png";
import Services2 from "../../assets/img/Serviços-2.png";
import Services3 from "../../assets/img/Serviços-3.png";
import Services4 from "../../assets/img/Serviços-4.png";
import Services5 from "../../assets/img/Serviços-5.png";
import Services6 from "../../assets/img/Serviços-6.png";
import Services7 from "../../assets/img/Serviços-7.png";


export function ServicesPage(){
    return(
        <Services>
        <h1>SERVIÇOS</h1>
        <ContainerServices id='services'>
          <ContainerServices2 >
            <img src={Services1} />
            <h3>APOSTILAS</h3>
          </ContainerServices2>
          <ContainerServices3>
            <img src={Services2} />
            <h3>LIVRETOS</h3>
          </ContainerServices3>
          <ContainerServices4>
            <img src={Services3} />
            <h3>BOLETOS</h3>
          </ContainerServices4>
          <ContainerServices5>
            <img src={Services4} />
            <h3>ETIQUETAS</h3>
          </ContainerServices5>
          <ContainerServices6>
            <img src={Services5} />
            <h3>CONTRACHEQUES</h3>
          </ContainerServices6>
          <ContainerServices7>
            <img src={Services6} />
            <h3>BALANCETES</h3>
          </ContainerServices7>
          <ContainerServices8>
            <img src={Services7} />
            <h3>DOCUMENTOS</h3>
          </ContainerServices8>
        </ContainerServices>
      </Services>
    )
}