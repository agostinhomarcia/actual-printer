import styled from "styled-components";
import WallpaperActual from "../../assets/img/ACTUALPRINTER.png";




export const Who = styled.div`
  height: 65vh;
  background-color: #f3f3f0;
  background: url(${WallpaperActual});
  background-size: cover;
  display: flex;
  overflow-x: hidden;
  overflow-y: hidden;
  @media screen and (max-width: 480px) {
    height: 41vh;
    display: flex;
    flex-direction: column;
  }
  
  @media (min-width: 768px) and (max-width: 991px) {
    height: 28.5rem;
    display: flex;
    flex-direction: row;
    margin-left: 20px;
  }
  @media (min-width: 992px) and (max-width: 1199px) {
    height: 28.5rem;
  }
  
  @media (min-width: 1200px) and (max-width: 1919px) {
    flex-direction: row;
    height: 65vh;
    overflow-x: hidden;
    overflow-y: hidden;
  }
`;

export const We = styled.div`
  display: flex;
  width: 15%;
  h1{
  font-size: 3rem;
  font-weight: 900;
  line-height: 4.563rem;
  text-align: right;
  text-shadow: 4px 1px 8px rgba(0, 0, 0, 0.4);
}

@media screen and (min-width: 768px) and (max-width: 991px){

  h1{
    margin-top: 12rem;
    line-height: 2.1875rem;
    font-size: 2.5rem;
  }
}

@media screen and (min-width: 992px) and (max-width: 1199px){
  h1{
    margin-top: 12rem;
    line-height: 2.1875rem;
    font-size: 2.5rem;
    margin-left: 4rem;
  }
}

  @media screen and (min-width: 1920px){
    h1{
      line-height: 6.563rem;
      font-size: 6rem;
      text-align: right;
    }
  }
  @media (min-width: 1200px) and (max-width: 1919px) {
    font-size: 2rem;
    position: relative;
    right: 3.5rem;
    width: 35%;
    h1{
      margin-top: 110px;
      line-height: 5rem;
      font-size:3.9rem;
     
    }
  }
  
  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    width: 10.2%;
    overflow-x: hidden;
    overflow-y: hidden;

    h1 {
      display: none;
    }
  }

`;
export const About = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 5rem;
  color:  #181717;
  text-align: justify;
  font-size: 1.625rem;
  font-style: normal;
  line-height: 2.5rem; /* 153.846% */
  overflow-x: hidden;
  overflow-y: hidden;
  position: relative;
  margin-right: 2rem;

  p {
    margin-bottom: 1.25rem;
    font-weight: 600;
  }
  
  @media (min-width: 1200px) and (max-width: 1919px) {
    font-size: 1.3rem;
    width: 48rem;
  
    h1 {
      display: none;
    }

    p {
      margin-bottom: 0.6rem;
    }
  }
 
  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    width: 22.3rem;
    margin-top: 20px;
    padding: 15px;
    height: 70vh;
   

    h1 {
      position: relative;
      right: 22%;
      margin-bottom: 1rem;
      font-size: 1.25rem;
    }
    p {
      position: relative;
      font-size: 0.625rem;
      left: 4.3%;
      margin-bottom: 0.1rem;
      line-height: 1.4rem;
      text-align: justify;
      max-width: 21.5rem;
    }
  }
  @media screen and (max-width: 360px){
    width: 21rem;
    h1 {
      position: relative;
      right: 23%;
      margin-bottom: 1rem;
      display:flex;
      justify-content: center;
      font-size: 1.25rem;
    }
        p{
          font-size: 0.68rem;
          line-height: 1rem;
        }
      }


@media (min-width: 768px) and (max-width: 991px) {
  display: flex;
  flex-direction: column;
  h1{
    display: none;
    
  }
  p{
 
    width: 29.4375rem;
    margin-left: 5rem;
    font-size: .9375rem;
    line-height: 2rem;
    margin-top: 0;
  }
}
@media (min-width: 992px) and (max-width: 1199px) {
  margin-top: 6rem;
  h1{
    display: none;
  }
  p{
    
    width: 36.1006rem;
    margin-left: 10rem;
    font-size: 1.0625rem;
    line-height: 2rem;
  }

}

@media screen and (min-width: 1920px){
  h1 {
    display: none;
  }
  p{
    margin-top: 2rem;
    font-size: 2.2rem;
    width: 80%;
  }
}
`;