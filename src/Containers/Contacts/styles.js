import styled from 'styled-components'

export const Contact = styled.div`
  height: 95vh;
  background-color: #14183e;
 
  text-align: center;
  h1 {
    color: #fff;
    margin-top: 35px;
    font-size: 64px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
    text-transform: uppercase;
  }
  h4 {
    color: #fff;
    font-size: 30px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 50px;
  }
  p {
    color: #fff;
    font-size: 30px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin: 10px 0;
  }

  .map {
    width: 118.9rem;
    height: 16.875rem;
  }

  @media screen and (max-width: 480px) {
    overflow-x: hidden;
    overflow-y: hidden;
    height: 55vh;

    h1 {
      margin-top: 5px;
      font-size: 20px;
    }
    h4 {
      font-size: 10px;
      margin-bottom: 20px;
    }
    p {
      font-size: 10px;
    }
    h3 {
      font-size: 0.5rem;
    }
    .map {
      width: 98%;
      height: 8.875rem;
    }
  }
  
  
    @media screen and (min-width: 768px) and (max-width: 991px) {
    overflow-x: hidden;
    overflow-y: hidden;
    height: 60vh;

    h1 {
      margin-top: 10px;
      font-size: 30px;
    }
    h4 {
      font-size: 20px;
      margin-bottom: 47px;
    }
    p {
      font-size: 21px;
      line-height: 31.5px;
    }
    h3 {
      font-size: 0.8rem;
    }
    .map {
      
      height: 8.875rem;
    }
  }
  @media screen and (min-width: 992px) and (max-width: 1199px){
    overflow-x: hidden;
    overflow-y: hidden;
    height: 43vh;
    width: 97%;
  background-color: #14183e; 
  text-align: center;
  margin-top: 10px;
  h1 {
      margin-top: 10px;
      font-size: 30px;
    }
    h4 {
      font-size: 20px;
      margin-bottom: 47px;
    }
    p {
      font-size: 21px;
      line-height: 31.5px;
    }
    h3 {
      font-size: 0.8rem;
    }
    .map {
      width:100%;
      height: 10.875rem;
      overflow-x: hidden;
    overflow-y: hidden;
    }

  }
    
  @media (min-width: 1200px) and (max-width: 1919px) {
    overflow-x: hidden;
    overflow-y: hidden;
    height: 102vh;
    h1 {
      font-size: 44px;
    }
    h4 {
      font-size: 1.5rem;
    }
    p {
      font-size: 1.5rem;
    }

    .map {
      width: 100%;
      height: 12rem;
    }
  }
  @media (min-width: 1920px){
    overflow-x: hidden;
    overflow-y: hidden;
    height: 95vh;
    h1 {
      font-size: 44px;
    }
    h4 {
      font-size: 1.5rem;
    }
    p {
      font-size: 1.5rem;
    }

    .map {
      width: 100%;
      height: 25rem;
    }
  }
`;

export const SocialMedia = styled.li`
  list-style-type: none;
  justify-content: center;
  display: flex;
  gap: 20px;
  padding-bottom: 10px;
  overflow-y: hidden;
  overflow-x: hidden;

  
  
  a {
    
    color: white;
    text-decoration: none;
    background-size: cover;
  }
  img{
    color: white;
    width:40px;
    height: 40px;
    border-radius: 10px;
  }
  @media screen and (min-width: 768px) and (max-width: 991px){
    justify-content: center;
  }

  @media (min-width: 1920px){
    justify-content: center;
    margin-top: 10px;
    z-index: 30;
   }
 

  a {
    color: white;
    text-decoration: none;
    background-size: cover;
  }



 img:hover {
    opacity: 0.6;
    transform: scale(1.1);
    transition: 0.5s;
  }
  @media (min-width: 1200px) and (max-width: 1919px) {
    justify-content: center;
    margin-top: 10px;
    z-index: 30;
   }
 
  
 
  a {
    color: white;
    text-decoration: none;
    background-size: cover;
  }



 img:hover {
    opacity: 0.6;
    transform: scale(1.1);
    transition: 0.5s;
  }

  @media screen and (max-width: 480px) {
    overflow-y: hidden;
    overflow-x: hidden;
    display: flex;
    justify-content: center;
    z-index: 10;
    img{
    width:25px;
    height: 25px;
    border-radius: 10px;
  }
    
  }
`;

export const EndElements = styled.div`

  display: flex;  
  flex-direction: row;
  justify-content:center;
  align-items: center;
 
  h3{
    
    color: #FFF;
    font-size: 25px;
    
    font-weight: 500;
    
  }

  @media screen and (max-width: 480px) {
    align-items: center;
    justify-content: center;     
   
    h3 {
    font-size: 9px;
    margin-top: 13px;
    width: 100%;
    margin-right: 5px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  }
  @media screen and (min-width: 992px) and (max-width: 1199px){
    font-size: 20px;
    justify-content:center;
  align-items: center;
      margin-top: 20px;
      margin-left: 10px;
      height: 2vh;
   
      padding-bottom: 0;
      h3{
        font-size: 19px;
       
      }
  }

 

    @media screen and (min-width: 768px) and (max-width: 991px) {
      font-size: 20px;
      text-align: center;
      margin-top: 13px;
      margin-left: 10px;
      h3{
        font-size: 19px;
        margin-top: 13px;
      }
    }
    

  @media (min-width: 1200px) and (max-width: 1919px) {
    margin-top: 25px;
    color: #FFF;
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  @media (min-width: 1920px){
   
    
    h3 {
    font-size: 2rem;
    margin-top: 13px;
    width: 100%;
    margin-right: 5px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
   
  }
`;



