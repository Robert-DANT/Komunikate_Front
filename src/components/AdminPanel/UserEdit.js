import React from 'react';
import {Edit, SimpleForm, TextInput } from 'react-admin';

const UserEdit = (props) => {
    return(
        <Edit title='Edit user' {...props}>
        <SimpleForm>
            <TextInput disabled source='id' />
            <TextInput source='first_name' />
            <TextInput source='last_name' />
            <TextInput source='user_name' />
            <TextInput source='email' />
        </SimpleForm>
      </Edit>
    );
}

export default UserEdit;