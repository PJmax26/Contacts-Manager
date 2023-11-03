import './App.css';
import Header from './Components/Header'
import AddContact from './Components/AddContact'
import ContactList from './Components/ContactList'
import ContactDetails from './Components/ContactDetails';
import { useEffect, useState } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem('contacts')))

  const [name, setName] = useState([])
  const [email, setEmail] = useState([])
  const [number, setNumber] = useState([])

  const sendAndGetContact = (newItems) => {
    setContacts(newItems)
    localStorage.setItem('contacts', JSON.stringify(newItems))
  }

  const hundleSubmit = (e) => {
    e.preventDefault()
    const id = contacts.length ? contacts[contacts.length - 1].id + 1 : 1
    const newContact = {id, name: name, email: email, number: number}
    const listItems = [...contacts, newContact]
    sendAndGetContact(listItems)

    setEmail('')
    setName('')
    setNumber('')
    window.location = "http://localhost:3000/"
  }

  const hundleDelete = (id) =>{
    const listItems = contacts.filter(contact => contact.id !== id)
    sendAndGetContact(listItems)
    window.location = "http://localhost:3000/"
  }

  return (
    <div className='ui container'>
      <Router>
        <Header />
        <Routes>
          <Route path = '/' element = {
            <ContactList 
            contacts = {contacts}
            />
          } />
          <Route path = 'addcontact' element = {
            <AddContact 
            name = {name}
            setName = {setName}
            email = {email}
            setEmail = {setEmail}
            number = {number}
            setNumber = {setNumber}
            hundleSubmit = {hundleSubmit}
            />
          } />
          <Route path='contact/:id' element = {<ContactDetails
            contacts = {contacts}
            hundleDelete = {hundleDelete}
          />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
