import styled from "styled-components";
import Books from "../../assets/Books.png";

export const Wrapper = styled.div`
  background-image: url(${Books});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100%;
  backdrop-filter: blur(5px);
  z-index: -1;

  .hero {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 30px;
    padding: 12rem;

    .hero_topic {
      font-weight: 700;
      font-size: 70px;
      width: 700px;
      height: 200px;
      line-height: 5.5rem;
      color: #fff;
      margin-left: -40px;
      margin-top: 60px;
    }
    .hero_text {
      font-weight: bold;
      font-size: 20px;
      width: 430px;
      height: 200px;
      line-height: 1.5rem;
      color: #fff;
      margin-left: -40px;
    }
  }

  @media screen and (max-width: 760px) {
    .hero {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 20px;

      .hero_topic {
        font-weight: 500;
        font-size: 24px;
        width: 400px;
        height: 150px;
        text-align: center;
      }
      .hero_text {
        font-weight: 300;
        font-size: 20px;
        width: 300px;
        height: 150px;
        text-align: center;
      }
    }
  }
`;

export const BookWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: #fff;

  .book_category {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 35px;
    margin: 70px;

    .cat_1 {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 20px;
      border-radius: 10px;
      border: 1px solid #fff;
      box-shadow: #bf413e;
      padding: 24px;
      background-color: #fff;
      width: 40%;
      box-shadow: 2px 2px 2px 2px #808080;
      &:hover {
        transition: transform 0.2s;
        transform: scale(0.9);
      }

      .book1 {
        width: 300px;
        height: 350px;
        border-radius: 8px;
      }
      .book_types {
        color: #bf413e;
      }
    }
    .cat_2 {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 20px;
      border-radius: 10px;
      border: 1px solid #fff;
      box-shadow: #bf413e;
      padding: 24px;
      background-color: #fff;
      width: 40%;
      box-shadow: 2px 2px 2px 2px #808080;

      &:hover {
        transition: transform 0.2s;
        transform: scale(0.9);
      }

      .book2 {
        width: 300px;
        height: 350px;
        border-radius: 8px;
      }
      .book_types {
        color: #bf413e;
      }
    }
    .cat_3 {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 20px;
      border-radius: 10px;
      border: 1px solid #fff;
      box-shadow: #bf413e;
      padding: 24px;
      background-color: #fff;
      width: 40%;
      box-shadow: 2px 2px 2px 2px #808080;
      &:hover {
        transition: transform 0.2s;
        transform: scale(0.9);
      }

      .book3 {
        width: 300px;
        height: 350px;
        border-radius: 8px;
      }
      .book_types {
        color: #bf413e;
      }
    }
  }
  .library {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #bf413e;
    width: 100%;
    height: 100%;

    .library_link {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      color: #fff;
      font-weight: 200;
      font-size: 15px;
      padding: 12px 20px;
      border: 1px solid #fff;
      width: 500px;
      margin: 40px;

      &:hover {
        background-color: #fff;
        transform: 3s ease-in-out;
        color: #bf413e;
      }
    }
  }
`;
