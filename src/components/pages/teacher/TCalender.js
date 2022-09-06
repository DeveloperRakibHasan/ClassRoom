import React, {useState, useEffect} from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { Modal } from 'antd';
import AuthUser from "../../auth/AuthUser";


function TCalender() {
    const usr = JSON.parse(localStorage.getItem('user'));
    const {httpurl} = AuthUser();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [event, setEvent] = useState([]);
    const [eventData, setEventData] = useState({})

    function showModal(event) {
        setIsModalVisible(true);
        console.log(event.event);
        setEventData(event.event)
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

// calender Event
    useEffect(() => {
        httpurl.get('accepted_problem')
            .then((res)=>{
                setEvent(res.data.data)
            }).catch((err)=>{
            console.log(err)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const even = event.map(item => ({
        id: item.id,
        title: item.subject,
        start: item.date,
        minTime: item.start_time,
        maxTime: item.end_time,
    }))

  return (
      <>
          {usr.type === 'teacher' ?
              <div className='main-content'>
              <div className='body_content'>
              <FullCalendar
              editable={false}
              events={even}
              plugins={[ dayGridPlugin ]}
              initialView="dayGridMonth"
              eventClick={(event)=>showModal(event)}
              />
                <>
                <Modal id={eventData.id} key={event.id} title="Event" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                    <b className='uppercase'>{eventData.title}</b>
                    <p>{eventData.startStr}</p>
                    {/*<p><span>{eventData.extendedProps.minTime}</span> - {eventData.extendedProps.maxTime} </p>*/}
                </Modal>
                </>

              </div>
              </div>
                : null
          }
      </>
  )
}

export default TCalender