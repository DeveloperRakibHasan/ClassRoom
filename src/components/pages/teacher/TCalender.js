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
    // const id = event.map(e=>(e.id))

    const showModal = () => {
        setIsModalVisible(true);
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
        title: item.subject,
        start: item.date,
        time: '12:20',
        timeZone: 'local',
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
              eventClick={showModal}

              />
                <>
                    {
                        event.map((el)=>{
                            console.log(el.id)
                           return (
                           <Modal title="Event" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} key={el.id}>
                               <b>{el.title}</b>
                               <p>{el.date}</p>
                               <p><span>{el.start_time}</span> - {el.end_time} </p>
                            </Modal>)
                        })
                    }
                </>

              </div>
              </div>
                : null
          }
      </>
  )
}

export default TCalender