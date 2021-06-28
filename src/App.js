import "./App.css";
import React, { useEffect, useState } from "react";
import { Admin, Resource } from "react-admin";
// import simpleRestProvider from "ra-data-simple-rest";
import jsonServerProvider from 'ra-data-json-server';
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
import axios from 'axios';
import myDataProvider from './components/AdminPanel/Provid'
import {fetchJson as httpClient} from './components/AdminPanel/httpClient'



// const dataProvider = jsonServerProvider('http://localhost:3002/users');
const dataProvider = myDataProvider('http://localhost:3002', httpClient);




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
