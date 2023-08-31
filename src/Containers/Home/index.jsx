import {
  Image,
  ImgBackground,
  Background,
  LogoActual,
  Button,
  Aside,
  Menu,
  Lista,
  
} from "./styles.js";

import Logo from "../../assets/img/logoactual.png";
import AnchorLink from 'react-anchor-link-smooth-scroll'
export function Home() {
  return (
    <Background>
      <ImgBackground>
        <LogoActual>
          <Image src={Logo} alt="logo" />
          <h1>IMPRESSÃO DE DADOS VARIÁVEIS</h1>
          <p>
            Somos especializados em impressão eletrônica de dados variáveis,
            desta forma podemos prestar o melhor serviço do mercado, este é o
            segredo de nosso sucesso.
          </p>
          <Button><AnchorLink
           href="#printers" 
           style={{textDecoration: 'none', color: '#ebebeb'}}
           >
            VER MAIS
            </AnchorLink>
             </Button>
        </LogoActual>
      </ImgBackground>

      <Aside>
        <Menu>
          <Lista>
            <AnchorLink className="linkMenu" href="#who" >QUEM SOMOS</AnchorLink>
          </Lista>
          <Lista>
            <AnchorLink href="#pillars">NOSSOS PILARES</AnchorLink>
          </Lista>
          <Lista>
            <AnchorLink href="#services">SERVIÇOS</AnchorLink>
          </Lista>
          <Lista>
            <AnchorLink href="#clients">CLIENTES</AnchorLink>
          </Lista>
          <Lista>
            <AnchorLink href="#contact">CONTATO</AnchorLink>
          </Lista>
        </Menu>
      </Aside>
    </Background>
  );
}
