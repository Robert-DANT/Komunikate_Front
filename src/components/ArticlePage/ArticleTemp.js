import React, { useEffect, useState } from "react";
import axios from "axios";
import './ArticleTemp.css';
import '../fonts.css'
import { useParams } from 'react-router-dom';
import {FaArrowCircleUp} from 'react-icons/fa';

function ArticleTemp() {
  let {id} = useParams()

  const [post, setPost] = useState()

  // Scroll up arrow logic starts here
  const [showScroll, setShowScroll] = useState(false)
  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 200) {
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 200) {
      setShowScroll(false)
    }
  };
  window.addEventListener('scroll', checkScrollTop)

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
// Scroll up arrow logic ends here

  const calcDate = (time) => {
    const event = new Date(time);
    return event.toLocaleDateString({
      hour: "numeric",
      minute: "numeric",
    });
  };

  const fetchArticle = async () => {
    await axios
      .get(`https://stark-fjord-75040.herokuapp.com/posts/${id}`)
      .then((response) => setPost(response.data.getarticle))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchArticle();
  }, []);

  return (
    <div >
    { post ? 
    
        <>
          <div className="top-container dropShadowLightBlue">

              <div className="article_top_left">
              <img
          alt="img1"
          src={post.img1 || "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.fotocommunity.com%2Fsonnenuntergang-in-australien-32803daa-f98d-47d8-bcd3-8d8edde85379.jpg"}
          className="imgScale"
        />
              </div>

              <div className="article_top_right ">
              
      <h1 className="ArtHead textAlignLeft lessSpaceText">{post.title}</h1>
      <div className="hrHeight color_lightblue_hr"></div>
      <p className="ArtSub textAlignLeft">{post.subtitle}</p>
      <p className="moveTextUp formFonts">Published: {calcDate(post.date)}</p>
              </div>


          </div>
    
    <div className="ArtFull">

      <section className="ArtSec">
        <p className="mainBodyFont">
         {post.body}
        </p>
      </section>
      <section className="ArtSec">
        <img
          alt="img2"
          src={post.img2 ||"https://mediafiles.urlaubsguru.de/wp-content/uploads/2019/07/Oberpfaelzer-Wald_Mystische-Waelder-am-Goldsteig-im-Naturpark-Steinwald.jpg"}
          className="ArtImg"
        />
        <p className="mainBodyFont">
         {post.body2}
        </p>
      </section>
      <section className="ArtSec">
        <img
          alt="img3"
          src={post.img3 ||"http://haahilfm.com/wp-content/uploads/2019/11/K.jpg"}
          className="ArtImg"
        />
        <p className="mainBodyFont">
          {post.body3}
        </p>
      </section>
      <section className="ArtSec">
      </section>
      <h6 className="ArtCreat">Komunikate</h6>
      </div>
      
        <div className="scrollPlacement">
          <FaArrowCircleUp
            className="scrollTop"
            onClick={scrollTop}
            style={{ height: 60, display: showScroll ? 'flex' : 'none' }}
          />
          
        </div>

        </> : 'loading'}

    </div>
  );
}

export default ArticleTemp;
