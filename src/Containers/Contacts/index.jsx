import { 
    Contact,  
    EndElements,
    SocialMedia
  } from "./styles";
  import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";  
  import Whatsapp from "../../assets/img/whatsimg.svg";
  import Insta from "../../assets/img/Insta.svg";


export function Contacts(){
    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: "AIzaSyDENHff7tBBgy2ccQKsdlQga2mTKEiUGMw",
      });
    
      const position = {
        lat: -22.899047617062426,
        lng: -43.24781416059829,
      };
    return (
        <Contact id='contact'>
        <br />
        <h1>CONTATO</h1>
        <br />
       <SocialMedia>
      <li>
        <a href="https://www.instagram.com/actualprinter/" target = "blank">
          <img src={Insta} alt="Instagram" className="instagram"/>
        </a>        
      </li>
      <li>
      <a href="https://wa.me/5521995903870" target="blank" >
            <img src={Whatsapp} alt="Whatsapp-logo" className="whatsapp"/>
        </a>
      </li>
      </SocialMedia>
        <h4>Faça seu orçamento conosco!</h4>
        <p>{"(021) 9 9590-3870"}</p>
        <p>atendimento@atualprinter.com.br</p>
        <p>Endereço: Rua Aluisio Azevedo, nº 40 - Rio de Janeiro - RJ</p>
        <br />
        <div className="map">
          {isLoaded ? (
            <GoogleMap
              mapContainerStyle={{ width: "99.2vw", height: "100%" }}
              center={position}
              zoom={15}
            >
              <Marker position={position} />
            </GoogleMap>
          ) : (
            <></>
          )}
        </div>

        <EndElements>
          <h3>
            Copyright @ 2023. Todos os direitos reservados. Desenvolvido por
            SimplifyTech.
          </h3>
        </EndElements>
      </Contact>
    )
}