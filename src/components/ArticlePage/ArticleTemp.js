import React, { useEffect, useState } from "react";
import axios from "axios";
import './ArticleTemp.css';
import { useParams } from 'react-router-dom';

function ArticleTemp() {
  let {id} = useParams()

  const [post, setPost] = useState()


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
    <div>
    { post ? <> <p>Release date: {calcDate(post.date)}</p>
      <h1 className="ArtHead">{post.title}</h1>
      <h2 className="ArtSub">{post.subtitle}</h2>
      <section className="ArtSec">
        <p className="ArtPara">
         {post.body}
        </p>
      </section>
      <section className="ArtSec">
        <img
          alt="img1"
          src="https://giantbomb1.cbsistatic.com/uploads/scale_small/46/462814/3222917-7188601370-latest.jpg"
          className="ArtImg"
        />
        <h4 className="SubHead">This is a dividing sub-headline</h4>
        <p className="ArtPara">
         {post.body2}
        </p>
      </section>
      <section className="ArtSec">
        <img
          alt="img2"
          src="http://haahilfm.com/wp-content/uploads/2019/11/K.jpg"
          className="ArtImgT"
        />
        <h4 className="SubHead">This is another dividing sub-headline</h4>
        <p className="ArtPara">
          {post.body3}
        </p>
      </section>
      <section className="ArtSec">
        <h4 className="SubHead">This is the last dividing sub-headline</h4>
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
      <h6>Author</h6>
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
