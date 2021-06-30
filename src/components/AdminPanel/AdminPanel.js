import "./App.css";
import React, { useEffect, useState } from "react";
import { Admin, Resource, ListGuesser } from "react-admin";
// import simpleRestProvider from "ra-data-simple-rest";
import jsonServerProvider from 'ra-data-json-server';
import fakeDataProvider from "ra-data-fakerest";
import UserList from "./UserList";
import UserCreate from "./UserCreate";
import UserEdit from "./UserEdit";
import PostList from "./ArticleList";
import PostCreate from "./ArticleCreate";
import PostEdit from "./ArticleEdit";
import CommentList from "./CommentList";
import CommentCreate from "./CommentCreate";
import CommentEdit from "./CommentEdit";
import axios from 'axios';
import myDataProvider from './Provid'
import {fetchJson as httpClient} from './httpClient'



// const dataProvider = jsonServerProvider('http://localhost:3002/users');
const dataProvider = myDataProvider('http://localhost:3002', httpClient);




function AdminPanel() {

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
{/*       <Resource
        name="comments"
        list={CommentList}
        create={CommentCreate}
        edit={CommentEdit}
      /> */}
    </Admin>
  );
};

export default AdminPanel;
