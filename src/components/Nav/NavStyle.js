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

  .nav-btn {
    padding: 5px;
    cursor: pointer;
    background: transparent;
    border: none;
    outline: none;
    visibility: hidden;
    opacity: 0;
    font-size: 1.8rem;
  }
  .logo {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;

    .logoImg {
      width: 17%;
    }
  }

  .nav-links {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-end;
    gap: 40px;

    .link {
      font-size: 20px;
      font-weight: 300;
      color: #fff;
      text-decoration: none;
    }
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
    background-color: #bf413e;
    z-index: 2;
    position: fixed;
    width: 90%;

    .logo {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      .logoImg {
        width: 25%;
      }
    }
    .nav-links {
      position: fixed;
      top: -100vh;
      left: 0;
      width: 100%;
      height: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1.5rem;
      background-color: #bf413e;
      transition: 1s;
    }
    .responsive_nav {
      transform: translateY(100vh);
    }
    .nav-btn {
      visibility: visible;
      opacity: 1;
      color: #fff;
    }
    .close-btn {
      position: absolute;
      top: 2rem;
      right: 2rem;
    }
  }
`;
