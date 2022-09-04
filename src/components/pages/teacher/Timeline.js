import React, { useEffect, useState } from 'react'
import book from '../../../assets/img/book.jfif'
import LinesEllipsis from 'react-lines-ellipsis'
import AuthUser from '../../auth/AuthUser'
import {useNavigate} from 'react-router-dom'
import {CheckOutlined} from '@ant-design/icons'
import { Table } from 'antd';
import '../../css/pagination.css';
import {useDispatch} from "react-redux";
import {addEvents} from "../../../redux/useGlobalState";
import '../../css/antTable.css'


function Timeline() {
  const history = useNavigate();
  const usr = JSON.parse(localStorage.getItem('user'));
  const {httpurl} = AuthUser();
  const [problems, setProblems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalPage, setTotalPage] = useState(1);

  const dispatch = useDispatch()

  // get all problems 
  useEffect((page)=>{
      getRecords(1);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

    const getRecords = (page) => {
    setLoading(true)
    httpurl.get(`/allproblems?page=${page}`)
    .then(res=>{
        setProblems(res.data.data)
        setLoading(false)
        setTotalPage(res.data.total)
        }).catch((err)=>{
        console.log(err);
        setLoading(false)
        })
    }


  // accepted problems 
 function acceptedRequest(id) {
  httpurl.put(`changeStatus/${id}`)
  .then((res)=>{

  }).catch((err)=>{

  })

     // calender Event
     httpurl.get('accepted_problem')
         .then((res)=>{
             dispatch(addEvents(res.data));
             console.log(res)
         }).catch((err)=>{
         console.log(err)
     })
 }

 // Pagination HandelChange
    const columns = [
        {
            title: 'Image',
            dataIndex: 'image',
            key: 'image',
        },
        {
            title: 'Subject',
            dataIndex: 'subject',
            key: 'subject',
        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Description',
            key: 'description',
            dataIndex: 'description',
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
        },
    ];
    let data =
        problems.map(item => ({
            key: item.id,
            image:<img className='w-20 h-14' src={book} alt='img' />,
            subject: item.subject,
            title: item.title,
            description:<LinesEllipsis
                text={item.description}
                maxLine='1'
                ellipsis='...'
                basedOn='letters'
                className='mb-3'
            />,
            date: item.date,
            action:<button id={item.id} onClick={()=>acceptedRequest(item.id)} value={item.id} title='Accept' className='py-1 px-3 bg-green-400 text-white rounded-lg'><CheckOutlined /></button>
        }))


  return (
          (
          usr.type === 'teacher' ?
          <div className='main-content bg-slate-50 h-screen overflow-auto'>
              <div className='body-content'>
                  <div className='w-full'>
                      <Table
                          loading={loading}
                          columns={columns}
                          dataSource={data}
                          pagination={{
                              pageSize: 12,
                              total: totalPage,
                              onChange: (page) => {
                                  getRecords(page);
                              }
                          }}
                      />
                  </div>
              </div>
          </div>
          :
          history('*')
          )
    
  )
}

export default Timeline