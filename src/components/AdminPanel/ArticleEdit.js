import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  DateInput,
} from "react-admin";

const ArticleEdit = (props) => {
  return (
    <Edit title="Edit article" {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="title" />
        <TextInput source="sub_title" />
        <TextInput multiline source="body" />
        <DateInput label="Published" source="publishedAt" />
      </SimpleForm>
    </Edit>
  );
};

export default ArticleEdit;
