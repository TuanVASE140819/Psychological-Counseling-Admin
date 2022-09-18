import { DatePicker, Grid, Table } from 'antd'
import React, { Component } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import FormDialog from '../components/dialog'
import {
  ChiTietCustomersAction,
  DeleteCustomersAction,
  EditCustomersAction,
  GetCustomersAction
} from '../redux/action/CustomersAction'
import { useFormik } from 'formik'
import moment from 'moment'

export default function Customer () {
  const { arrCustomers, chiTietCustomers } = useSelector(
    rootReducer => rootReducer.CustomersReducer
  )
  const dispatch = useDispatch()
  console.log(chiTietCustomers)

  const [search, setSearch] = useState('')
  const [customer, setCustomer] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  })
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const onChange = e => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }
  const handleSubmit = e => {
    e.preventDefault()
  }

  const handleFromSubmit = async () => {
    // store the states in the form data
    const loginFormData = new FormData()
    loginFormData.append('name', formData.name)
    loginFormData.append('email', formData.email)
    loginFormData.append('phone', formData.phone)
    loginFormData.append('address', formData.address)
    try {
      axios
        .post(
          `https://www.psychologicalcounselingv1.somee.com/api/Consultants/create`,
          loginFormData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
        )
        .then(res => {
          handleClose()
        })
        .catch(err => {
          console.log(err)
        })
    } catch (error) {
      console.log(error)
    }
  }

  React.useEffect(() => {
    const action = GetCustomersAction()
    dispatch(action)
  }, [])
  return (
    <div>
      <FormDialog
        open={open}
        handleFromSubmit={handleFromSubmit}
        handleClose={handleClose}
        data={formData}
        onChange={onChange}
      />
      <form onSubmit={handleSubmit}>
        <input type='text' onChange={e => setSearch(e.target.value)} />
        <button className='btn btn-primary'>Search</button>
        <grid>
          <button className='btn-createNew' onClick={handleClickOpen}>
            Create New
          </button>
        </grid>
      </form>

      <table className='table'>
        <thead>
          <th>Stt</th>
          <th>Họ và tên</th>
          <th>Email</th>
          <th>Xếp Hạng</th>
          <th>Trạng Thái</th>
          <th />
          <th />
        </thead>

        {arrCustomers &&
          arrCustomers.map((item, index) => {
            return (
              <tbody key={index}>
                <td>
                  {item.id}
                </td>
                <td>
                  {item.fullName}
                </td>
                <td>
                  {item.email}
                </td>

                <td>
                  {item.rating}
                </td>
                <td>
                  {item.status}
                </td>
                <td>
                  <button
                    className='btn btn-danger'
                    onClick={() => {
                      const action = DeleteCustomersAction(item.id)
                      dispatch(action)
                    }}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button
                    className='btn btn-primary'
                    data-toggle='modal'
                    data-target='#exampleModalCenter'
                    onClick={() => {
                      const action = ChiTietCustomersAction(item.id)
                      dispatch(action)
                    }}
                  >
                    Edit
                  </button>
                </td>
              </tbody>
            )
          })}
      </table>
    </div>
  )
}
