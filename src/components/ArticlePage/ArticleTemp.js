import React, { useEffect, useState } from "react";
import axios from "axios";
import './ArticleTemp.css';

function ArticleTemp() {
  return (
    <div>
      <p>Release date: 27.06.2021</p>
      <h1 className="ArtHead">This is the title</h1>
      <h2 className="ArtSub">This is the subtitle</h2>
      <section className="ArtSec">
        <p className="ArtPara">
          "This is the introduction" Hua Mulan (traditional Chinese: 花木蘭;
          simplified Chinese: 花木兰) is a legendary folk heroine from the
          Northern and Southern dynasties era (4th to 6th century AD) of Chinese
          history. According to legend, Mulan took her aged father's place in
          the conscription for the army by disguising herself as a man. In the
          story, after prolonged and distinguished military service against
          nomadic hordes beyond the northern frontier, Mulan is honored by the
          emperor but declines a position of high office. She retires to her
          hometown, where she is reunited with her family and reveals her sex,
          much to the astonishment of her comrades. Scholars are divided on
          whether Mulan was more likely a real person or a fictional character
          of legend. Hua Mulan is depicted in the Wu Shuang Pu (無雙譜, Table of
          Peerless Heroes) by Jin Guliang.{" "}
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
          "This is body number one" The heroine of the poem is given different
          family names in different versions of her story. The Musical Records
          of Old and New states Mulan's given name is not known and therefore
          implies Mulan is her surname.[8] As the Ballad of Mulan is set in the
          Northern Wei dynasty when northern China was ruled by ethnic Xianbei,
          ancestors of the Mongols, there is some belief that Mulan was not
          ethnic Han Chinese but Xianbei, who had exclusively compound
          surnames.[8] Mulan may have been the sinified version of the Xianbei
          word "umran" which means prosperous.[8] According to later books such
          as Female Mulan, her family name is Zhu (朱), while the Romance of Sui
          and Tang says it is Wei (魏). The family name Hua (花; Huā; 'flower'),
          which was introduced by Xu Wei,[4] has become the most popular in
          recent years in part because of its more poetic meaning. In Chinese,
          her given name (木蘭) literally means "magnolia."{" "}
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
          "This is body number two" Though The Ballad of Mulan itself does not
          expressly indicate the historical setting, the story is commonly
          attributed to the Northern Wei dynasty due to geographic and cultural
          references in the ballad.[8] The Northern Wei dynasty was founded by
          the Tuoba clan of ethnic Xianbei who united northern China in the 4th
          century. The Tuoba Xianbei rulers were themselves nomads from the
          northern steppes and became partially sinified as they ruled and
          settled in northern China.[8] The Tuoba Xianbei took on the Chinese
          dynasty name "Wei", changed their own surname from "Tuoba" to "Yuan",
          and moved the capital from Pingcheng, modern-day Datong, Shanxi
          Province in the northern periphery of Imperial China, to Luoyang,
          south of the Yellow River, in the Central Plain, the traditional
          heartland of China.[8] The emperors of the Northern Wei were known
          both by the sacred Chinese title, "Son of Heaven", and by "Khagan",
          the title of the leader of nomadic kingdoms. The Ballad of Mulan
          refers to the sovereign by both titles. The Northern Wei also adopted
          the governing institutions of Imperial China, and the office of
          shangshulang (尚書郎) the Khagan offered Mulan is a ministerial
          position within the shangshusheng (尚書省), the highest organ of
          executive power under the emperor.[10] This offering indicates Mulan
          was trained in the martial arts and literary arts as she was capable
          of serving as a civilian official charged with issuing and
          interpreting written government orders.{" "}
        </p>
      </section>
      <section className="ArtSec">
        <h4 className="SubHead">This is the last dividing sub-headline</h4>
        <p className="ArtPara">
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
          female?"[15][16]{" "}
        </p>
      </section>
      <h6>Author</h6>
      <input
        className="ArtComment"
        name="submit"
        type="text"
        limit='10'
        placeholder="Your comment here"
      ></input>
      <button onClick="submit">Comment</button>
    </div>
  );
}

export default ArticleTemp;
