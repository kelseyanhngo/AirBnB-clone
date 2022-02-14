import React from 'react';
import './flexible.scss'
Flexible.propTypes = {
    
};

function Flexible(props) {
    return (
        <div className='flexible-container'>
            <div className='flexible-background'>
                <img src='https://viaggiingiordania.it/wp-content/uploads/2020/02/bolle-wadi-rum-1024x555.jpg' alt=''/>
            </div>
            <div className='flexible-title'>
                <h3>
                Not sure where to go? Perfect.
                </h3>

            </div>
            <div className='flexible-button'>
                <button>
                    I'm Flexible
                </button>
            </div>
        </div>
    );
}

export default Flexible;