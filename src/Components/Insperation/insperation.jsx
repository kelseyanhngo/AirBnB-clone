import React from 'react';
import './insperation.scss'


function Insperation(props) {
    const insprationList = [
        {
            id: 1,
            img: "https://a0.muscache.com/im/pictures/1cdb5298-1e10-4d5a-ac27-20c80b53b4af.jpg?im_w=320",
            title: "Collingwood",
            distance: "112 kilometres away"
        },
        {
            id: 2,
            img: "https://a0.muscache.com/im/pictures/1cdb5298-1e10-4d5a-ac27-20c80b53b4af.jpg?im_w=320",
            title: "Huntsville",
            distance: "185 kilometres away"
        },
        {
            id: 3,
            img: "https://a0.muscache.com/im/pictures/aef20929-0d6a-40e7-8ac9-321ff0edf8c9.jpg?im_w=320",
            title: "Midland",
            distance: "126 kilometres away"
        },
        {
            id: 4,
            img: "https://a0.muscache.com/im/pictures/b4e025ab-b353-41fb-814d-5e4f80571186.jpg?im_w=320",
            title: "Barrie",
            distance: "83 kilometres away"
        },

    ]
    return (
        <div className='inperation-container'>
            <div className='insperation-title'>
                <h4>
                Inspiration for your next trip
                </h4>c

            </div>
        </div>
    );
}

export default Insperation;