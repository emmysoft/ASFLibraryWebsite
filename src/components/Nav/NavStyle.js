import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 100px;
  background-color: #bf413e;
  padding: 30px;
  z-index: 2;
  box-shadow: #bf413e;
  position: fixed;
  width: 100%;

  @media screen and (max-width: 700px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;

    .icons {
      display: block;
      color: #fff;
      visibility: visible;
    }
  }

  .btn {
    visibility: hidden;
  }
  .logo {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .logo img {
    width: 17%;
  }
  .nav-links {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-end;
    gap: 35px;

    .link {
      font-size: 20px;
      font-weight: 300;
      color: #fff;
      text-decoration: none;
    }
  }
`;
