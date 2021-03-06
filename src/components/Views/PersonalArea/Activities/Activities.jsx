import React, { useEffect, useContext, useState } from 'react';
import './Activities.css'
import { UserContext } from "../../../../contexts/UserContext";
import { getActivities } from "../../../../services/ElderService";
import {  Spinner } from 'react-bootstrap'

const Activities = () => {

    const { user } = useContext(UserContext);
    const {elder} = user

    const [activities, setActivities] = useState(null);

    useEffect(() => {
        getActivities(elder.id)
        .then(res => setActivities(res))
        .catch(error => console.log(error))
    }, [elder.id]);


    return (
        <div className="container Activities">
            <div className="row">
                <div className="col-12">
                    <h1 className='text-center main__title'>
                        <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1620034455/Vitae/iconos/calendario_n7aojk.png" className='mx-2  ' alt="reports" width='80'/>
                        Actividades de {elder.firstname} {elder.lastname}
                    </h1>
                </div>
            </div>
            <div className="col text-center">
                {activities ? activities.length === 0 && <h6>No existen actividades disponibles</h6> : <Spinner className="m-5" animation="border" role="status" variant="info">
                    <span className="sr-only">Loading...</span>
                    </Spinner>}
            </div>


            {
                activities ? 
                
                (activities.sort(function(a,b){return new Date(a.startDate) - new Date(b.startDate);})
                .map(activity => {
                    return(
                        
                        <div key={activity.id} className="container act__grey__container my-1">
                            <div className="row align-items-center ">
                                <div className="col text-left"><h3>{activity.title}</h3></div>
                                <div className="col text-left">{ <h6><b>Profesional:</b> { activity.organizer.firstname} { activity.organizer.lastname},{ activity.organizer.occupation} </h6> }</div>
                                <div className="col text-left">{<h6><b>Fecha:</b> {activity.startDate.split('T',1)} Hora: {activity.startHour} a {activity.finishHour}</h6>}</div>
                            </div>
                        </div>
                    )
                })) 
                : "loading..."
            }
        </div>
    );
};

export default Activities;