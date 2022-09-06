import React, {useEffect, useState} from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
// import {useSelector} from "react-redux";
// import {getAllEvent} from "../../../redux/useGlobalState";
import AuthUser from "../../auth/AuthUser";
import {Modal} from "antd";


function Calender() {
    const usr = JSON.parse(localStorage.getItem('user'));
    const {httpurl} = AuthUser();
    // const events = useSelector(getAllEvent);
    const [isModalOpen, setIsModalVOpen] = useState(false);
    const [addEvent, setAddEvent] = useState([]);
    const [eventData, setEventData] = useState({});


    function showModal(event) {
        setIsModalVOpen(true);
        setEventData(event.event)
    };

    const handleOk = () => {
        setIsModalVOpen(false);
    };

    const handleCancel = () => {
        setIsModalVOpen(false);
    };


    // calender Event
    useEffect(() => {
        httpurl.get('requested_problem')
            .then((res)=>{
                setAddEvent(res.data.data)
            }).catch((err)=>{
            console.log(err)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const even = addEvent.map(item => ({
        id: item.id,
        title: item.subject,
        start: item.date,
        minTime: item.start_time,
        maxTime: item.end_time,
    }))

  return (
      <>
          {
              usr.type === 'student' ?
                  <div className='main-content'>
                      <div className='body_content'>
                          {/*<button className='py-2 px-4 bg-gray-50 rounded-md font-bold'>Add Event</button>*/}
                          <FullCalendar
                              editable={false}
                              events={even}
                              plugins={[ dayGridPlugin ]}
                              initialView="dayGridMonth"
                              selectable
                              eventClick={(event)=>showModal(event)}
                          />

                          <>
                          <Modal id={eventData.id} title="Event" visible={isModalOpen} onOk={handleOk} onCancel={handleCancel} key={addEvent.id}>
                              <b className='uppercase'>{eventData.title}</b>
                              <p>{eventData.startStr}</p>
                              {/*<p><span>{eventData.start_time}</span> - {eventData.end_time} </p>*/}
                          </Modal>
                          </>

                      </div>
                  </div>
                  :
                  null
          }
      </>

  )
}

export default Calender