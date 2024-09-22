"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function EditTicketForm() {
    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;

        setFormData({ ...formData, [name]: value })
    }

    const startingTicketData = {
        title: "",
        description: "",
        category: "Hardware Problem",
        priority: 1,
        progress: 0,
        status: "Not Started",
        active: true
    };

    const [formData, setFormData] = useState(startingTicketData);

  return (
    <div className='flex justify-center'>
          <form>
              <h3>Create Your Ticket</h3>
              <label>Title</label>
              <input type="text" name="title" id="title" onChange={handleChange} required={true} value={ formData.title } />
      </form>
    </div>
  )
}
