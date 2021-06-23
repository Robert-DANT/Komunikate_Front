import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  DateInput,
} from "react-admin";

const CommentEdit = (props) => {
  return (

    // Permssion to be posted?

    // <Edit title={<CommentTitle />} {...props}> 
    <Edit title="Edit Comment" {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="title" />
        <TextInput source="text" />
        {/*  <ReferenceInput
          label="User"
          source="user_id"
          reference="users"
          validate={[required()]}
        >
          <SelectInput optionText="name" />
        </ReferenceInput> */}
        <DateInput label="Published" source="publishedAt" />
      </SimpleForm>
    </Edit>
  );
};

export default CommentEdit;
