import React from 'react'


function CustomCard({title,description,icon,bgColor}) {
    return (
        <div className="main_card">
            <div className="card">
                <img src={icon} className={`Image ${bgColor}`} alt="Avatar" />
                <div className="container">
                    <h4><b>{title}</b></h4>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default CustomCard
