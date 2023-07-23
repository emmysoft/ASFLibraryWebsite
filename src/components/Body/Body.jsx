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
          <h4 className="hero_topic">
            Educating your mind is our Key Priority
          </h4>
          <p className="hero_text">
            We offer you all you need to educate your mind and grow
          </p>
        </div>
      </Wrapper>
      <BookWrapper>
        <div className="book_category">
          <h2 className="book_topic">Our Library</h2>
          <div className="cat">
            <div className="cat_1">
              <img src={thoughts} alt="books" className="book1" />
              <h4 className="book_types">Spiritual Books</h4>
              <p className="info">
                books on Spirituality, the Church, Christianity and many more...{" "}
              </p>
              <NavLink
                to="https://drive.google.com/drive/folders/1MSbugMQEDOIeW8FqrLHvZVMbn5b-_tiD"
                className="book-link"
                target="_blank"
              >
                Check here
              </NavLink>
            </div>
            <div className="cat_2">
              <img src={maths} alt="books" className="book2" />
              <h4 className="book_types">Academical Books</h4>
              <p className="info">
                Course Materials, handouts, Past Questions and many more...{" "}
              </p>
              <NavLink
                to="https://drive.google.com/drive/folders/1Rec2TRhQUBIKy3pUDoqnT-O78vwacy2G"
                className="book-link"
                target="_blank"
              >
                Check here
              </NavLink>
            </div>
            <div className="cat_3">
              <img src={monk} alt="books" className="book3" />
              <h4 className="book_types">Life Changing Books</h4>
              <p className="info">
                mind changing books, transformational, and financial books and
                many more...{" "}
              </p>
              <NavLink
                to="https://drive.google.com/drive/folders/1bWJkN5F5MK3cTqLdNpeqLgP9a5RR5aJf"
                className="book-link"
                target="_blank"
              >
                Check here
              </NavLink>
            </div>
          </div>
        </div>
        <div className="library">
          <NavLink
            to="https://drive.google.com/drive/folders/1Rec2TRhQUBIKy3pUDoqnT-O78vwacy2G"
            className={"library_link"}
            target="_blank"
          >
            Visit our Library
          </NavLink>
        </div>
      </BookWrapper>
    </>
  );
};

export default Body;
