import React from "react";
import { Edit, SimpleForm, TextInput, BooleanInput, PasswordInput, RadioButtonGroupInput } from "react-admin";

const UserEdit = (props) => {
  return (
    <Edit title="Edit User" {...props}>
      <SimpleForm>
        <TextInput source="first_name" />
        <TextInput source="last_name" />
        <TextInput source="username" />
        <TextInput source="email" />
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

    </Edit>
  );
};

export default UserEdit;
