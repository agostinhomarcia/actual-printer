import styled from 'styled-components'


export const Printer = styled.div`
  height: 100vh;
  background-color: #f3f3f0;
  overflow-x: hidden;
  overflow-y: hidden;
  text-shadow: 4px 1px 8px rgba(0, 0, 0, 0.4);
  @media screen and (min-width: 992px) and (max-width: 1199px){
    height: 52vh;
  }
  h2 {
    color: #000;
    font-size: 2.5rem;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
    text-align: center;
    margin-top: 2.9rem;
    
    @media screen and (max-width: 480px) {
      font-size: 19px;
      width: 331px;
      overflow-x: hidden;
      overflow-y: hidden;
      display: flex;
      justify-content: center;
    }

    @media screen and (max-width: 360px){
      width: 322px;
    }
    @media screen and (min-width: 768px) and (max-width: 991px){
      
      font-size: 23px;
      text-align: center;
      overflow-x: hidden;
      overflow-y: hidden;
      
    
    }
    
    @media screen and (min-width: 992px) and (max-width: 1199px){
      font-size: 24px;
   
      text-align: center;
      font-weight: 900;
      overflow-x: hidden;
      overflow-y: hidden; 
    }  
 
  }

  @media screen and (min-width: 768px) and (max-width:991px){
    height: 60vh;
  }
  
  @media (min-width: 1200px) and (max-width: 1919px) {
    overflow-x: hidden;
    overflow-y: hidden;
    height: 180vh;
  }

  @media screen and (min-width: 1920px){
    height: 140vh;
  }

  @media screen and (max-width: 480px){
    height: 75vh;
    overflow-x: hidden;
    overflow-y: hidden;
    h2 {
      margin-left: 30px;
    }
  }

 
`;

export const PrinterLine1 = styled.div`
  position: relative;
  right: -22%;
  margin-right: 10px;
  margin-bottom: 30px;

  @media screen and (max-width: 480px) {
    right: -8%;
    display: flex;
   
  }

  @media screen and (max-width: 360px){
    right: -5%;
  }
  img {
    margin-top: 100px;
    height: 20rem;
    margin-right: 40px;
  }
  @media (min-width: 1200px) and (max-width: 1919px) {
    img {
      height: 15rem;
    }
  }

  @media screen and (max-width: 480px) {
    img {
      height: 7rem;
      margin-top: 38px;
      margin-right: 0;
    }
  }


  
  @media screen and (min-width: 768px) and (max-width: 991px) {
    margin-bottom: 10px;
    img {
      width: 20vw;
      height: 7rem;
      margin-top: 38px;
      margin-right: 0;
    }
  }
  @media screen and (min-width: 992px) and (max-width: 1199px) {
    width: 80vw;
    
    img {
      
      height: 10rem;
      margin-top: 38px;
      margin-left: 20px;
      position: relative;
      left: 2%;
      margin-right: 2px;
    }
  }
  
`;
export const PrinterLine2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  

  @media (min-width: 1200px) and (max-width: 1919px) {
    img {
      height: 18rem;
      margin-bottom: 30px;
    }
  }

  @media screen and (max-width: 480px) {
    img {
      width: 370.867px;
      height: 165.037px;
    }
    h2 {
      text-align: center;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 991px) {
    img {
      width: 500.867px;
      height: 165.037px;
    }
    h2 {
        color:blue;
      text-align: center;
      margin-bottom: 0;
    }
  }
  @media screen and (min-width: 992px) and (max-width: 1199px) {
    img {
      width: 39.3042rem;
      height: 12.3148rem;
    }
    h2 {
      text-align: center;
    }
  }
  
`;
export const MiniLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    margin-top: 100px;
    height: 180px;
    @media screen and (max-width: 480px) {
      height: 73px;
      width: 350px;
      margin-top: 30px;
    }

    @media screen and (min-width: 768px) and (max-width: 991px) {
      height: 7rem;
      margin-top: 15px;
      margin-bottom: 10px;
    }
    @media screen and (min-width: 992px) and (max-width: 1199px) {
      height: 10rem;
      margin-bottom: 10px;
      margin-top:10px;
    }
    @media screen and (min-width: 1920px){
      height: 300px;
      width: 90%;
    }
}
@media screen and (min-width: 992px) and (max-width: 1199px){
  margin-bottom: 10px;
  margin-top: 10px;
}
`;
