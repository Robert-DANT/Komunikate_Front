import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  DateInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

const ArticleEdit = (props) => {
  return (
    <Edit title="Edit post" {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="title" />
        <TextInput source="sub_title" />
        <TextInput multiline source="body" />
    {/*     <ReferenceInput
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

export default ArticleEdit;
