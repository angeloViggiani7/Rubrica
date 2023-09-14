import React from "react";
import {
  List,
  Datagrid,
  EditButton,
  DeleteButton,
  TextField,
} from "react-admin";

const ContactsList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="name" />
      <TextField source="id" sortable={false} />
      <TextField source="number" sortable={false} />
      <EditButton basepath="/contacts" />
      <DeleteButton basepath="/contacts" />
    </Datagrid>
  </List>
);

export default ContactsList;
