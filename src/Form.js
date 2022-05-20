import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const initialData = {
    firstName: "",
    lastName: "",
  }

const Form = (props) => {
    const [formData, setFormData] = useState(initialData);
    
  return (
    <div>
      <form>
      <label htmlFor='fname'>First name</label><br />
        <input
          type='text'
          value={formData.firstName}
          onChange={(e) => setFormData({ ...formData, firstName: e.currentTarget.value })}/><br />

        <label htmlFor='lname'>Last name</label><br />
        <input type='text'
        name='lname' 
        value={formData.lastName} 
        onChange={(e) => setFormData({ ...formData, lastName: e.currentTarget.value })}/><br />
        <button>
        <Link 
        to='/newform'
         state={{
            formData
        }}
        >
        NewForm
        </Link>
        </button>
        
        
      </form>
    
      
    </div>
   
  )
}

export default Form