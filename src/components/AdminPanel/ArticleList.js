import React from 'react';
import { 
    List, 
    Datagrid,
    TextField, 
    DateField, 
    EditButton,
    DeleteButton,
    BooleanField
} from 'react-admin';

const ArticleList = (props) => {
    return (
       <List {...props}>
         <Datagrid>
             <TextField source='id' />
             <TextField source='title' />
             <TextField source='sub_title' />
             <DateField source='publishedAt' />
             <BooleanField source="commentable" />
             <EditButton basePath='posts' />
             <DeleteButton basePath='posts' />
         </Datagrid>
       </List>
    )
}

export default ArticleList;