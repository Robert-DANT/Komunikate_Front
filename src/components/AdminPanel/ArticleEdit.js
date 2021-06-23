import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  DateInput,
  SelectArrayInput,
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
        <SelectArrayInput
          label="Tags"
          source="categories"
          choices={[
            { id: "berlin", name: "Berlin" },
            { id: "hamburg", name: "Hamburg" },
            { id: "munich", name: "Munich" },
            { id: "cologne", name: "Cologne" },
            { id: "düsseldorf", name: "Düsseldorf" },
            { id: "visa", name: "Visa" },
            { id: "guide", name: "Guide" },
            { id: "lifestyle", name: "Lifestyle" },
            { id: "healthcare", name: "Healthcare" },
          ]}
        />
      </SimpleForm>
    </Edit>
  );
};

export default ArticleEdit;
