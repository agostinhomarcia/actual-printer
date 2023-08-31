import styled from "styled-components";
import HomeImg from "../../assets/img/home-new.svg";
import BackgroundHome from "../../assets/img/background-responsivo.svg";



export const Background = styled.div`
  height: 100vh;
  display: flex;
  width: 100vw;
  background-position: center;
  background-size: cover;
  background-image: url(${HomeImg});
  overflow-x: hidden;
  

  &::before {
    content: ""; 
    position: absolute;
    top: 0;
    left: 0;
    width: 49.60%; 
    height: 100vh;
    background: rgba(14, 17, 31, 0.83);
    z-index: 1; 

    @media screen and (max-width: 480px) {
      width: 65%;
      max-height: 25.92rem;
      overflow-x: hidden;
      overflow-y: hidden;
      z-index: 4;
    }

    @media screen and (min-width: 768px) and (max-width: 991px) {
      width: 65%;
      max-height: 70%;
      overflow-x: hidden;
      overflow-y: hidden;
      
    }
    @media screen and (min-width: 992px) and (max-width: 1199px) {
      width: 65%;
      max-height: 70.74%;
      overflow-x: hidden;
      overflow-y: hidden;
    }
    @media (min-width: 1200px) and (max-width: 1919px) {
      height: 100vh;
      overflow-x: hidden;
      overflow-y: hidden;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 991px){
    width: 51.3rem;
    height: 70vh;
    background-size: cover;
    overflow-x: hidden;
    overflow-y: hidden;
  }

  @media screen and (min-width: 992px) and (max-width: 1199px){
    width: 64rem;
    height: 70vh;
    background-size: cover;
    overflow-x: hidden;
    overflow-y: hidden;
  }

  @media screen and (min-width: 1920px) {
    height: 100vh;
    width: 100%;
    overflow-x: hidden;
    overflow-y: hidden;
  }

  @media (min-width: 1200px) and (max-width: 1919px) {
    width: 100%;
    height: 100vh;
    position: relative;
    background-size: cover;
    overflow-x: hidden;
    overflow-y: hidden;
  }

  @media screen and (max-width: 480px) {
    height: 25.9375rem;
    width: 26.875rem;
    overflow-x: hidden;
    overflow-y: hidden;
    
  }
`;

export const ImgBackground = styled.div`
  width: 65%;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: hidden;
  

  @media screen and (max-width: 480px) {
    background-image: url(${BackgroundHome});
    background-repeat: no-repeat;
    background-size: contain;
    width: 30rem;
    height: 50rem;
    overflow-x: hidden;
    overflow-y: hidden;
    
  }

  @media screen and (min-width: 768px) and (max-width: 991px) {
    background-repeat: no-repeat;
    background-size: contain;
    width: 52.5rem;
    height: 74.625rem;
    overflow-y: hidden;
    overflow-x: hidden;
  }

  @media screen and (min-width: 992px) and (max-width: 1199px) {
    background-repeat: no-repeat;
    background-size: contain;
    width: 52.5rem;
    height: 74.625rem;
    overflow-y: hidden;
    overflow-x: hidden;
  }

  @media (min-width: 1200px) and (max-width: 1919px) {
    overflow-x: hidden;
    overflow-y: hidden;
  }
  @media screen and (min-width: 1920px){
    overflow-x: hidden;
    overflow-y: hidden;
  }
`;

export const LogoActual = styled.div`
  display: flex;
  flex-direction: column;
  height: 80vh;
  overflow-x: hidden;
  overflow-y: hidden;

  @media screen and (min-width: 1920px){
  overflow-x: hidden;
  overflow-y: hidden;

  }
  @media screen and (max-width: 480px){
    align-items: center;
    z-index: 9;  
  }

  @media screen and (min-width: 768px) and (max-width: 991px){
    overflow-x: hidden;
    overflow-y: hidden;
  }

  @media screen and (min-width: 992px) and (max-width: 1199px) {
    overflow-x: hidden;
    overflow-y: hidden;
  }

  @media screen and (min-width: 1200px) and (max-width: 1919px) {
    height: 100vh;
    overflow-x: hidden;
    overflow-y: hidden;
  }

  h1 {
    color: #ebebeb;
    width: 750px;
    height: 58px;
    margin-top: 220px;
    text-shadow: 8px 5px 5px  rgba(0, 0, 0, 0.7);
    z-index: 4;
    font-size: 35px;
    font-style: normal;
    line-height: 89px; 
    letter-spacing: 1.75px;
    margin-left: 13.688rem;
    @media screen and (min-width: 1920px){
      font-size: 56.5px;
      width:max-content;

    }
    @media (min-width: 1200px) and (max-width: 1919px) {
      margin-left: 11rem;
      overflow-x: hidden;
      overflow-y: hidden;
    }

    @media screen and (max-width: 480px) {
      margin-top: 110px;
      margin-right: 78px;
      margin-left: 78px;
      font-size: 1.625rem;
      line-height: 40px;
      width: 17.125rem;
      height: 5rem;
      letter-spacing: 1.3px;
      z-index: 6;
    }

    @media screen and (min-width: 768px) and (max-width: 991px) {
      font-size: 1.875rem;
      margin-left: 9.3125rem;
      line-height: 40px;
      width: 19.75rem;
    }
    @media screen and (min-width: 992px) and (max-width: 1199px) {
      font-size: 1.875rem;
      margin-left: 9.3125rem;
      line-height: 40px;
      width: 19.75rem;
    }
  }
  p {
    width: 415.492px;
    color: #FFF;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-size: 14px;
    font-style: normal;
    line-height: 35px; 
    z-index: 4;
    margin-top: 20px;
    text-align: justify;
    margin-left: 219px;
    @media screen and (min-width: 1920px){
      width: 600px;
      font-size: 30px;
      margin-top: 5rem;
      margin-bottom: 2rem;
    }
    @media (min-width: 1200px) and (max-width: 1919px) {
      font-size: 1.2rem;
      margin-left: 175px;
      width: 419.3px;      
    }

    @media screen and (max-width: 480px) {
      text-align: start;
      margin-right: 78px;
      margin-left: 78px;
      font-size: 0.5rem;
      width: 17.0625rem;
      height: 5.4rem;
      line-height: 1.25rem;
      z-index: 6;
    }

    @media screen and (min-width: 768px) and (max-width: 991px) {
      margin-left: 9.3125rem;
      font-size: .9375rem;
      margin-top: 50px;
      width: 19.75rem;
      line-height: 1.25rem;
    }

    @media screen and (min-width: 992px) and (max-width: 1199px) {
      margin-left: 9.3125rem;
      font-size: 1rem;
      margin-top: 50px;
      width: 20.5rem;
      height: 7.4rem;
      line-height: 1.85rem;
    }
  }

  
`;

export const Image = styled.img`
  position: absolute;
  width: 439px;
  height: 330px;
  z-index: 4;

  @media screen and (max-width: 480px) {
    right: 15.625rem;
    left: 2.9rem; 
    width: 10.9rem;
    height: 7.5rem;
    z-index: 6;
  }

  @media screen and (min-width: 768px) and (max-width: 991px) {
    left: 7.5rem;
    width: 12.8125rem;
    height: 12.8125rem;
    right: 50px;
    top: 10px;
    align-items: center;
  }

  @media screen and (min-width: 992px) and (max-width: 1199px) {
    left: 7.5rem;
    width: 12.8125rem;
    height: 12.8125rem;
    right: 50px;
    top: 10px;
    align-items: center;
  }

  @media (min-width: 1200px) and (max-width: 1919px) {
    width: 12.813rem;
    height: 12.813rem;
    margin-left: 152px;
  }

  @media screen and (min-width: 1920px){
    width: 390px;
    height: 320px;
    position: absolute;
    left: 8%;
    
  }
`;

export const Button = styled.button`
  width: 13.375rem;
  z-index: 4;
  height: 3rem;
  padding: 1.25rem;
  border-radius: 2.5rem;
  color: white;
  background-color: rgba(2, 33, 121, 1);
  border: none;
  cursor: pointer;
  font-weight: 700;
  font-size: 12px;
  margin-top: 2rem;
  margin-left: 219px;
  transition: 0.5s;
  &:hover {
    background-color: #00adef;
    opacity: 0.7;
  }
  @media screen and (min-width: 1920px){
    width: 15.375rem;
    height: 4rem;
    font-weight: 700;
    font-size: 20px;
    justify-content: center;
    margin-left: 350px;
  }

  @media screen and (max-width: 480px) {
    margin-left: 0;
    margin-top: 2.9375rem;
    font-size: 9px;
    width: 6.8rem;
    height: 1.5625rem;
    padding: 0.6rem;
    z-index: 6;
  }

  @media screen and (min-width: 768px) and (max-width: 991px) {
    margin-left: 9.125rem;
    margin-top: 7rem;
  }
  @media screen and (min-width: 992px) and (max-width: 1199px) {
    margin-left: 10rem;
    margin-top: 7rem;
  }

  @media (min-width: 1200px) and (max-width: 1919px) {
    width: 11rem;
    height: 2.2rem;
    padding-top: 0.8rem;
    margin-left: 170px;
  }
`;
export const Aside = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  z-index: 9;

  @media screen and (min-width: 768px) and (max-width: 991px){
    display: flex;
    flex-direction: column;
    justify-content: end;
    display: none;
    }

  @media screen and (min-width: 1920px){
    align-items: end;
  }
  @media (min-width: 1200px) and (max-width: 1919px) {
   
  }
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  width: 421px;
  height: 477px;
  margin-top: 16.625rem;
  margin-bottom: 17.188rem;
  list-style: none;
  z-index: 1;
  @media screen and (min-width: 992px) and (max-width: 1199px){
    display: none;
    overflow-x: hidden;
    overflow-y: hidden;
  }

  @media screen and (min-width: 1920px){
    display: flex;
    margin-top: 23.625rem;
    align-items: end;
    width: 630px;
    height: 420px;
    gap: 1.6rem;
  }
  @media (min-width: 1200px) and (max-width: 1919px) {
    margin-top: 28rem;
    line-height: normal;
    width: 28rem;
  }

  @media screen and (max-width: 480px) {
    display: none;
  }

  @media screen and (min-width: 768px) and (max-width: 991px){
    margin-top: 55rem;
    align-items: center;
    margin-bottom: 25px;
  }
`;

export const Lista = styled.li`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 0.25rem;
  text-align: end;
  overflow-x: hidden;
  
   a {
    color: #181717;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-decoration: none;
    border-radius: 20px;
    padding: 5px;
    @media screen and (min-width: 1920px){
      font-size: 2.4rem;
      font-weight: 900;

    
    }

    &:hover {
      transition: 0.6s;
      text-shadow: 1px 2px 2px black;
      background-color: WHITE;
      text-shadow: 0.6px 1.2px 1.2px black;
      @media (min-width: 1200px) and (max-width: 1919px) {
        
      }
    }
  }
`;
