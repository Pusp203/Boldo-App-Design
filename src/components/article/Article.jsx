import React, { useState } from "react";

import "./article.scss";
import coolLogo from "../../assets/coolLogo.png";
import chandler from "../../assets/chandler.png";
import rachel from "../../assets/rachel.png";
import monica from "../../assets/monica.png";
import second from "../../assets/second.png";
import third from "../../assets/third.png";
import { Data } from "./Data";

const Article = ({ initialVisible = 3 }) => {
  const [visible, setVisible] = useState(3); //for how many cards we wanna show
  // console.log(Data);
  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 3);
  };
  const shouldRenderLoadMoreButton = visible < Data.length;
  return (
    <div className="article">
      <div className="article-division">
        <div className="article-division-body">
          {/* <div> */}
          {Data.slice(0, visible).map((item) => {
            // console.log("item", item);
            return (
              <div key={item.id}>
                <div className="article-division-body__article1">
                  <div
                    className="article-division-body__article1-image"
                    key={item.id}
                  >
                    {/* <img src={coolLogo} alt="" /> */}

                    <img src={item.image} alt="" />
                  </div>
                  <div className="article-division-body__article1-text">
                    <div className="article-division-body__article1-text__info">
                      <div className="article-division-body__article1-text__info-date">
                        <h6>{item.title}</h6>
                        <p>{item.date}</p>
                      </div>
                      <div className="article-division-body__article1-text__info-paragraph">
                        <p>{item.description}</p>
                      </div>
                    </div>
                    <div className="article-division-body__article1-text_writer">
                      <img src={chandler} alt="" />
                      <p>{item.name}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          {/* </div> */}
        </div>
        {shouldRenderLoadMoreButton && (
          <div className="article-division-button" onClick={showMoreItems}>
            Load more
          </div>
        )}
        {/* <div className="article-division-button" onClick={showMoreItems}>
          Load more
        </div> */}
      </div>
    </div>
  );
};

export default Article;
