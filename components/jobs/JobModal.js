import React from 'react';
import { connect } from 'react-redux';
import { setModal } from 'redux/actions';

const JobModal = ({ showModal, titleModal, textModal, setModal }) => {

  const closeModal = () => {
    setModal('hidden', '', [])
  }

  return (
    <div className={`modal h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50 ${showModal}`}>
      <div className="bg-white rounded shadow-lg w-1/2">
        <div className="border-b px-4 py-2 flex justify-between items-center">
          <h3 className="font-semibold text-lg">{titleModal}</h3>
          <button className="text-black close-modal" onClick={closeModal}>&times;</button>
        </div>
        <div className="m-4 grid grid-cols-4 gap-4">
          {
            textModal.map( (item , idx) => (
              <div className="flex items-center" key={idx}>
                <h1>{item['key']} <span className="text-gray-500">{item['doc_count']}</span></h1>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  showModal: state.modal.show_modal,
  titleModal: state.modal.title_modal,
  textModal: state.modal.text_modal
});

const mapDispatchToProps = { setModal };

export default connect(mapStateToProps, mapDispatchToProps)(JobModal);
