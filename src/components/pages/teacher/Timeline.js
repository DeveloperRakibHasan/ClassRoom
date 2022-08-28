import React, { useEffect, useState } from 'react'
import book from '../../../assets/img/book.jfif'
import LinesEllipsis from 'react-lines-ellipsis'
import AuthUser from '../../auth/AuthUser'
import {Link, useNavigate} from 'react-router-dom'

function Timeline() {
  const {httpurl} = AuthUser();
  const [problems, setProblems] = useState([]);
  const usr = JSON.parse(localStorage.getItem('user'));
  const history = useNavigate();

  useEffect(()=>{
    httpurl.get('problems')
    .then(res=>{
      setProblems(res.data)
    }).catch((err)=>{
      console.log(err);
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

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
                    <tr className='border-b' key={elem.id}>
                     <td><img className='w-20 h-10' src={book} alt='img' /></td>
                      <td>{elem.subject}</td>
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
                        <Link to='/timeline/1' className='py-1 px-3 bg-yellow-400 text-white rounded-lg'>View</Link>
                        <button className='py-1 px-3 bg-green-400 text-white rounded-lg'>Accept</button>
                      </td>
                     </tr>
                        )
                      })
                     }
                  </tbody>
              </table>
          </div>
        </div>
    </div>
    :
    history('/*')
  )
    
  )
}

export default Timeline