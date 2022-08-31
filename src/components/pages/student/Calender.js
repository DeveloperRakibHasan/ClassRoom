import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

function Calender() {

    const event = [
        {
            id: 'a',
            title: 'Math',
            start: '2022-08-31',
            time: '12:20',
            timeZone: 'local',
            initialDate: '2022-08-31'
        }
    ]
  return (
    <div className='main-content'>
      <div className='body_content'>
      <button className='py-2 px-4 bg-gray-50 rounded-md font-bold'>Add Event</button>
      <FullCalendar
        events={event}
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        selectable
      />
      </div>
    </div>
  )
}

export default Calender