import React from 'react';
import { 
    List, 
    Datagrid,
    TextField, 
    DateField, 
    EditButton,
    DeleteButton,
} from 'react-admin';

const CommentList = (props) => {
    return (
       <List {...props}>
         <Datagrid>
             <TextField source='id' />
             <TextField source='title' name="CommentTitle"/>
             <DateField source='publishedAt' />
             <EditButton basePath='comments' />
             <DeleteButton basePath='comments' />
         </Datagrid>
       </List>
    )
}

export default CommentList;