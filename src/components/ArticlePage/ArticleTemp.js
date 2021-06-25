// import React, { useEffect, useState} from 'react';
// import axios from 'axios';


//  const ArticleTemp = () => {
//      const [posts, setPosts] = useState('')
//    const fetchData = async () => {
//      await axios.get(`http://jsonplaceholder.typicode.com/posts`)
//     .then((response) => console.log(response.data.posts))
//      .catch((error) => console.error('Ups, that went wrong', error)); 
//      };
// 
 

//  const ArticleTemp = () => {
//     const [data, setData] = useState(null);
//     const [fetchData, setFetch] = useState(false);
 
//     useEffect(() => {
//        if (fetchData) {
//           axios.get('https://jsonplaceholder.typicode.com/todos/1')
//  .then((res) => setData(res.data.title));
//        }
//     }, [fetchData]);
//     return (
//        <>
//           <h1>{data}</h1>
//           <button onClick={() => setFetch(true)}>Fetch Data</button>
//        </>
//     );
//  };
//  export default ArticleTemp