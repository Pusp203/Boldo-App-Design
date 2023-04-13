import React, { useState, useEffect, useRef } from "react";
import "./number.scss";
import CountUp from "react-countup";

const Numbers = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className={`numbers ${inView ? "in-view" : ""}`} ref={sectionRef}>
      <div className="numbers-body">
        <div className="numbers-body__top">
          <div className="numbers-body__top-paragraph">
            <p>Our numbers</p>
          </div>
          <div className="numbers-body__top-heading">
            <h2>Handshake infographic mass market crowdfunding iteration.</h2>
          </div>
        </div>
        <div className="numbers-body__bottom">
          <div className="numbers-body__bottom-left">
            <div>
              <div>
                <CountUp start={100} end={120} duration={5} />
                <span className="numbers-body__bottom-left-meter">m</span>
              </div>
            </div>
            <div className="numbers-body__bottom-left-text">
              Cool feature title
            </div>
          </div>
          <div className="numbers-body__bottom-left">
            <div>
              <CountUp start={9000} end={10000} duration={5} />
              <div className="numbers-body__bottom-left-text">
                Cool feature title
              </div>
            </div>
          </div>
          <div className="numbers-body__bottom-left">
            <div>
              <CountUp start={220} end={240} duration={5} />
              <div className="numbers-body__bottom-left-text">
                Cool feature title
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Numbers;
