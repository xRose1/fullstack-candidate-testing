import React, { useEffect } from "react";
import { connect } from 'react-redux';

import { setModal } from 'redux/actions'

export const JobType =  ({ setModal, data, name }) => {
  const changeModal = () => {
    setModal('', name, data)
  }

  return (
    <div className="w-full bg-white mb-4 py-4 px-4">
      <h1 className="my-2 font-bold">{name}</h1>
      {
        data.map( (item, idx) => {
          {
            if(idx < 10)
            return (
              <div className="flex my-2" key={idx}>
                <h1>{ item['key'] } <span className="text-gray-500"> { item['doc_count'] }</span></h1>
              </div>
            )
            else if(idx === 10) return (
              <div className="flex my-2" key={idx}>
                <h1 className="text-indigo-600 cursor-pointer" onClick={changeModal}>Show more</h1>
              </div>
            )
          }
        }
        )
      }
    </div>
  )
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = {
  setModal
};

export default connect(mapStateToProps, mapDispatchToProps)(JobType);
