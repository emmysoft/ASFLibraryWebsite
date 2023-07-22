import React from "react";
import { Wrapper, BookWrapper } from "./BodyStyle";

import monk from "../../assets/monk.jpg";
import maths from "../../assets/maths.png";
import thoughts from "../../assets/thoughts.jpg";
import { NavLink } from "react-router-dom";

const Body = () => {
  return (
    <>
      <Wrapper>
        <div className="hero">
          <h4 className="hero_topic">Educating your mind is our Key Priority</h4>
          <p className="hero_text">
            We offer you all you need to educate your mind and grow
          </p>
        </div>
      </Wrapper>
      <BookWrapper>
        <div className="book_category">
          <div className="cat_1">
            <img src={thoughts} alt="books" className="book1" />
            <h4 className="book_types">Spiritual Books</h4>
            <p className="info">
              books on Spirituality, the Church, Christianity and many more...{" "}
            </p>
            <NavLink to="/library">Read More</NavLink>
          </div>
          <div className="cat_2">
            <img src={maths} alt="books" className="book2" />
            <h4 className="book_types">Academical Books</h4>
            <p className="info">
              Course Materials, handouts, Past Questions and many more...{" "}
            </p>
            <NavLink to="/library">Read More</NavLink>
          </div>
          <div className="cat_3">
            <img src={monk} alt="books" className="book3" />
            <h4 className="book_types">Life Changing Books</h4>
            <p className="info">
              mind changing books, transformational, and financial books and
              many more...{" "}
            </p>
            <NavLink to="/library">Read More</NavLink>
          </div>
        </div>
        <div className="library">
          <NavLink to="/" className={"library_link"}>
            Visit our Library
          </NavLink>
        </div>
      </BookWrapper>
    </>
  );
};

export default Body;
