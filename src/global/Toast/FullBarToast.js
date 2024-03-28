import React from 'react'


import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

function FullBarToast({variant,}) {
  const [position, setPosition] = useState('top-start');

  return (
    <>
      <div
        aria-live="polite"
        aria-atomic="true"
        className="bg-dark position-relative"
        style={{ minHeight: '240px' }}
      >
        <ToastContainer
          className="p-3"
          bg={variant.toLowerCase()}
          position={position}
          style={{ zIndex: 1 }}
        >
          <Toast>
            <Toast.Header closeButton={false}>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Bootstrap</strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body className={variant === 'Dark' && 'text-white'}>
                Hello, world! This is a toast message.
            </Toast.Body>
          </Toast>
        </ToastContainer>
      </div>
    </>
  );
}



export default FullBarToast