import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { GetPlanetsAction } from '../redux/action/PlanetsAction'

function Planet () {
  // get data
  const { arrPlanet } = useSelector(rootReducer => rootReducer.PlanetsReducer)
  const dispatch = useDispatch()
  // const [planet, setPlanet] = useState([])
  useEffect(async () => {
    const action = GetPlanetsAction()
    dispatch(action)
  }, [])
  console.log(arrPlanet)
  return (
    <div className="container-planet">
      <section className='as_horoscope_wrapper as_padderBottom80 as_padderTop80'>
        <div className='container_as_wrapper'>
          <div className='row_as_wrapper'>
              
            {arrPlanet?.map((item, index) => {
              return (
                <div className='col-lg-2 col-sm-4 col-xs-6' key={index}>
                  <NavLink to={`planetdetail/${item.id}`}>
                    <div className='as_sign_box text-centerr'>
                      <a href='service_single.html'>
                        <span className='as_sign'>
                          <img src={item.description} alt />
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
export default Planet
