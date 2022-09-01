import React, { useEffect, useState } from 'react'
import book from '../../../assets/img/book.jfif'
import LinesEllipsis from 'react-lines-ellipsis'
import AuthUser from '../../auth/AuthUser'
import {Link, useNavigate} from 'react-router-dom'
import {CheckOutlined, EyeFilled} from '@ant-design/icons'
import moment from 'moment';
import { Pagination } from 'antd';
import '../../css/pagination.css';
import {useDispatch} from "react-redux";
import {addEvents} from "../../../redux/useGlobalState";


function Timeline() {
  const history = useNavigate();
  const usr = JSON.parse(localStorage.getItem('user'));
  const {httpurl} = AuthUser();
  const [problems, setProblems] = useState([]);
  const [page, setPage] = useState('');
  const [pageSize, setPageSize] = useState('');
  const [total, setTotal] = useState('')
  const [nextPage, setNextPage] = useState('')

  const dispatch = useDispatch()

  // get all problems 
  useEffect(()=>{
    httpurl.get('allproblems')
    .then(res=>{
        setProblems(res.data.data)
        setPage(res.data.current_page)
        setPageSize(res.data.per_page)
        setTotal(res.data.total)
        setNextPage(res.data.next_page_url)
        console.log(res.data)
    }).catch((err)=>{
      console.log(err);
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])


  // accepted problems 
 function acceptedRequest(id) {
  httpurl.put(`changeStatus/${id}`)
  .then((res)=>{

  }).catch((err)=>{

  })

     // calender Event
     httpurl.get(`calendaradd/${id}`)
         .then((res)=>{
             dispatch(addEvents(res.data));
         }).catch((err)=>{
         console.log(err)
     })
 }

 // Pagination HandelChange


  return (
          (
          usr.type === 'teacher' ?
          <div className='main-content bg-slate-50 h-screen overflow-auto'>
              <div className='body-content'>
                  <div className='w-full'>
                      <table className='w-full table-fixed'>
                          <thead className='text-left'>
                          <tr>
                              <th>Img</th>
                              <th>Subject</th>
                              <th>Title</th>
                              <th>Description</th>
                              <th>Date</th>
                              <th>Action</th>
                          </tr>
                          </thead>
                          <tbody className='text-left pt-20 p-10'>
                          {
                              problems.map((elem)=>{
                                  return(
                                      <tr className='border-b mb-1 bg-white' key={elem.id}>
                                          <td><img className='w-20 h-10' src={book} alt='img' /></td>
                                          <td className=' uppercase'>{elem.subject}</td>
                                          <td>{elem.title}</td>
                                          <td>
                                              <LinesEllipsis
                                                  text={elem.description}
                                                  maxLine='1'
                                                  ellipsis='...'
                                                  basedOn='letters'
                                                  className='mb-3'
                                              />
                                          </td>
                                          <td className='text-gray-400'>{elem.date ? elem.date : "no time"}</td>
                                          <td className='flex gap-4 items-center'>
                                              <Link title='View' to='/timeline/1' className='py-1 px-3 bg-yellow-400 text-white rounded-lg hover:text-white'><EyeFilled /></Link>
                                              <button id={elem.id} onClick={()=>acceptedRequest(elem.id)} value={elem.id} title='Accept' className='py-1 px-3 bg-green-400 text-white rounded-lg'><CheckOutlined /></button>
                                              <span className='text-gray-300'>{moment().startOf('D').fromNow()}</span>
                                          </td>
                                      </tr>
                                  )
                              })
                          }
                          </tbody>
                      </table>
                      <div className='page__pagination'>
                          <Pagination
                              defaultCurrent={page}
                              current={page}
                              pageSize={pageSize}
                              total={total}
                              onChange={(page, pageSize) =>{
                                  setPage(page)
                                  setPageSize(pageSize)
                              }}
                          />
                      </div>
                  </div>
              </div>
          </div>
          :
          history('*')
          )
    
  )
}

export default Timeline