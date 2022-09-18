import axios from 'axios'

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { QuanLyZodiacAction } from '../redux/action/QuanLyZodiacAction'

function Zodiac () {
  const { arrZodiac } = useSelector(rootReducer => rootReducer.QuanLyZodiac)
  const dispatch = useDispatch()
  const [cung, setCung] = useState([])
  useEffect(async () => {
    const action = QuanLyZodiacAction()
    dispatch(action)
  }, [])
  console.log(arrZodiac)
  return (
    <div>
      <section className='as_horoscope_wrapper as_padderBottom80 as_padderTop80'>
        <div className='container_as_wrapper'>
          <div className='row_as_wrapper'>
      
            {arrZodiac?.map((item, index) => {
              return (
                <div className='col-lg-2 col-sm-4 col-xs-6' key={index}>
                  <NavLink to={`zodiacdetail/${item.id}`}>
                    <div className='as_sign_box text-centerr'>
                      <a href='service_single.html'>
                        <span className='as_sign'>
                          <img src={item.imageUrl} alt />
                        </span>
                        <div>
                          <h5>
                            {item.name}
                          </h5>
                          <p>
                            {item.datestart}
                          </p>
                        </div>
                      </a>
                    </div>
                  </NavLink>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Zodiac
