import styled from "styled-components";

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 63px;
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
`;
