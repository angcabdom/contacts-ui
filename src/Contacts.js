import { Fragment, useState } from "react";
import EditableContact from "./EditableContact.js";
import Alert from "./Alert.js";
import NewContact from "./NewContact.js";

function Contacts(props) {
    const [message, setMessage] = useState(null);
    const [contacts, setContacts] = useState(props.contacts);

    function onAlertClose(){
        setMessage(null);
    }

    function validateContactName(contact) {
        if (contact.name === ''){
            setMessage('A name must be provided');
            return false;
        }
        return true;
    }

    function onContactEdit(newContact, oldContact){
        const validation = validateContactName(newContact);

        if (! validation) {
            return false;
        }

        if (newContact.name !== oldContact.name) {
            setMessage('Cannot change name');
            return false;
        }

        setContacts((prevContacts) => {
            return prevContacts.map((c) => c.name === oldContact.name ? newContact : c);
        });

        return true;
    }

    function onContactDelete(contact){
        setContacts((prevContacts) => {
            return prevContacts.filter((c) => c.name !== contact.name);
        });
    }

    function onAddContact(contact) {
        const validation = validateContactName(contact);

        if (! validation) {
            return false;
        }

        if (contacts.find(c => c.name === contact.name)) {
            setMessage('Duplicated contact');
            return false;
        }

        setContacts((prevContacts) => {
            if (! prevContacts.find(c => c.name === contact.name)) {
                return [...prevContacts,contact]
            }else {
                setMessage('Duplicated contact');
                return prevContacts;
            }
           
        });
    }

    return (
        <Fragment>
            <Alert message={message} onClose={onAlertClose()}/>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                    <NewContact onAddContact={onAddContact}/>
                    {contacts.map((contact) => 
                        <EditableContact key={contact.name} contact={contact} onEdit={(newContact) => onContactEdit(newContact, contact)} onDelete={onContactDelete}/>
                    )}
                </tbody>
            </table>
        </Fragment>
    )
}

export default Contacts;