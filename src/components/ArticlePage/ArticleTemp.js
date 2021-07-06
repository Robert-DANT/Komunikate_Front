import React, { useEffect, useState } from "react";
import axios from "axios";
import './ArticleTemp.css';
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
      .get(`http://localhost:3002/posts/${id}`)
      .then((response) => setPost(response.data.getarticle))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchArticle();
  }, []);

  return (
    <div className="ArtFull">
    { post ? <> <p className="RelDate">Release date: {calcDate(post.date)}</p>
      <h1 className="ArtHead">{post.title}</h1>
      <h2 className="ArtSub">{post.subtitle}</h2>
      <section className="ArtSec">
       <img
          alt="img1"
          src={post.img1 || "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.fotocommunity.com%2Fsonnenuntergang-in-australien-32803daa-f98d-47d8-bcd3-8d8edde85379.jpg"}
          className="ArtImg"
        />
        <p className="ArtPara">
         {post.body}
        </p>
      </section>
      <section className="ArtSec">
        <img
          alt="img2"
          src={post.img2 ||"https://mediafiles.urlaubsguru.de/wp-content/uploads/2019/07/Oberpfaelzer-Wald_Mystische-Waelder-am-Goldsteig-im-Naturpark-Steinwald.jpg"}
          className="ArtImg"
        />
        <p className="ArtPara">
         {post.body2}
        </p>
      </section>
      <section className="ArtSec">
        <img
          alt="img3"
          src={post.img3 ||"http://haahilfm.com/wp-content/uploads/2019/11/K.jpg"}
          className="ArtImg"
        />
        <p className="ArtPara">
          {post.body3}
        </p>
      </section>
      <section className="ArtSec">
        {/* <p className="ArtPara">
         "This is the conclusion" Her parents, upon hearing her return, welcome
          her outside their hometown. Her elder sister puts on her fine dress.
          Her younger brother sharpens the knife for the swine and sheep. Mulan
          returns to her room, changes from her tabard into her old clothes. She
          combs her hair by the window and, before the mirror, fastens golden
          yellow flowers. Her comrades are shocked to see her. For 12 years of
          their enlistment together, they did not realize that she was a woman.
          In response, Mulan offers a metaphor: "The male hare has heavy front
          paws. The female hare tends to squint. But when they are running
          side-by-side close to the ground, who can tell me which is male or
          female?"[15][16]{" "} */}
        {/* </p> */}
      </section>
      <h6 className="ArtCreat">Author</h6>

        <div className="scrollPlacement">
          <FaArrowCircleUp
            className="scrollTop"
            onClick={scrollTop}
            style={{ height: 60, display: showScroll ? 'flex' : 'none' }}
          />
        </div>
{/*       <ScrollUpButton /> */}
      {/* <input
        className="ArtComment"
        name="submit"
        type="text"
        limit='10'
        placeholder="Your comment here"
      ></input>
      <button onClick="submit">Comment</button> */}</> : 'loading'}

    </div>
  );
}

export default ArticleTemp;
