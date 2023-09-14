import { Edit, SimpleForm, TextInput } from "react-admin";

const contactsEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="name" />
      <TextInput source="number" />
    </SimpleForm>
  </Edit>
);

export default contactsEdit;
