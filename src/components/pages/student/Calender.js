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
    // const date = events.date


    const showModal = () => {
        setIsModalVOpen(true);
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
        title: item.subject,
        start: item.date,
        time: '12:20',
        timeZone: 'local',
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
                              eventClick={showModal}
                          />

                          <>
                              {
                                  addEvent.map((el)=>{
                                      return (
                                          <Modal title="Event" visible={isModalOpen} onOk={handleOk} onCancel={handleCancel} key={el.id}>
                                              <b>{el.title}</b>
                                              <p>{el.date}</p>
                                              <p><span>{el.start_time}</span> - {el.end_time} </p>
                                          </Modal>)
                                  })
                              }
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