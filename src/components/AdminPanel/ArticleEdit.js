import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  DateInput,
  SelectArrayInput,
  // ImageField,
  ImageInput,
  BooleanInput,
} from "react-admin";

const ArticleEdit = (props) => {
  return (
    <Edit title="Edit Article" {...props}>
      <SimpleForm>
        <TextInput disabled source="_id" />
        <TextInput source="title" />
        <TextInput source="subtitle" />
        <TextInput multiline source="body" />
        <TextInput multiline source="body2" />
        <TextInput multiline source="body3" />
        <TextInput source="img1" />
        <TextInput source="img2" />
        <TextInput source="img3" />
        {/* <ImageField source="img" title="picture.title" /> */}
        <BooleanInput source="commentable" />
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
        <ImageInput
          source="pictures"
          label="Related pictures"
          accept="image/*"
        ></ImageInput>
      </SimpleForm>
    </Edit>
  );
};

export default ArticleEdit;
