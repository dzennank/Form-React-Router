import React from 'react'
import { useLocation } from 'react-router-dom'

const NewForm = (props) => {
  const location = useLocation();
  console.log(location.state.formData.firstName)
  return (
    <div>
    <h1>OVO JE DRUGA FORMA SA PROSLEDJENIM PODACIMA</h1>
      <form>
        <label htmlFor='fname'>First name</label><br />
        <input type='text' value={location.state.formData.firstName} name='fname'/><br />

        <label htmlFor='lname'>First name</label><br />
        <input type='text' value={location.state.formData.lastName} name='lname'/>
      </form>
    </div>
  )
}

export default NewForm
