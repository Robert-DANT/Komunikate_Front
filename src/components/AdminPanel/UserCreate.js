import React from "react";
import { Create, SimpleForm, TextInput, BooleanInput } from "react-admin";

const UserCreate = (props) => {
  return (
    <Create title="Create new User" {...props}>
      <SimpleForm>
        <TextInput source="first_name" />
        <TextInput source="last_name" />
        <TextInput source="user_name" />
        <TextInput source="email" />
        <BooleanInput source="admin" />
      </SimpleForm>
    </Create>
  );
};

export default UserCreate;
