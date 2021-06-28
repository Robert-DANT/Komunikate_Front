import React from "react";
import { Edit, SimpleForm, TextInput, BooleanInput } from "react-admin";

const UserEdit = (props) => {
  return (
    <Edit title="Edit User" {...props}>
      <SimpleForm>
        <TextInput disabled source="_id" />
        <TextInput source="first_name" />
        <TextInput source="last_name" />
        <TextInput source="user_name" />
        <TextInput source="email" />
        <BooleanInput source="admin" />
      </SimpleForm>
    </Edit>
  );
};

export default UserEdit;
