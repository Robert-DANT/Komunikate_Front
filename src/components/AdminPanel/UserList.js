import React from 'react';
import { 
    List, 
    Datagrid,
    TextField, 
    EmailField,
    EditButton,
    DeleteButton,
    BooleanField,
    SelectField,
} from 'react-admin';

const UserList = (props) => {
    return (
       <List {...props}>
         <Datagrid>
             <TextField source='username' />
             <SelectField source="user_role" choices={[
            { id: 'Seeker', name: 'Seeker' },
            { id: 'Mentor', name: 'Mentor' },
        ]} />
             <EmailField source='email' />
             <TextField source="userImg" />
             <TextField source='first_name' />
             <TextField source='last_name' />
             <TextField source='id' />
             <BooleanField source="admin" />
             <EditButton basePath='users' />
             <DeleteButton basePath='users' />
         </Datagrid>
       </List>
    )
}

export default UserList;