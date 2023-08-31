import styled from "styled-components";

export const OurPillars = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f3f3f0;

  @media screen and (max-width: 480px) {
    height: 60vh;
    overflow-x: hidden;
    overflow-y: hidden;
  }

  @media screen and (max-width: 360px) {
    height: 57vh;
    overflow-x: hidden;
    overflow-y: hidden;
  }

  @media screen and (min-width: 768px) and (max-width: 991px) {
    height: 60vh;
    overflow-x: hidden;
    overflow-y: hidden;
  }
  @media screen and (min-width: 992px) and (max-width: 1199px) {
    height: 55vh;
    overflow-x: hidden;
    overflow-y: hidden;
  }
  @media screen and (min-width: 1920px) {
    height: 100vh;
  }

  h1 {
    margin: 5.5rem;
    color: #000;
    font-weight: 600;
    text-align: justify;
    font-size: 3.75rem;
    font-style: normal;
    line-height: 3.5rem; /* 93.333% */

    text-shadow: 4px 1px 8px rgba(0, 0, 0, 0.4);
    @media (min-width: 1200px) and (max-width: 1919px) {
      font-size: 3.5rem;
    }

    @media screen and (max-width: 480px) {
      font-size: 1.25rem;
      margin: 4rem;
    }

    @media screen and (min-width: 768px) and (max-width: 991px) {
      font-size: 1.8rem;
      margin: 4rem;
    }
    @media screen and (min-width: 992px) and (max-width: 1199px) {
      font-size: 2rem;
      margin: 4rem;
    }
  }
`;

export const TextPillars = styled.div`
  display: flex;
  gap: 3.5rem;

  @media screen and (max-width: 480px) {
    justify-content: center;
    gap: 0.6rem;
  }

  @media screen and (max-width: 360px) {
    gap: 0.6rem;
  }

  @media screen and (min-width: 768px) and (max-width: 991px) {
    justify-content: center;
    gap: 0.3rem;
  }
  @media screen and (min-width: 992px) and (max-width: 1199px) {
    justify-content: center;
    gap: 0.5rem;
  }
  @media screen and (min-width: 1200px) and (max-width: 1919px) {
    justify-content: center;
    gap: 1.2rem;
  }
  @media screen and (min-width: 1920px) {
    justify-content: center;
    gap: 3rem;
  }
`;

export const Text1 = styled.div`
  width: 355px;
  height: 271px;
  border-radius: 9px;
  background: linear-gradient(180deg, #338bc2 0%, #75aff2 53.65%, #8de 100%);

  p {
    color: #181717;
    text-align: start;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.6875rem;
    padding: 20px;
  }

  h3 {
    font-weight: 900;
    font-size: 1.125rem;
    width: 5.25rem;
    height: 1.25rem;
    margin-top: 2.3125rem;
    margin-left: 3.3125rem;
  }

  @media screen and (min-width: 1920px) {
    width: 460px;
    height: 450px;
    h3 {
      font-size: 1.8rem;
      margin-left: 1.3rem;
    }
    p {
      font-size: 2.3rem;
      margin-top: 0.95rem;
      line-height: 2.9rem;
      font-weight: 600;
    }
  }

  @media (min-width: 1200px) and (max-width: 1919px) {
    gap: 10px;
    width: 355px;
    height: 271px;
    h3 {
      font-weight: 900;
      font-size: 1.125rem;
      width: 5.25rem;
      height: 1.25rem;
      margin-top: 2.3125rem;
      margin-left: 3.3125rem;
    }

    p {
      margin-top: 0.8125rem;
      font-size: 1.3rem;
      line-height: 1.5rem;
      letter-spacing: 0.098rem;
    }
  }

  @media screen and (max-width: 480px) {
    width: 115px;
    height: 180px;
    h3 {
      font-size: 10px;
      margin-top: 20px;
      margin-left: 0.5rem;
    }
    p {
      font-size: 0.625rem;
      letter-spacing: 0.098rem;
      line-height: 0.625rem;
      margin-top: -1rem;
    }
  }

  @media screen and (max-width: 360px) {
    width: 107px;
    height: 173px;
    h3 {
      font-size: 9.5px;
    }
    p {
      line-height: 0.61rem;
      font-size: 8.8px;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 991px) {
    width: 246px;
    height: 264px;
    h3 {
      font-size: 18px;
    }
    p {
      font-size: 15px;
      line-height: 22.5px;
    }
  }

  @media screen and (min-width: 992px) and (max-width: 1199px) {
    width: 302px;
    height: 264px;
    h3 {
      font-size: 18px;
    }
    p {
      font-size: 18px;
      line-height: 27px;
    }
  }
`;
export const Text2 = styled.div`
  width: 355px;
  height: 271px;
  border-radius: 9px;
  background: #14183e;
  margin-top: 60px;
  h3 {
    font-weight: 900;
    color: #ffffff;
  }
  p {
    color: #ffffff;
    text-align: start;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.6875rem;
    padding: 20px;
  }
  @media screen and (min-width: 1920px) {
    width: 460px;
    height: 450px;
    h3 {
      margin-top: 15px;
      font-size: 1.8rem;
      margin-left: 1.3rem;
    }
    p {
      font-size: 2.5rem;
      margin-top: 0.95rem;
      line-height: 2.3rem;
    }
  }

  @media (min-width: 1200px) and (max-width: 1919px) {
    h3 {
      color: #ffffff;
      font-weight: 900;
      font-size: 1.125rem;
      width: 5.25rem;
      height: 1.25rem;
      margin-top: 2.3125rem;
      margin-left: 3.3125rem;
    }
    p {
      color: #ffffff;
      margin-top: 0.8125rem;
      font-size: 1.3rem;
      line-height: 1.5rem;
    }
  }

  @media screen and (max-width: 480px) {
    width: 120px;
    height: 180px;
    margin-top: 35px;
    h3 {
      font-size: 10px;
      margin-top: 10px;
      color: #ebebeb;
      margin-left: 0.5rem;
    }

    p {
      font-size: 0.625rem;
      line-height: 0.55rem;
      letter-spacing: 0.6px;
    }
  }
  @media screen and (max-width: 360px) {
    width: 107px;
    height: 185px;
    h3 {
      font-size: 9.5px;
    }
    p {
      line-height: 0.61rem;
      font-size: 8.8px;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 991px) {
    width: 246px;
    height: 264px;
    h3 {
      font-size: 18px;
      margin-left: 30px;
      margin-top: 30px;
    }
    p {
      font-weight: 400;
      font-size: 15px;
      line-height: 22.5px;
      margin-bottom: 10px;
    }
  }

  @media screen and (min-width: 992px) and (max-width: 1199px) {
    width: 302px;
    height: 264px;
    h3 {
      font-size: 18px;
      margin-left: 37px;
      margin-top: 36px;
    }
    p {
      font-size: 18px;
      line-height: 27px;
    }
  }
`;

export const Text3 = styled.div`
  width: 22.1875rem;
  height: 16.9375rem;
  border-radius: 9px;
  background: linear-gradient(180deg, #338bc2 0%, #75aff2 53.65%, #8de 100%);
  h3 {
    font-weight: 900;
    font-size: 1.125rem;
    width: 5.25rem;
    height: 1.25rem;
    margin-top: 2.3125rem;
    margin-left: 3.3125rem;
  }

  ul {
    li {
      color: #000;
      text-align: center;
      font-size: 1.125rem;
      font-style: normal;
      font-weight: 500;
      line-height: 1.6875rem;
      letter-spacing: 0.098rem;
      list-style: none;
    }
  }
  .custom-list {
    list-style: none;
    padding: 0;
  }
  .custom-list li {
    position: relative;
    padding-left: 20px; /* Espaço para a flecha */
    margin-bottom: 5px;
  }

  .custom-list li:before {
    position: absolute;
    left: 0;
  }
  @media screen and (min-width: 1920px) {
    width: 460px;
    height: 450px;
    h3 {
      font-size: 1.8rem;
      margin-left: 1.6rem;
      margin-bottom: 50px;
    }

    .custom-list {
      margin-top: 2rem;
    }
    ul {
      margin-top: 20px;
      li {
        margin-top: 0.5rem;
        text-align: center;
        font-size: 2.5rem;
        margin-top: 1.95rem;
        line-height: 2rem;
        font-weight: 600;
      }
    }
  }
  @media (min-width: 1200px) and (max-width: 1919px) {
    font-size: 1.3rem;
    line-height: 1rem;
    h3 {
      font-weight: 900;
      font-size: 1.125rem;
      width: 5.25rem;
      height: 1.25rem;
      margin-top: 2.3125rem;
      margin-left: 3.3125rem;
    }
    ul {
      li {
        margin-top: 0.8125rem;
        text-align: center;
      }
    }
  }

  @media screen and (max-width: 480px) {
    width: 120px;
    height: 180px;
    h3 {
      font-size: 10px;
      margin-top: 20px;
      margin-left: 0.5rem;
    }
    ul {
      li {
        line-height: 1.1rem;
        text-align: justify;
        font-size: 0.625rem;
        margin-top: 8px;
      }
    }
  }
  @media screen and (max-width: 360px) {
    width: 107px;
    height: 173px;
    h3 {
      font-size: 9.5px;
    }
    p {
      line-height: 0.61rem;
      font-size: 8.8px;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 991px) {
    width: 246px;
    height: 264px;
    h3 {
      font-size: 18px;
    }
    ul {
      margin-top: 1.5rem;
      li {
        font-size: 0.9375rem;
      }
    }
  }

  @media screen and (min-width: 992px) and (max-width: 1199px) {
    width: 302px;
    height: 264px;
    h3 {
      font-size: 18px;
    }
    ul {
      margin-top: 1.5rem;
      li {
        font-size: 18px;
      line-height: 27px;
      }
  }
}
`;
