import "./App.css";
import React from "react";
import { Admin, Resource } from "react-admin";
// import simpleRestProvider from "ra-data-simple-rest";
import fakeDataProvider from "ra-data-fakerest";
import UserList from "./components/AdminPanel/UserList";
import UserCreate from "./components/AdminPanel/UserCreate";
import UserEdit from "./components/AdminPanel/UserEdit";
import PostList from "./components/AdminPanel/ArticleList";
import PostCreate from "./components/AdminPanel/ArticleCreate";
import PostEdit from "./components/AdminPanel/ArticleEdit";
import CommentList from "./components/AdminPanel/CommentList";
import CommentCreate from "./components/AdminPanel/CommentCreate";
import CommentEdit from "./components/AdminPanel/CommentEdit";

//mock data
const dataProvider = fakeDataProvider({
  users: [
    {
      user_id: 1,
      user_name: "AngiMaus",
      first_name: "Angela",
      last_name: "Merkel",
      email: "angela@gmx.de",
      user_role: "seeker",
      admin: "false",
    },
    {
      user_id: 2,
      user_name: "Tiger123",
      first_name: "Tom",
      last_name: "Jones",
      email: "tom@gmail.com",
      user_role: "",
      admin: "true",
    },
    {
      user_id: 3,
      user_name: "Spidey",
      first_name: "Peter",
      last_name: "Parker",
      email: "peter@gmx.de",
      user_role: "mentor",
      admin: "false",
    },
  ],

  posts: [
    {
      title: "Welcome to Germany",
      sub_title: "A beginner's Guide",
      body: "Cookies ensure our site works (Required cookies). We also offer Functional cookies that will personalize your visit so you are receiving the most relevant Auth0 content, and will give our internal sales teams insight into how we can help you solve identity. We also offer cookies to count visitors and optimize site performance (Performance Cookies), and Targeting Cookies that will deliver Auth0 ads to you.",
      article_image:
        "https://traveldigg.com/wp-content/uploads/2016/04/Brandenburg-Gate-Photo-At-Night.jpg",
      publishedAt: "2021-06-16",
      user_id: 1,
      commentable: true,
    },
  ],
  comments: [
    {
      title: "Komunikate is great!",
      text: "Our Komunikate-team is here for you",
      user_id: 2,
      publishedAt: "2021-06-21",
    },
  ],
});

function App() {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource
        name="users"
        list={UserList}
        create={UserCreate}
        edit={UserEdit}
      />
      <Resource
        name="posts"
        list={PostList}
        create={PostCreate}
        edit={PostEdit}
      />
      <Resource
        name="comments"
        list={CommentList}
        create={CommentCreate}
        edit={CommentEdit}
      />
    </Admin>
  );
}

export default App;
