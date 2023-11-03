import { Link } from "react-router-dom"

const ContactCard = ({contact}) => {
  return (
    <div className="item" style={{padding: '1rem'}}>
      <Link to={`contact/${contact.id}`}>
        <div className="content">
          <div className="header">{contact.name}</div>
          <div style={{padding: '5px 0'}}>{contact.email}</div>
          <div>{contact.number}</div>
        </div>
      </Link>
    </div>
  )
}

export default ContactCard
