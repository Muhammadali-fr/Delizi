import React, { useState } from 'react';
import '../components/Reservation.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import reservationLeftImg from '../assets/reservationLeft.png';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';
import { MdOutlineDateRange } from "react-icons/md";
import { FaRegClock, FaRegUser } from "react-icons/fa";
import { CiSquareCheck } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";


function Reservation({cartItems}) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [Reshidden, setReshidden] = useState(false);
  const [selectedTime, setSelectedTime] = useState('04:30'); // Default time
  const [partySize, setPartySize] = useState('2'); // Default party size
  const [confres, setConfres] = useState(false);
  const [cancelRes, setCancelRes] = useState(false)

  function ReshiddenTr() {
    setReshidden(true); // Open modal
  }

  function closeReservationModal() {
    setReshidden(false); // Close modal
  }

  // Time input handler
  function handleTimeChange(e) {
    setSelectedTime(e.target.value);
  }

  // Party size handler
  function handlePartySizeChange(e) {
    setPartySize(e.target.value);
  }

  function showconfres() {
    setConfres(true)
    setReshidden(false); // Close modal
  }

  function closeconfres() {
    setConfres(false)
    setReshidden(true); // Close modal
  }

  function ModifyClose() {
    setReshidden(false);
    setConfres(false)

  }

  function OpenCalRes() {
    setCancelRes(true)
    setReshidden(false);
    setConfres(false)
  }

  function CloseCalRes() {
    setCancelRes(false)
    setConfres(true)
  }

  function CancelRes() {
    setCancelRes(false)
    setReshidden(false);
    setConfres(false)
  }


  return (
    <div className='wrap-reservation'>
      <Header cartItems={cartItems} />
      <div className="reservation">
        <div className="reservation-left">
          <img src={reservationLeftImg} alt="Reservation" />
        </div>

        <div className="reservation-right">
          <div className="wrap-booking">
            <h1>Book a table</h1>
            <div className="form-group">
              <label>Date</label>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                placeholderText="Select date"
                dateFormat="MMMM d, yyyy"
                className="custom-date-picker"
              />
            </div>

            <div className="form-group">
              <label>Time</label>
              <input
                className='reservation-right-time'
                type="time"
                value={selectedTime}
                onChange={handleTimeChange}
              />
            </div>

            <div className="form-group-select">
              <label>Party size</label>
              <select
                className="custom-select"
                value={partySize}
                onChange={handlePartySizeChange}
              >
                <option value="">Select party size</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>

            <button onClick={ReshiddenTr} className="book-button">Book now</button>
          </div>
        </div>
      </div>

      {Reshidden && (
        <div className="wrap-reservationh">
          <div className="reservationh-close" onClick={closeReservationModal}>
            <IoMdClose />
          </div>
          <div className="reservationh">
            <div className="reservation-module">
              <div className='header header-reser'>
                <div className="header-logo">
                  <div className="header-logo-circle">
                    <p>D</p>
                  </div>
                  <p>Delizi<span className='header-logo-span'>oso</span></p>
                </div>

                <div className="header-counter-button">
                  <Link className='header-signup' to='/Signup'><button>Sign in</button></Link>
                  <Link to='/Login'><button>Login</button></Link>

                  <div className="header-counter-button-rectangles">
                    <div className="header-counter-button-rectangle"></div>
                    <div className="header-counter-button-rectangle"></div>
                    <div className="header-counter-button-rectangle"></div>
                    <div className="header-counter-button-circle"></div>
                  </div>
                </div>
              </div>

              <h1 className='reservationh-h1'>Reservation</h1>

              <div className="wrap-reservation-due">
                <p>Due to limited availability, we can hold this table for you for <strong>5:00 minutes</strong></p>
              </div>

              <div className="reservationh-data-order">
                <form className="reservation-data-order-inputs">
                  <strong>Data order</strong>

                  <input type="text" placeholder='First name' />
                  <input type="text" placeholder='Last name' />
                  <input type="email" placeholder='Email address' />
                  <select>
                    <option value="">Select an occasion</option>
                    <option value="">Birthday</option>
                    <option value="">Anniversary</option>
                    <option value="">Other</option>
                  </select>
                  <textarea className='reservation-data-order-inputs-texarea' placeholder='Add a special request'></textarea>
                  <div className="reservationh-data-order-check">
                    <input className='input-checkbox-res' type="checkbox" />
                    <span>Sign me up to receive dining offers and news from this restaurant by email.</span>
                  </div>
                  <button onClick={showconfres} className='reservation-data-order-inputs-btn reservation-button-resoonsibly-hid' type='submit'>Confirm reservation</button>
                </form>

                <div className="reservationh-detail">
                  <div className="reservationh-detail-date-time">
                    <h1>Reservation detail</h1>
                    <div className="reservationh-detail-date-time-date">
                      <MdOutlineDateRange />
                      <p>{selectedDate ? selectedDate.toDateString() : 'No date selected'}</p>
                    </div>

                    <div className="reservationh-detail-date-time-time">
                      <FaRegClock />
                      <p>{selectedTime}</p>
                    </div>

                    <div className="reservationh-detail-date-time-pupil">
                      <FaRegUser />
                      <p>Party of {partySize}</p>
                    </div>
                  </div>

                  <div className="restauranth-informations">
                    <h2>Restaurant Information</h2>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                    <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam.</p>
                  </div>
                  <button onClick={showconfres} className='reservation-data-order-inputs-btn reservation-data-order-hid-btn' type='submit'>Confirm reservation</button>

                </div>
              </div>

            </div>
          </div>
        </div>
      )}

      {confres && (
        <div className="confres">

          <div onClick={closeconfres} className="confres-close">
            <IoMdClose />
          </div>

          <div className="confres-modal">

            <div className='header header-confress'>
              <div className="header-logo">
                <div className="header-logo-circle">
                  <p>D</p>
                </div>
                <p>Delizi<span className='header-logo-span'>oso</span></p>
              </div>

              <div className="header-counter-button">
                <Link className='header-signup' to='/Signup'><button>Sign in</button></Link>
                <Link to='/Login'><button>Login</button></Link>

                <div className="header-counter-button-rectangles">
                  <div className="header-counter-button-rectangle"></div>
                  <div className="header-counter-button-rectangle"></div>
                  <div className="header-counter-button-rectangle"></div>
                  <div className="header-counter-button-circle"></div>
                </div>
              </div>
            </div>

            <div className="confres-succes-wrap">
              <div className="confres-succes">
                <h1>Reservation has been confirmed</h1>
                <div className="confres-succes-sent">
                  <CiSquareCheck />
                  <p>The confirmation result has been sent to your email  </p>
                </div>
                <div className="confres-succes-id">
                  <MdOutlineDateRange />
                  <p>Booking ID : #123456</p>
                </div>

              </div>
            </div>


            <div className="confres-detail-modify">

              <div className="confres-detail-modify-img">
                <img src={reservationLeftImg} alt="reservationLeftImg" />
              </div>

              <div className="reservationh-detail confres-detail">
                <div className="reservationh-detail-date-time">
                  <h1>Reservation detail</h1>
                  <div className="reservationh-detail-date-time-date">
                    <MdOutlineDateRange />
                    <p>{selectedDate ? selectedDate.toDateString() : 'No date selected'}</p>
                  </div>

                  <div className="reservationh-detail-date-time-time">
                    <FaRegClock />
                    <p>{selectedTime}</p>
                  </div>

                  <div className="reservationh-detail-date-time-pupil">
                    <FaRegUser />
                    <p>Party of {partySize}</p>
                  </div>
                </div>
              </div>

              <div className="confres-detail-modify-btns">
                <button onClick={ModifyClose} className='confres-detail-modify-btns-modify'>Modify <FaEdit /> </button>
                <button onClick={OpenCalRes} className='confres-detail-modify-btns-cancel' >Cancel <IoMdClose /></button>

              </div>
            </div>

            <div className="confres-information">
              <div className="confres-information-left">
                <select>
                  <option value="Morning">Morning</option>
                  <option value="Lunch">Lunch</option>
                  <option value="Evening">Evening</option>
                </select>
                <textarea id="" placeholder='Add a special request'></textarea>
              </div>
              <div className="confres-information-right">
                <h2>Restaurant informations</h2>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam.</p>
              </div>

            </div>
          </div>

        </div>
      )}


      {cancelRes && (
        <div className="wrap-calres">
          <div onClick={CloseCalRes} className="confres-close">
            <IoMdClose />
          </div>
          <div className="calres">

            <div className='header header-confress'>
              <div className="header-logo">
                <div className="header-logo-circle">
                  <p>D</p>
                </div>
                <p>Delizi<span className='header-logo-span'>oso</span></p>
              </div>

              <div className="header-counter-button">
                <Link className='header-signup' to='/Signup'><button>Sign in</button></Link>
                <Link to='/Login'><button>Login</button></Link>

                <div className="header-counter-button-rectangles">
                  <div className="header-counter-button-rectangle"></div>
                  <div className="header-counter-button-rectangle"></div>
                  <div className="header-counter-button-rectangle"></div>
                  <div className="header-counter-button-circle"></div>
                </div>
              </div>
            </div>

            <div className="calres-are">
              <div className="calres-are-in">
                <h1>Are you sure you want to cancel the reservation?</h1>
                <div className="confres-succes-id">
                  <MdOutlineDateRange />
                  <p>Booking ID : #123456</p>
                </div>
              </div>
            </div>

            <div className="calres-wrap-in">
              <div className="confres-detail-modify-img">
                <img src={reservationLeftImg} alt="reservationLeftImg" />
              </div>

              <div className="reservationh-detail confres-detail">
                <div className="reservationh-detail-date-time">
                  <h1>Reservation detail</h1>
                  <div className="reservationh-detail-date-time-date">
                    <MdOutlineDateRange />
                    <p>{selectedDate ? selectedDate.toDateString() : 'No date selected'}</p>
                  </div>

                  <div className="reservationh-detail-date-time-time">
                    <FaRegClock />
                    <p>{selectedTime}</p>
                  </div>

                  <div className="reservationh-detail-date-time-pupil">
                    <FaRegUser />
                    <p>Party of {partySize}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="wrap-calres-cancel">
              <button onClick={CancelRes} className='calres-cancel'>Cancel reservation</button>
            </div>

          </div>
        </div>
      )}


      <Footer />
    </div>
  );
}

export default Reservation;
