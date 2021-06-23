import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  DateInput,
  BooleanInput,

} from "react-admin";

const CommentCreate = (props) => {
  return (
    <Create title="Create a comment" {...props}>
      <SimpleForm>
        <TextInput source="title" />
        <TextInput multiline source="text" />
        <DateInput label="Date" source="publishedAt" />
        <BooleanInput source="commentable" />
      </SimpleForm>
    </Create>
  );
};

export default CommentCreate;
