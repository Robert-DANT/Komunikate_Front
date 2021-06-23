import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  DateInput,
  BooleanInput,
  SelectArrayInput,
} from "react-admin";

const ArticleCreate = (props) => {
  return (
    <Create title="Create an article" {...props}>
      <SimpleForm>
        <TextInput source="title" />
        <TextInput source="sub_title" />
        <TextInput multiline source="body" />
        <DateInput label="Published" source="publishedAt" />
        <BooleanInput source="commentable" />
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
    </Create>
  );
};

export default ArticleCreate;
