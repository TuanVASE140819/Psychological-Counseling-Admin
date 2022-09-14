import Item from 'antd/lib/list/Item';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { DetailZodiacAction, EditZodiacAction, LayDanhSachHousesAction } from '../redux/action/QuanLyZodiacAction';
import { RadioChangeEvent, DatePicker } from 'antd';
import { Radio, Space, Tabs } from 'antd';
import { HiPencil } from 'react-icons/hi';
import { useFormik } from 'formik'
import moment from 'moment';

export default function DetailZodiac (props) {
    const dispatch = useDispatch();
    const { chiTietZodiac, arrHouses } = useSelector(rootReducer => rootReducer.QuanLyZodiac);
    // console.log(chiTietZodiac);
    useEffect(() => {
        const id = props.match.params.id;

        const action = DetailZodiacAction(id);
        dispatch(action);
        const action1 = LayDanhSachHousesAction();
        dispatch(action1);
    }, []);


    const handleChangeDate = (name) => {
        return (value) => {
            const date = moment(value)
            formik.setFieldValue(name, date)
        }
    }
    console.log(chiTietZodiac);
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            id: chiTietZodiac?.id,
            imageUrl: chiTietZodiac?.imageUrl,
            name: chiTietZodiac?.name,
            customerId: chiTietZodiac?.customerId,
            dateStart: chiTietZodiac?.dateStart,
            dateEnd: chiTietZodiac?.dateEnd,
            itemId: chiTietZodiac?.itemId,
            description: chiTietZodiac?.description,
            planetId: chiTietZodiac?.planetId
        },
        onSubmit: (value) => {
            console.log(value);
            const action = EditZodiacAction(chiTietZodiac.id, value);
            dispatch(action);
        }
    })

    return (
        <div>
            <div style={{ width: '95%', margin: '0 auto' }}>
                <div className='row bg-white'>
                    <div className='col-6 '>
                        <div className='p-2'>
                            <h3>{chiTietZodiac.name}</h3>
                            <p>({moment(chiTietZodiac.dateStart).format('DD/MM')}) - ({moment(chiTietZodiac.dateEnd).format('DD/MM')})</p>
                            <div className='d-flex justify-content-center mt-5'>
                                <img src={chiTietZodiac.imageUrl} className='rounded mx-100 d-block'
                                    style={{ height: '300px', width: '300px', paddingBottom: '50px' }}
                                />
                            </div>
                        </div>

                    </div>
                    <div className='col-6'>
                        <div>
                            <h6 className='mt-5'>Chòm Sao {chiTietZodiac.name}</h6>
                            <p className='mt-3'><span className='font-weight-bold'>Biểu Tượng : </span>{chiTietZodiac.name}</p>
                            <p className='mt-3'><span className='font-weight-bold'>Thể Thức: </span>{chiTietZodiac.name}</p>
                            <p className='mt-3'><span className='font-weight-bold'>Nguyên Tố : </span>{chiTietZodiac.name}</p>
                            <p className='mt-3'><span className='font-weight-bold'>Hành Tinh : </span>{chiTietZodiac.name}</p>
                            <p className='mt-3'><span className='font-weight-bold'>Cung Địa Bàn : </span>{chiTietZodiac.name}</p>
                            <p className='mt-3'><span className='font-weight-bold'>Tuyên Ngôn : </span>{chiTietZodiac.name}</p>
                            <p className='mt-3'><span className='font-weight-bold'>Nội Dung: </span>{chiTietZodiac.name}</p>
                        </div>
                    </div>
                </div>

            </div>
            <Tabs defaultActiveKey="1" centered>
                <Tabs.TabPane tab="Chi Tiết" key="1" className='bg-white'>
                    <div className='' style={{ paddingLeft: '50px' }}>
                        <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'space-between' }}>
                            <h6 >Chòm Sao {chiTietZodiac.name}</h6>
                            <div style={{ marginRight: '20px', backgroundColor: 'rgba(0,0,0,0.5)', color: 'white', borderRadius: '7px', padding: '5px 8px' }} data-toggle="modal" data-target="#exampleModalCenter"> <HiPencil /></div>


                            <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            <form onSubmitCapture={formik.handleSubmit}>
                                                <div className='row container'>

                                                    <div className='col-md-12 col-sm-12 col-12'>
                                                        <div className='form-group'>
                                                            <label ><span>*</span>Tên Cung </label>
                                                            <input className='form-control' placeholder='Tên Cung' name='name' onChange={formik.handleChange} value={formik.values.name} />
                                                        </div>
                                                    </div>
                                                    <div className='col-md-6 col-sm-6 col-12'>
                                                        <div className='form-group'>
                                                            <label >Ngày Tháng Bắt Đầu:</label>
                                                            <DatePicker format="YYYY/DD/MM" name='dateStart' onChange={handleChangeDate('dateStart')} value={moment(formik.values.dateStart)} />
                                                        </div>
                                                    </div>
                                                    <div className='col-md-6 col-sm-6 col-12'>
                                                        <div className='form-group'>
                                                            <label > Ngày Tháng Kết Thúc:</label>
                                                            <DatePicker format="YYYY/DD/MM" name='dateEnd' onChange={handleChangeDate('dateEnd')} value={moment(formik.values.dateEnd)} />
                                                        </div>
                                                    </div>

                                                    <div className='col-md-12 col-sm-12 col-12'>
                                                        <div className='form-group'>
                                                            <label >*Icon Cung Hoàng Đạo</label>
                                                            <div>
                                                                <input className='form-control' name='imageUrl' min={1} onChange={formik.handleChange} value={formik.values.imageUrl} />
                                                                <input type='file' />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-md-12 col-sm-6 col-12'>
                                                        <div className='form-group'>
                                                            <label >Mô tả ngắn : </label>
                                                            <textarea className='form-control' name='description' min={1} rows="5" cols="80" onChange={formik.handleChange} value={formik.values.description} />
                                                        </div>
                                                    </div>
                                                    <div className='col-md-12 col-sm-6 col-12'>
                                                        <div className='form-group'>
                                                            <label >Nội Dung Chính : </label>
                                                            <textarea className='form-control' name='planetId' rows="5" cols="80" onChange={formik.handleChange} value={formik.values.planetId} />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="modal-footer" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                    <div>
                                                        <button type="submit" class="btn btn-primary">Edit</button>
                                                        {/* <button type="button" class="btn btn-primary">Reset</button> */}
                                                    </div>
                                                    <button type="submit" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                </div>

                                            </form>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className='mt-3'><span className='font-weight-bold'>Biểu Tượng : </span>{chiTietZodiac.name}</p>
                        <p className='mt-3'><span className='font-weight-bold'>Thể Thức: </span>{chiTietZodiac.name}</p>
                        <p className='mt-3'><span className='font-weight-bold'>Nguyên Tố : </span>{chiTietZodiac.name}</p>
                        <p className='mt-3'><span className='font-weight-bold'>Hành Tinh : </span>{chiTietZodiac.name}</p>
                        <p className='mt-3'><span className='font-weight-bold'>Cung Địa Bàn : </span>{chiTietZodiac.name}</p>
                        <p className='mt-3'><span className='font-weight-bold'>Tuyên Ngôn : </span>{chiTietZodiac.name}</p>
                        <p className='mt-3'><span className='font-weight-bold'>Nội Dung: </span>{chiTietZodiac.name}</p>

                    </div>
                </Tabs.TabPane >
                <Tabs.TabPane tab="Cung & Nhà" key="2" className='bg-white' >
                    <div className='p-5'>
                        <button className='btn btn-primary mb-5'>Thêm Dữ Liệu</button>
                        <div className='container' style={{ display: 'grid', gridTemplateColumns: 'auto auto auto auto', gap: '10px' }}>

                            {arrHouses.map((item, index) => {
                                return <button className='btn btn-primary' key={index}>Nhà {item.number}</button>
                            })}
                        </div>
                    </div>
                </Tabs.TabPane>

            </Tabs >
        </div >

    )
}
