import styled from "styled-components";

export const Services = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f3f3f0;
  overflow-x: hidden;

  @media screen and (max-width: 480px) {
    height: 42vh;
    overflow-x: hidden;
    overflow-y: hidden;
  }
  
  @media screen and (min-width: 768px) and (max-width: 991px) {
    height: 60vh;
    overflow-x: hidden;
    overflow-y: hidden;
  }
  @media screen and (min-width: 992px) and (max-width: 1199px) {
    height: 45vh;
    overflow-x: hidden;
    overflow-y: hidden;
  }
  
  h1 {
    margin-top: 100px;
    font-size: 3.75rem;
    line-height: 3.5rem;
    text-align: center;
    margin-bottom: 100px;
    text-shadow: 4px 1px 8px rgba(0, 0, 0, 0.4);
    @media (min-width: 1200px) and (max-width: 1919px) {
      font-size: 3.5rem;
    }

    @media screen and (max-width: 480px) {
      font-size: 20px;
      margin-bottom: 10px;
    }

    @media screen and (min-width: 768px) and (max-width: 991px) {
      font-size: 3rem;
      margin-bottom: 10px;
    }
    @media screen and (min-width: 992px) and (max-width: 1199px) {
      font-size: 3rem;
      margin-bottom: 10px;
    }
  }
  @media (min-width: 1200px) and (max-width: 1919px) {
    height: 135vh;
    overflow-x: hidden;
    overflow-y: hidden;
  }
`;

export const ContainerServices = styled.div`
  width: 78.0638rem;
  height: 31.125rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  font-size: 1.563rem;
  margin-top: 1.875rem;
  @media (min-width: 1200px) and (max-width: 1919px) {
    height: 26.5rem;
    width: 58rem;
    justify-content: center;
    font-size: 1rem;
  }

  @media screen and (max-width: 480px) {
    width: 21.563rem;
    height: 6.5rem;
    justify-content: center;
    font-size: 0.4rem;
    grid-column-gap: 0.2rem;
    grid-row-gap: 0.2rem;
  }

  @media screen and (min-width: 768px) and (max-width: 991px) {
    width: 47rem;
    height: 282.47px;
    margin-left: 10px;
    margin-right: 10px;
    justify-content: center;
    font-size: 0.4rem;
    grid-column-gap: 0.2rem;
    grid-row-gap: 0.2rem;
  }
  @media screen and (min-width: 992px) and (max-width: 1199px) {
    width: 51.9375rem;
    height: 17.6544rem;
    justify-content: center;
    font-size: 0.4rem;
    grid-column-gap: 0.2rem;
    grid-row-gap: 0.2rem;
  }
  
`

export const ContainerServices2 = styled.div`
  width: 18.625rem;
  height: 31.125rem;
  grid-row: 1/4;
  display: flex;
  flex-direction: column;
  gap: 1.688rem;
  align-items: center;
  justify-content: center;
  border-radius: 0.563rem;
  background: var(--cinza, rgba(217, 217, 217, 0.8));
  box-shadow: 4px 6px 30px 2px #022179;

  @media screen and (max-width: 480px) {
    width: 5.145rem;
    height: 6.5rem;
  }
  
  
  @media screen and (min-width: 768px) and (max-width: 991px) {
    width: 11.3534rem;
    height: 17.5686rem;
    font-size: .9375rem;
  }
  @media screen and (min-width: 992px) and (max-width: 1199px) {
    width: 12.5461rem;
    height: 17.5686rem;
    font-size: .9375rem;
  }
  img {
    width: 6.875rem;
    height: 6.875rem;

    @media screen and (max-width: 480px) {
      width: 1.563rem;
      height: 1.563rem;
    }
    
    @media screen and (min-width: 768px) and (max-width: 991px) {
      width: 3.75rem;
      height: 3.75rem;
    }
    @media screen and (min-width: 992px) and (max-width: 1199px) {
      width: 4.5rem;
      height: 4.5rem;
    }
    
  }
  &:hover {
    box-shadow: 4px 6px 30px 2px #777a78;
    transition: 1s;
    color: #484a49;
    transform: scale(1.02);
  }
`;
export const ContainerServices3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.688rem;
  justify-content: center;
  height: 14.93rem;
  border-radius: 0.563rem;
  background: var(--cinza, rgba(217, 217, 217, 0.8));
  box-shadow: 4px 6px 30px 2px #022179;

  @media screen and (max-width: 480px) {
      width: 5.145rem;
      height: 3.12rem;
      gap: 0.2rem;
    }
    
  
    @media screen and (min-width: 768px) and (max-width: 991px) {
      width: 11.3534rem;
      height: 8.5701rem;
      font-size: 0.7rem;
      gap: 1rem;
    }

    @media screen and (min-width: 992px) and (max-width: 1199px){
      width: 12.5461rem;
      height: 8.5701rem;
      font-size: .9375rem;
    }
    
  img {
    width: 6.875rem;
    height: 6.875rem;

    @media screen and (max-width: 480px) {
      width: 1.563rem;
      height: 1.563rem;
    }
    
    @media screen and (min-width: 768px) and (max-width: 991px) {
      width: 3.75rem;
      height: 3.75rem;
    }
    @media screen and (min-width: 992px) and (max-width: 1199px) {
      width: 3.75rem;
      height: 3.75rem;
    }
   
  }
  &:hover {
    box-shadow: 4px 6px 30px 2px #777a78;
    transition: 1s;
    color: #484a49;
    transform: scale(1.02);
  }
`;

export const ContainerServices4 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.688rem;
  height: 14.93rem;
  border-radius: 0.563rem;
  background: var(--cinza, rgba(217, 217, 217, 0.8));
  box-shadow: 4px 6px 30px 2px #022179;

  @media screen and (max-width: 480px) {
    width: 5.145rem;
    height: 3.12rem;
    gap: 0.2rem;
  }
  
   
    @media screen and (min-width: 768px) and (max-width: 991px) {
      width: 11.3534rem;
      height: 8.5701rem;
      gap: 1rem;
      font-size: 0.7rem;
    }
    
    @media screen and (min-width: 992px) and (max-width: 1199px){
      width: 12.5461rem;
      height: 8.5701rem;
      font-size: .9375rem;
    }
    
  img {
    width: 6.875rem;
    height: 6.875rem;
 
    @media screen and (max-width: 480px) {
      width: 1.563rem;
      height: 1.563rem;
    }
    
   
    @media screen and (min-width: 768px) and (max-width: 991px) {
      width: 3.75rem;
      height: 3.75rem;
    }

    @media screen and (min-width: 992px) and (max-width: 1199px) {
      width: 3.75rem;
      height: 3.75rem;
    }
    
  }
  &:hover {
    box-shadow: 4px 6px 30px 2px #777a78;
    transition: 1s;
    color: #484a49;
    transform: scale(1.02);
  }
`;

export const ContainerServices5 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.688rem;
  height: 14.93rem;
  border-radius: 0.563rem;
  background: var(--cinza, rgba(217, 217, 217, 0.8));
  box-shadow: 4px 6px 30px 2px #022179;
  
  @media screen and (max-width: 480px) {
    width: 5.145rem;
    height: 3.12rem;
    gap: 0.2rem;
  }
 
    @media screen and (min-width: 768px) and (max-width: 991px) {
      width: 11.3534rem;
      height: 8.5701rem;
      gap: 1rem;
      font-size: 0.7rem;
    }

    @media screen and (min-width: 992px) and (max-width: 1199px){
      width: 12.5461rem;
      height: 8.5701rem;
      font-size: .9375rem;
    }
  img {
    width: 6.875rem;
    height: 6.875rem;
 
    @media screen and (max-width: 480px) {
      width: 1.563rem;
      height: 1.563rem;
    }
    
    @media screen and (min-width: 768px) and (max-width: 991px) {
      width: 3.75rem;
      height: 3.75rem;
    }
    @media screen and (min-width: 992px) and (max-width: 1199px) {
      width: 3.75rem;
      height: 3.75rem;
      border-radius: 50px;
    }
    
  }
  &:hover {
    box-shadow: 4px 6px 30px 2px #777a78;
    transition: 1s;
    color: #484a49;
    transform: scale(1.02);
  }
`;

export const ContainerServices6 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.688rem;
  height: 14.93rem;
  border-radius: 0.563rem;
  background: var(--cinza, rgba(217, 217, 217, 0.8));
  box-shadow: 4px 6px 30px 2px #022179;

  @media screen and (max-width: 480px) {
    width: 5.145rem;
    height: 3.12rem;
    gap: 0.2rem;
  }
 
    @media screen and (min-width: 768px) and (max-width: 991px) {
      width: 11.3534rem;
      height: 8.5701rem;
      gap: 1rem;
      font-size: 0.7rem;
    }

    @media screen and (min-width: 992px) and (max-width: 1199px){
      width: 12.5461rem;
      height: 8.5701rem;
      font-size: .9375rem;
    }

  img {
    width: 6.875rem;
    height: 6.875rem;
 
    @media screen and (max-width: 480px) {
      width: 1.563rem;
      height: 1.563rem;
    }
    
    @media screen and (min-width: 768px) and (max-width: 991px) {
      width: 3.75rem;
      height: 3.75rem;
    }

    @media screen and (min-width: 992px) and (max-width: 1199px) {
      width: 3.75rem;
      height: 3.75rem;
    }
  
  }
  &:hover {
    box-shadow: 4px 6px 30px 2px #777a78;
    transition: 1s;
    color: #484a49;
    transform: scale(1.02);
  }
`;

export const ContainerServices7 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.688rem;
  height: 14.93rem;
  overflow-x: hidden;
  overflow-y: hidden;
  border-radius: 0.563rem;
  background: var(--cinza, rgba(217, 217, 217, 0.8));
  box-shadow: 4px 6px 30px 2px #022179;

  @media screen and (max-width: 480px) {
    width: 5.145rem;
    height: 3.12rem;
    gap: 0.2rem;
  }

    
    @media screen and (min-width: 768px) and (max-width: 991px) {
      width: 11.3534rem;
      height: 8.5701rem;
      gap: 1rem;
      font-size: 0.7rem;
    }

    @media screen and (min-width: 992px) and (max-width: 1199px){
      width: 12.5461rem;
      height: 8.5701rem;
      font-size: .9375rem;
    }
    
  img {
    width: 6.875rem;
    height: 6.875rem;

    @media screen and (max-width: 480px) {
      width: 1.563rem;
      height: 1.563rem;
    }
    
    @media screen and (min-width: 768px) and (max-width: 991px) {
      width: 3rem;
      height: 3rem;
    }
    @media screen and (min-width: 992px) and (max-width: 1199px) {
      width: 3.75rem;
      height: 3.75rem;
    }
    
  }
  &:hover {
    box-shadow: 4px 6px 30px 2px #777a78;
    transition: 1s;
    color: #484a49;
    transform: scale(1.02);
  }
`;

export const ContainerServices8 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.688rem;
  height: 14.93rem;
  border-radius: 0.563rem;
  background: var(--cinza, rgba(217, 217, 217, 0.8));
  box-shadow: 4px 6px 30px 2px #022179;
  
  @media screen and (max-width: 480px) {
    width: 5.145rem;
    height: 3.12rem;
    gap: 0.2rem;
  }

    @media screen and (min-width: 768px) and (max-width: 991px) {
      width: 11.3534rem;
      height: 8.5701rem;
      gap: 1rem;
      font-size: 0.6rem;
    }

    @media screen and (min-width: 992px) and (max-width: 1199px){
      width: 12.5461rem;
      height: 8.5701rem;
      font-size: .9375rem;
    }
    
  img {
    width: 6.875rem;
    height: 6.875rem;
 
    @media screen and (max-width: 480px) {
      width: 1.563rem;
      height: 1.563rem;
    }
  
    @media screen and (min-width: 768px) and (max-width: 991px) {
      width: 3.75rem;
      height: 3.75rem;
    }
    @media screen and (min-width: 992px) and (max-width: 1199px) {
      width: 3.5rem;
      height: 3.5rem;
    }
  }
  &:hover {
    box-shadow: 4px 6px 30px 2px #777a78;
    transition: 1s;
    color: #484a49;
    transform: scale(1.02);
  }
`;