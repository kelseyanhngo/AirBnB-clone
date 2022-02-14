import React from 'react';
import './styles.scss'


function InsperationItem({item}) {
    return (
        <div className='insperationItem-container'>
            <div className='inspe-pic'>
                <img src={item.img} alt=""/>
            </div>
            <div className='inspe-title'>
                <h4>
                    {item.title}
                </h4>
            </div>
            <div className='inspe-distance'>
                <h5>
                    {item.distance}
                </h5>
            </div>
        </div>
    );
}

export default InsperationItem;