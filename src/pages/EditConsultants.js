import { useFormik, Field, Form } from 'formik'
import React from 'react'

export default function EditConsultants (props) {
  const { arrConsultants, chiTietConsultants } = props
  // console.log(arrConsultants);
  console.log('adadadsa' + chiTietConsultants[0])
  // const formik = useFormik({
  //     enableReinitialize: true,
  //     initialValues: {
  //         id: chiTietZodiac?.id,
  //         imageUrl: chiTietZodiac?.imageUrl,
  //         name: chiTietZodiac?.name,
  //         customerId: chiTietZodiac?.customerId,
  //         dateStart: chiTietZodiac?.dateStart,
  //         dateEnd: chiTietZodiac?.dateEnd,
  //         itemId: chiTietZodiac?.itemId,
  //         description: chiTietZodiac?.description,
  //         planetId: chiTietZodiac?.planetId
  //     },
  //     onSubmit: (value) => {
  //         console.log(value);
  //         const action = EditZodiacAction(chiTietZodiac.id, value);
  //         dispatch(action);
  //     }
  // })
  return (
    <div className='container'>
      <div
        className='modal fade'
        id='exampleModalCenter'
        tabIndex={-1}
        role='dialog'
        aria-labelledby='exampleModalCenterTitle'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-dialog-centered' role='document'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='exampleModalLongTitle'>
                Modal title
              </h5>
              <button
                type='button'
                className='close'
                data-dismiss='modal'
                aria-label='Close'
              >
                <span aria-hidden='true'>×</span>
              </button>
            </div>
            <div className='modal-body'>
              <form>
                <div className='row container-DetailZodiac'>
                  <div className='col-md-4 col-sm-12 col-12'>
                    <div className='form-group'>
                      <label>
                        <span>*</span>Họ và Tên:{' '}
                      </label>
                      <input
                        className='form-control'
                        placeholder='Tên Cung'
                        name='name'
                      />
                    </div>
                  </div>
                  <div className='col-md-4 col-sm-12 col-12'>
                    <div className='form-group'>
                      <label>
                        <span>*</span>Email:{' '}
                      </label>
                      <input
                        className='form-control'
                        placeholder='Tên Cung'
                        name='name'
                      />
                    </div>
                  </div>
                  <div className='col-md-4 col-sm-12 col-12'>
                    <div className='form-group'>
                      <label>
                        <span>*</span>Địa Chỉ:{' '}
                      </label>
                      <input
                        className='form-control'
                        placeholder='Tên Cung'
                        name='name'
                      />
                    </div>
                  </div>
                  <div className='col-md-4 col-sm-12 col-12'>
                    <div className='form-group'>
                      <label>
                        <span>*</span>Ngày Sinh:{' '}
                      </label>
                      <input
                        className='form-control'
                        placeholder='Tên Cung'
                        name='name'
                      />
                    </div>
                  </div>
                  <div className='col-md-4 col-sm-12 col-12'>
                    <div className='form-group'>
                      <label>
                        <span>*</span>Ngày Sinh:{' '}
                      </label>
                      <input
                        className='form-control'
                        placeholder='Tên Cung'
                        name='name'
                      />
                    </div>
                  </div>
                  <div className='col-md-4 col-sm-12 col-12'>
                    <div className='form-group'>
                      {/* Gender */}
                      <label>
                        <span>*</span>Giới Tính:{' '}
                      </label>
                      <select className='form-control' name=''>
                        <option value='Nam'>Nam</option>
                        <option value='Nữ'>Nữ</option>
                      </select>
                    </div>
                  </div>
                  <div className='col-md-4 col-sm-12 col-12'>
                    <div className='form-group'>
                      <label>
                        <span>*</span>Số Điện Thoại:{' '}
                      </label>
                      <input
                        className='form-control'
                        placeholder='Tên Cung'
                        name='name'
                      />
                    </div>
                  </div>
                  <div className='col-md-4 col-sm-12 col-12'>
                    <div className='form-group'>
                      <label>
                        <span>*</span>Kinh Nghiệm:{' '}
                      </label>
                      <input
                        className='form-control'
                        placeholder='Tên Cung'
                        name='name'
                      />
                    </div>
                  </div>
                  <div className='col-md-4 col-sm-12 col-12'>
                    <div className='form-group'>
                      <label>
                        <span>*</span>Kỹ Năng:{' '}
                      </label>
                      <input
                        className='form-control'
                        placeholder='Tên Cung'
                        name='name'
                      />
                    </div>
                  </div>
                </div>

                <div
                  class='modal-footer'
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <div>
                    <button type='submit' class='btn btn-primary'>
                      Edit
                    </button>
                    {/* <button type="button" class="btn btn-primary">Reset</button> */}
                  </div>
                  <button
                    type='submit'
                    class='btn btn-secondary'
                    data-dismiss='modal'
                  >
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
