import styled from "styled-components";

export const Client = styled.div`
  height: 100%;
  background-color: #f3f3f0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  @media (min-width: 1200px) and (max-width: 1919px) {
    height: 110vh;
  }

  @media screen and (max-width: 480px) {
    overflow-x: hidden;
    overflow-y: hidden;
    height: 45vh;
  }

  @media screen and (max-width: 1920px) {
    
  }
`;

export const ImgMaos = styled.div`
  margin-top: 20px;
  height: 31.25rem;
  @media (min-width: 1200px) and (max-width: 1919px) {
    margin-top: 10rem;
  }


  @media screen and (max-width: 480px) {
    img {
      width: 10rem;
      height: 15rem;
      margin-top: 10rem;
      margin-left: 1rem;
    }
  }

  @media screen and (min-width:768px) and (max-width:991px){
    overflow-x: hidden;
    overflow-y: hidden;
    width: 40vw;
    
    img {
      width: 85%;
      height: 25rem;
      margin-top: 10px;
      margin-left: 1.6rem;
      margin-bottom: 20px;
    }
  }
  @media screen and (min-width:992px) and (max-width:1199px){
    overflow-x: hidden;
    overflow-y: hidden;
    
    img {
      width: 15rem;
      height: 20rem;
      margin-top: 4rem;
      margin-left: 1.6rem;
      margin-bottom: 20px;
    }
  }

  @media screen and (max-width: 1920px) {
    
  }
`;

export const ClientMaos = styled.div`
  width: 38.75rem;
  height: 22.5rem;  
  font-size: 1.625rem;
  font-style: normal;
  font-weight: 600;
  line-height: 2.5rem;   
  margin-top: 1.3rem;
  margin-left: 7rem;
  text-shadow: 4px 1px 8px rgba(0, 0, 0, 0.4);

  @media screen and (max-width: 480px) {
    margin-top: 8rem;
    margin-left: 0.3rem;
    margin-right: 0.3rem;
  }

  @media screen and (min-width:768px) and (max-width:991px){
    width: 60vw;
    font-size: 1rem;
    font-weight: 600;
    line-height: 2.5rem;
    letter-spacing: 0.06em;
    text-align: start;
    margin-right: 0.25rem;
    margin-left: 0.6rem;
  }
  @media screen and (min-width:992px) and (max-width:1199px){
    font-size: 1rem;
    font-weight: 600;
    line-height: 2.5rem;
    letter-spacing: 0.06em;
    text-align: justify;
    width: 29.2018rem;
  }
  @media screen and (max-width: 1920px) {
    
  }
  h1 {
    text-align: center;
    margin-bottom: 20px;
    
    @media screen and (max-width: 480px) {
      font-size: 20px;
    }
  }
  ul {
    margin-left: 1.2rem;
    @media (min-width: 1200px) and (max-width: 1919px) {
      font-size: 1.3rem;
    }

    @media screen and (max-width: 480px) {
      font-size: 10px;
      letter-spacing: 0.6px;
      line-height: 15px;
      margin-top: 20px;
    }
  }
  p {
    @media (min-width: 1200px) and (max-width: 1919px) {
      font-size: 1.3rem;
    }
    
    @media screen and (max-width: 480px) {
      font-size: 10px;
      letter-spacing: 0.6px;
      line-height: 15px;
    }

  }
`;

