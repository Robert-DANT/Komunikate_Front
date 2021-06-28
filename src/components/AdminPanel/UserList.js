import React from 'react';
import { 
    List, 
    Datagrid,
    TextField, 
    EmailField,
    EditButton,
    DeleteButton,
    BooleanField,
} from 'react-admin';

const UserList = (props) => {
    return (
       <List {...props}>
         <Datagrid>
             <TextField source='_id' />
             <TextField source='first_name' />
             <TextField source='last_name' />
             <TextField source='user_name' />
             <EmailField source='email' />
             <BooleanField source="admin" />
             <EditButton basePath='users' />
             <DeleteButton basePath='users' />
         </Datagrid>
       </List>
    )
}

export default UserList;