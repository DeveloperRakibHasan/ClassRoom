import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

function Calender() {
  return (
    <div className='main-content'>
      <div className='body_content'>
      <button className='py-2 px-4 bg-gray-50 rounded-md font-bold'>Add Event</button>
      <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        selectable
      />
      </div>
    </div>
  )
}

export default Calender