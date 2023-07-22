import styled from "styled-components";

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 40px;
  background-color: #fff;
  padding: 20px;

  .logo {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;

    .logo_style {
      width: 18%;
    }
  }

  .socials {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 40px;
    padding-right: 60px;

    .social1 {
      color: #0000ff;
      width: 700%;
    }
    .social2 {
      color: #ff0000;
      width: 700%;
    }
    .social3 {
      color: #bf413e;
      width: 700%;
    }
  }

  .text_p {
    text-align: right;
    width: 600px;
    color: #000;
    font-weight: 500;
    font-size: 15px;
    line-height: 0.5rem;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    .logo {
      display: flex;
      justify-content: center;
      align-items: center;

      .logo_style {
        width: 30%;
      }
    }

    .socials {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 25px;
      margin: 0 1rem;

      .social1 {
        color: #0000ff;
        width: 500%;
      }
      .social2 {
        color: #ff0000;
        width: 500%;
      }
      .social3 {
        color: #bf413e;
        width: 500%;
      }
    }

    .text_p {
      text-align: center;
      width: 200px;
      color: #000;
      font-size: 12px;
      font-weight: 400;
      line-height: 1.2rem;
    }
  }
`;
