import { Button, DatePicker, Form, Input, InputNumber, Switch } from 'antd';
import { useFormik } from 'formik';
import moment from 'moment';
import React from 'react';
import { useDispatch } from 'react-redux';
import { CreateConsultantsAction } from '../redux/action/ConsultantsAction';
export default function CreateConsultant () {
    const dispatch = useDispatch();
    const layout = {
        labelCol: {
            span: 8,
        },
        wrapperCol: {
            span: 16,
        },
    };

    const formik = useFormik({
        initialValues: {
            fullName: '',
            email: '',
            imageUrl: '',
            price: 0,
            address: '',
            dob: '',
            gender: '',
            phone: '',
            skill: '',
            status: '',
            experience: 0,
            rating: 0,
            feedback: ''
        },
        onSubmit: (value) => {
            console.log(value);
            const action = CreateConsultantsAction(value);
            dispatch(action);
        }
    })

    const handleChangeDate = (value) => {
        const date = moment(value).format('YYYY-MM-DD');
        formik.setFieldValue('dob', date)

    };

    return (
        <Form {...layout} style={{ width: '60%', margin: '0 auto' }} onSubmitCapture={formik.handleSubmit} >
            {/* <Form.Item
                name={['user', 'name']}
                label="Name"
                onChange={formik.handleChange}
            >
                <Input />
            </Form.Item> */}
            <Form.Item
                name='fullName'
                label="FullName"

            >
                <Input onChange={formik.handleChange} />
            </Form.Item>
            <Form.Item
                name={'email'}
                label="Email"

            >
                <Input onChange={formik.handleChange} />
            </Form.Item>
            <Form.Item name={'imageUrl'} label="imageUrl" >
                <Input onChange={formik.handleChange} />
            </Form.Item>
            <Form.Item
                name={'price'}
                label="Price"

            >
                <Input onChange={formik.handleChange} />
            </Form.Item>
            <Form.Item
                name={'address'}
                label="Address"

            >
                <Input onChange={formik.handleChange} />
            </Form.Item>
            <Form.Item

                label="Dob"

            >
                <DatePicker format="YYYY-MM-DD" onChange={handleChangeDate} />
            </Form.Item>
            <Form.Item
                name={'gender'}
                label="Gender"

            >
                <Input onChange={formik.handleChange} />
            </Form.Item>
            <Form.Item
                name={'phone'}
                label="Phone"

            >
                <Input onChange={formik.handleChange} />
            </Form.Item>
            <Form.Item
                name={'skill'}
                label="Skill"

            >
                <Input onChange={formik.handleChange} />
            </Form.Item>
            <Form.Item
                name={'status'}
                label="Status"

            >
                <Input onChange={formik.handleChange} />
            </Form.Item>
            <Form.Item
                name={'experience'}
                label="Experience"

            >
                <Input onChange={formik.handleChange} />
            </Form.Item>
            <Form.Item
                name={'rating'}
                label="Rating"

            >
                <Input onChange={formik.handleChange} />
            </Form.Item>
            <Form.Item name={'feedback'} label="Feedback">
                <Input.TextArea onChange={formik.handleChange} />
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <button type="submit" htmlType="submit">
                    Submit
                </button>
            </Form.Item>
        </Form>
    )
}
