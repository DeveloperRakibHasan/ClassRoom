import React, {useEffect, useState} from 'react'
import AddClass from '../../class_request/AddClass'
import '../../css/side_menu.css'
import '../../css/searchicon.css'
import TeacherDashboard from '../teacher/TeacherDashboard'
// import img from '../../../assets/img/book.jfif'
import { Table } from 'antd';
import AuthUser from "../../auth/AuthUser";
import book from "../../../assets/img/book.jfif";
import LinesEllipsis from "react-lines-ellipsis";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import PaymentForm from "../../class_request/PaymentForm";

const PUBLIC_KEY = "pk_test_51LeZ8lIjJ99XMEQZGq0nQNnwJSZJ1f4I5zFf2xrco5Qpm6j5jyXfCz0UgQcTchGhFQciVShlo0ogcfKNNjkakPiL00j3hyDMvG"
const stripeTestPromise = loadStripe(PUBLIC_KEY)

const DashBoard = () => {
    const {httpurl} = AuthUser()
    const [requestData, setRequestData] = useState([])
    const [loading, setLoading] = useState(false)
    const [totalPage, setTotalPage] = useState(1)
    const usr = JSON.parse(localStorage.getItem('user'));

    useEffect(() => {
        getRequest(1)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const getRequest = (page) => {
        setLoading(true)
        httpurl.get(`requested_problem?page=${page}`)
            .then((res)=>{
                setRequestData(res.data.data)
                setTotalPage(res.data.total)
                setLoading(false)
            }).catch((err)=>{
            setLoading(false)
            console.log(err);
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
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
        },
    ];

    let data =
        requestData.map((item) => ({
            key: item.id,
            image:<img className='w-20 h-14' src={book} alt='img' />,
            subject: item.subject,
            title:<LinesEllipsis
                text={item.title}
                maxLine='1'
                ellipsis='...'
                basedOn='letters'
                className='mb-3'
            />,
            description:<LinesEllipsis
                text={item.description}
                maxLine='1'
                ellipsis='...'
                basedOn='letters'
                className='mb-3'
            />,
            date: item.date,
            status: item.status === 0 ? <span className='bg-yellow-100 py-1 px-3 rounded-xl text-gray-400'>pending..</span>:<span className='bg-green-100 py-1 px-3 rounded-xl text-gray-400'>Accepted</span>,
        }))


    return (
        <>
        {
          usr.type === 'student' ? 
          <div className='main-content bg-slate-50 h-full'>
          <div className='body_content'>

              <div className='pb-4'>
                  <b>Add Payment:</b>
                  <Elements stripe={stripeTestPromise} >
                      <PaymentForm />
                  </Elements>
              </div>


            <div className='grid grid-flow-row grid-cols-3 gap-6'>
              <div className='card_bg flex justify-center items-center'>
                <AddClass />
              </div>
              <div className='card_bg'>
                <h2 className='text-[28px]'>+1</h2>
                <span>Classes</span>
              </div>
              <div className='card_bg'>
                <h2 className='text-[28px]'>+1</h2>
                <span>Teachers</span>
              </div>
            </div>
              <div className='w-full h-full mt-20'>
                  <Table
                      loading={loading}
                      columns={columns}
                      dataSource={data}
                      pagination={{
                          pageSize: 12,
                          total: totalPage,
                          onChange: (page) => {
                              getRequest(page)
                          }
                      }}
                  />
              </div>
          </div>
        </div>
        :
        null
        }
        {
          usr.type === 'teacher' ? <TeacherDashboard/> : null
        }
        </>
  )
}

export default DashBoard