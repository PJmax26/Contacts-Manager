import { Link } from "react-router-dom"

const AddContact = ({ name, setName, email, setEmail, number, setNumber, hundleSubmit }) => {
  return (
    <div className="ui main" style={{paddingTop: '5rem'}}>

    <Link className='ui button blue' to='/'>Home</Link>

      <h2>Add Contact</h2>
      <form className="ui form" onSubmit={hundleSubmit}>

        <div className="field">
          <label htmlFor="name">Name</label>
          <input type="text"
            name="name"
            id="name"
            placeholder="Name"
            value = {name}
            required
            onChange = {(e)=> setName(e.target.value)}
            />
        </div>
        
        <div className="field">
          <label htmlFor="email">Email</label>
          <input type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
            value = {email}
            onChange = {(e)=> setEmail(e.target.value)}
          />
        </div>

        <div className="field">
          <label htmlFor="number">Number</label>
          <input type="number"
            name="number"
            id="number"
            placeholder="Number"
            required
            value = {number}
            onChange = {(e)=> setNumber(e.target.value)}
          />
        </div>

        <button className="ui button blue">Add</button>
      </form>
    </div>
  )
}

export default AddContact
