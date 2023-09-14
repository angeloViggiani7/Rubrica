import restProvider from "ra-data-simple-rest";
// import contactsList from "./components/contactsList";
import contactsCreate from "./components/contactsCreate";
import { Admin, Resource } from "react-admin";
import contactsEdit from "./components/contactsEdit";
import ContactsList from "./components/contactsList";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";

function App() {
  return (
    <Admin dataProvider={restProvider("http://localhost:3000")}>
      <Resource
        icon={ContactPhoneIcon}
        name="contacts"
        list={<ContactsList />}
        create={contactsCreate}
        edit={contactsEdit}
      />
    </Admin>
  );
}

export default App;
