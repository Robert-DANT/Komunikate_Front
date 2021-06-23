import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  DateInput,
  BooleanInput,
  SelectArrayInput,
  ImageInput,
  // ImageField,
} from "react-admin";

const ArticleCreate = (props) => {
  return (
    <Create title="Create Article" {...props}>
      <SimpleForm>
        <TextInput source="title" />
        <TextInput source="subtitle" />
        <TextInput multiline source="body" />
        {/* <ImageField source="img" title="picture.title" /> */}
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
        <ImageInput
          source="pictures"
          label="Related pictures"
          accept="image/*"
        ></ImageInput>
      </SimpleForm>
    </Create>
  );
};

export default ArticleCreate;
