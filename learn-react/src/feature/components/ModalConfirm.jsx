import React from 'react';

const ModalConfirm = ({ isVisible, title, cancel = 'Cancel', submit = 'Ok', children, onCancel, onSubmit }) => {
  return (
    <>
      {isVisible && (
      <div className="modal">
        <div className="modal-popup">
          <h3>{title}</h3>
          {children}
          <div className="modal-action">
            <button className="btn btn-confirm" onClick={onSubmit}>{submit}</button>
            <button className="btn btn-cancel" onClick={onCancel}>{cancel}</button>
          </div>
        </div>
      </div>
      )}
    </>
  )
}
export default ModalConfirm;
