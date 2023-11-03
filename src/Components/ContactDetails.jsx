import { useParams } from "react-router-dom"
import User from '../user.jpg'

import { Link } from "react-router-dom"

const ContactDetails = ({contacts, hundleDelete}) => {

    const {id} = useParams()
    const contact = contacts.find(contact => (contact.id).toString() === id)

  return (
    <main  style={{paddingTop: '5rem'}}>

        <Link className='ui button blue' to='/'>Home</Link>

        {
            contact && (
                <>
                    <div className="ui card centered">
                    <div className="img">
                        <img src={User} alt="user" style={{width: '100%'}} />
                    </div>
                    <div className="content" style={{padding: '2rem'}}>
                        <div className="header">{contact.name}</div>
                        <div className="description">{contact.email}</div>
                        <div className="description">{contact.number}</div>
                    </div>
                </div>

                <button className="ui button red center" onClick={()=> hundleDelete(contact.id)}>Delete</button>
                </>
            )
        }

        {
            (!contact) && (
                <div className="header">No Contact to Show Here</div>
            )
        }

    </main>
  )
}

export default ContactDetails
