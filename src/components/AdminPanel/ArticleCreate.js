import React from 'react';
import { Create, SimpleForm, TextInput, DateInput, BooleanInput } from 'react-admin';

const ArticleCreate = (props) => {
  return (
      <Create title='Create an article' {...props}>
        <SimpleForm>
            <TextInput source='title' />
            <TextInput source='sub_title' />
            <TextInput multiline source='body' />
            <DateInput label='Published' source='publishedAt' />
           <BooleanInput source='commentable' />
        </SimpleForm>
      </Create> 
  );
}

export default ArticleCreate;