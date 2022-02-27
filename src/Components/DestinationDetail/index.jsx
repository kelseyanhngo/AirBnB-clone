import React from 'react';
import './styles.scss'


function DestinationDetail({detail}) {
    return (
        <div
        className="des-detail" >
        
        <div className="des-detail__title">
          <p> {detail.title} </p>
        </div>
        <div className="des-detail__location">
          <p> {detail.location} </p>
        </div>
      
      </div>
    );
}

export default DestinationDetail;