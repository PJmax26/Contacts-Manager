import ContactCard from "./ContactCard"
import { Link } from "react-router-dom"

const ContactList = ({contacts}) => {
  return (
    <ul className="ui celled list" style={{paddingTop: '5rem'}}>
      <Link className='ui button blue' to='addcontact'>Add Contact</Link>

    {
      contacts && (
        <>
          <h2> {contacts.length} {contacts.length === 1 ? "contact" : "contacts" }</h2>
          {
            contacts.map(contact => (
              <ContactCard 
              key={contact.id}
              contact = {contact}
              />
            ))
          }
        </>
      )
    }

    {
      (!contacts) && (
        <div className="ui center header">No Contact List</div>
      )
    }
    
    </ul>
  )
}

export default ContactList
