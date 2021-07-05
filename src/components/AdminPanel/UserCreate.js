import React from "react";
import { Create, SimpleForm, TextInput, BooleanInput, PasswordInput, RadioButtonGroupInput } from "react-admin";

const UserCreate = (props) => {
  return (
    <Create title="Create new User" {...props}>
      <SimpleForm>
        <TextInput source="first_name" />
        <TextInput source="last_name" />
        <TextInput source="username" />
        <TextInput source="email" />
        <TextInput source="userImg" />
        <PasswordInput source="password" />
        <RadioButtonGroupInput source="user_role" choices={[
            { id: 'Seeker', name: 'Seeker' },
            { id: 'Mentor', name: 'Mentor' },
        ]} />
        <BooleanInput source="living_in_germany" />
        <BooleanInput source="admin" />
        <TextInput source="languages" />
        <TextInput source="nationality" />
      </SimpleForm>
    </Create>
  );
};

export default UserCreate;
