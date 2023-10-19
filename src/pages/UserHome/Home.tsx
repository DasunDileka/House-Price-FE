import React from "react";
import { Header } from "../../components";
import {Footer} from "../../components";
import { Link } from "react-router-dom";
import Banner from "../../assets/images/MainImage.jpg";
import "../../assets/style/HomeStyles.css";

const Home = () => {
  return (
    <><Header /><div className="home" style={{ backgroundImage: `url(${Banner})` }}>
          <div className="headerContainer">
              <h1>Lanka House</h1>
              <p>Best Houses In Srilanka</p>
              <Link to="/signIn">
                  <button>Check Price</button>
              </Link>
          </div>
      </div><Footer /></>
  );
};

export default Home;
