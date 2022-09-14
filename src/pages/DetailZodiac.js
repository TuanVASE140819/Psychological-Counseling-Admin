import Item from 'antd/lib/list/Item';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { DetailZodiacAction, LayDanhSachHousesAction } from '../redux/action/QuanLyZodiacAction';
import { RadioChangeEvent } from 'antd';
import { Radio, Space, Tabs } from 'antd';
import { HiPencil } from  'react-icons/hi';
import moment from 'moment';

export default function DetailZodiac (props) {
    const dispatch = useDispatch();
    const { chiTietZodiac, arrHouses } = useSelector(rootReducer => rootReducer.QuanLyZodiac);
    console.log(chiTietZodiac);
    useEffect(() => {
        const id = props.match.params.id;
        console.log(id);
        const action = DetailZodiacAction(id);
        dispatch(action);
        const action1 = LayDanhSachHousesAction();
        dispatch(action1);
    }, []);
    console.log(arrHouses);
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
                                style={{height: '300px', width: '300px', paddingBottom: '50px'}}
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
                        <h6 className='mt-5'>Chòm Sao {chiTietZodiac.name}</h6>
                        <div><HiPencil /></div>
                        <p className='mt-3'><span className='font-weight-bold'>Biểu Tượng : </span>{chiTietZodiac.name}</p>
                            <p className='mt-3'><span className='font-weight-bold'>Thể Thức: </span>{chiTietZodiac.name}</p>
                            <p className='mt-3'><span className='font-weight-bold'>Nguyên Tố : </span>{chiTietZodiac.name}</p>
                            <p className='mt-3'><span className='font-weight-bold'>Hành Tinh : </span>{chiTietZodiac.name}</p>
                            <p className='mt-3'><span className='font-weight-bold'>Cung Địa Bàn : </span>{chiTietZodiac.name}</p>
                            <p className='mt-3'><span className='font-weight-bold'>Tuyên Ngôn : </span>{chiTietZodiac.name}</p>
                            <p className='mt-3'><span className='font-weight-bold'>Nội Dung: </span>{chiTietZodiac.name}</p>

                    </div>
                </Tabs.TabPane>
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

            </Tabs>
        </div>

    )
}
