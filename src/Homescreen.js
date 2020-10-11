import React, { useState } from 'react';
import ReactDOM from "react-dom";
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import logo from './Images/weatherhub.png';
import Loginform from './Loginform';
import "bootstrap/dist/css/bootstrap.min.css";




function Homescreen( {setUserLoggedIn} ) {
   const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
  
  

  function handleEmailInput (event){
    setEmail(event.target.value)
  }

  function handlePasswordInput(event) {
    setPassword(event.target.value);

  }

  function handleLogin(event) {
    event.preventDefault();

  }

    if (email === 'admin@weatherapp.com' && password ==='@123456'){
    setUserLoggedIn(true);
    }

  return (
    <div className="homepage">
      <div className="logo">
        <img className="mainlogo" src={logo} alt="Weatherhub's Logo" />
        <div>
          <button className="btn btn-primary shelf-cta" onClick={handleShow}>
            <span>Sign In</span>
          </button>
          <Modal className="bg-modal" show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form>
                <div >
                  <div className="form-group2">
                    <svg
                      height="50pt"
                      viewBox="0 -11 512 512"
                      width="50pt"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="m277.953125 266.667969h-166.230469c-49.664062 0-90.070312 40.402343-90.070312 90.066406v66.371094c0 7.847656 6.378906 14.226562 14.230468 14.226562h317.910157c7.851562 0 14.226562-6.378906 14.226562-14.226562v-66.371094c0-49.664063-40.402343-90.066406-90.066406-90.066406zm0 0"
                        fill="#78909c"
                      />
                      <path
                        d="m362.667969 341.332031h-5.335938c-20.585937 0-37.332031 16.746094-37.332031 37.335938v74.664062c0 20.589844 16.746094 37.335938 37.332031 37.335938h117.335938c20.585937 0 37.332031-16.746094 37.332031-37.335938v-74.664062c0-20.589844-16.746094-37.335938-37.332031-37.335938zm0 0"
                        fill="#ffc107"
                      />
                      <path
                        d="m298.667969 106.667969c0 58.910156-47.757813 106.664062-106.667969 106.664062s-106.667969-47.753906-106.667969-106.664062c0-58.910157 47.757813-106.667969 106.667969-106.667969s106.667969 47.757812 106.667969 106.667969zm0 0"
                        fill="#78909c"
                      />
                      <path d="m192 213.332031c-58.816406 0-106.667969-47.847656-106.667969-106.664062 0-58.816407 47.851563-106.667969 106.667969-106.667969s106.667969 47.851562 106.667969 106.667969c0 58.816406-47.851563 106.664062-106.667969 106.664062zm0-181.332031c-41.171875 0-74.667969 33.492188-74.667969 74.667969 0 41.171875 33.496094 74.664062 74.667969 74.664062s74.667969-33.492187 74.667969-74.664062c0-41.175781-33.496094-74.667969-74.667969-74.667969zm0 0" />
                      <path d="m474.667969 490.667969h-117.335938c-20.585937 0-37.332031-16.746094-37.332031-37.335938v-74.664062c0-20.589844 16.746094-37.335938 37.332031-37.335938h117.335938c20.585937 0 37.332031 16.746094 37.332031 37.335938v74.664062c0 20.589844-16.746094 37.335938-37.332031 37.335938zm-117.335938-117.335938c-2.941406 0-5.332031 2.390625-5.332031 5.335938v74.664062c0 2.945313 2.390625 5.335938 5.332031 5.335938h117.335938c2.941406 0 5.332031-2.390625 5.332031-5.335938v-74.664062c0-2.945313-2.390625-5.335938-5.332031-5.335938zm0 0" />
                      <path d="m453.332031 373.332031h-74.664062c-8.832031 0-16-7.167969-16-16v-48c0-29.394531 23.933593-53.332031 53.332031-53.332031s53.332031 23.9375 53.332031 53.332031v48c0 8.832031-7.167969 16-16 16zm-58.664062-32h42.664062v-32c0-11.753906-9.578125-21.332031-21.332031-21.332031s-21.332031 9.578125-21.332031 21.332031zm0 0" />
                      <path d="m266.667969 448h-250.667969c-8.832031 0-16-7.167969-16-16v-74.667969c0-55.871093 45.460938-101.332031 101.332031-101.332031h186.667969c17.835938 0 35.390625 4.714844 50.753906 13.652344 7.636719 4.4375 10.214844 14.230468 5.78125 21.867187-4.4375 7.660157-14.230468 10.21875-21.890625 5.78125-10.472656-6.078125-22.464843-9.300781-34.644531-9.300781h-186.667969c-38.226562 0-69.332031 31.105469-69.332031 69.332031v58.667969h234.667969c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
                    </svg>
                  </div>
                  <br></br>
                  <div className="form-group2">
                    <input
                      className="search-bar"
                      placeholder="E-Mail"
                      type="email"
                      name="email"
                      id="email"
                      value={email}
                      onChange={handleEmailInput}
                    />
                  </div>
                  <br></br>
                  <div className="form-group2">
                    <input
                      className="search-bar"
                      placeholder="Password"
                      type="password"
                      name="password"
                      id="password"
                      value={password}
                      onChange={handlePasswordInput}
                    />
                  </div>
                  <br></br>
                  <div className="form-group1">
                    <button
                      className="btn btn-primary shelf-cta"
                      onClick={handleLogin}
                    >
                      <span>Sign In</span>
                    </button>
                  </div>
                </div>
              </form>
            </Modal.Body>
            <Modal.Footer></Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
}


const rootElement = document.getElementById("root");
ReactDOM.render(<Homescreen />, rootElement);
export default Homescreen;