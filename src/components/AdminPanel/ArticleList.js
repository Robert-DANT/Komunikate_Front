import React from 'react';
import { 
    List, 
    Datagrid,
    TextField, 
    DateField, 
    EditButton,
    DeleteButton,
    BooleanField,
    ImageField
} from 'react-admin';

const ArticleList = (props) => {
    return (
        <List {...props}>
        <Datagrid rowClick="edit">
            {/* <TextField source="userComments" /> */}
            <TextField source="title" />
            <TextField source="subtitle" />
{/*             <TextField source="img1" /> */}
{/*             <TextField source="img2" />
            {/* <TextField source="img2" />
            <TextField source="img3" /> */}
{/*             <TextField source="body" />
            <TextField source="body2" />
            <TextField source="body3" /> */}
            <DateField source="date" />
            <TextField source="id" />
            <EditButton basePath='posts' />
             <DeleteButton basePath='posts' />
        </Datagrid>
    </List>
    )
}

export default ArticleList;