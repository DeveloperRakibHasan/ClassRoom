import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import {useSelector} from "react-redux";
import {getAllEvent} from "../../../redux/useGlobalState";


function Calender() {
    const events = useSelector(getAllEvent);
    const date = events.date
    const even = [
            {
                title: 'Math',
                start: `${date}`,
                time: '12:20',
                timeZone: 'local',
            }
    ]

  return (
    <div className='main-content'>
      <div className='body_content'>
      <button className='py-2 px-4 bg-gray-50 rounded-md font-bold'>Add Event</button>
      <FullCalendar
        editable={false}
        events={even}
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        selectable
      />

      </div>
    </div>
  )
}

export default Calender