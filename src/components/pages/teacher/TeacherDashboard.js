import React, { useEffect, useState } from 'react'
import {DollarCircleFilled} from '@ant-design/icons';
import { ImBook } from "react-icons/im";
import { Table } from 'antd';
import { FaGraduationCap } from "react-icons/fa";
// import img from '../../../assets/img/book.jfif'
import AuthUser from '../../auth/AuthUser';
import book from "../../../assets/img/book.jfif";
import LinesEllipsis from "react-lines-ellipsis";

const TeacherDashboard = () => {
    const {httpurl} = AuthUser();
    const [acptedProblem, setAcptedProblem] = useState([])
    const [loading, setLoading] = useState(false)
    const [totalPage, setTotalPage] = useState(1)

    useEffect(() => {
        getProblems(1)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const getProblems = (page) => {
        setLoading(true)
        httpurl.get(`accepted_problem?page=${page}`)
            .then((res)=>{
                setAcptedProblem(res.data.data)
                setTotalPage(res.data.total)
                setLoading(false)
                console.log(res.data)
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
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
        },
    ];
    let data =
        acptedProblem.map(item => ({
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
        }))




    return (
    <div className='main-content bg-slate-50'>
        <div className='body_content'>
            <div className='grid grid-flow-row grid-cols-4 gap-6 mb-20'>
                <div className='card_bg text-center'>
                    <span className='text-[26px] text-gray-500 flex justify-center'><ImBook/></span>
                    <h2 className='text-gray-400'>Total Course</h2>
                    <span className='text-[18px]'>+07</span>
                </div>
                <div className='card_bg text-center'>
                    <span className='text-[26px] text-gray-500 flex justify-center'><FaGraduationCap/></span>
                    <h2 className='text-gray-400'>Total Student</h2>
                    <span className='text-[18px]'>+122</span>
                </div>
                <div className='card_bg text-center'>
                    <span className='text-[26px] text-gray-500'><DollarCircleFilled /></span>
                    <h2 className='text-gray-400'>Total Earning</h2>
                    <b className='text-[18px]'>$ 1064</b>
                </div>
                <div className='card_bg text-center'>
                    <span className='text-[26px] text-gray-500'><DollarCircleFilled /></span>
                    <h2 className='text-gray-400'>Available Balance</h2>
                    <b className='text-[18px]'>$ 564</b>
                </div>
            </div>
           <div>
           <h1 className='py-4 pl-6 text-[22px] font-semibold'>Accepted Request :</h1>
            <div className='w-full h-full'>
                <Table
                    loading={loading}
                    columns={columns}
                    dataSource={data}
                    pagination={{
                        pageSize: 12,
                        total: totalPage,
                        onChange: (page) => {
                            getProblems(page)
                        }
                    }}
                />
            </div>
        </div>
        </div>
    </div>
  )
}

export default TeacherDashboard