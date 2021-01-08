import React from 'react'
import { useHistory } from 'react-router-dom'
import '../style/card.css'
function Card(props) {
    const history = useHistory()
    // console.log(props.status.getStatus(props.data.id))
    return (
        <div className="card" id={props.data.id} onClick={() => history.push(`/candidate_info/${props.data.id}`)}>
            <div className="card-iamge">
                <img className="card-image" src={props.data.Image} alt="Avatar" />
            </div>
            <div className="container-text">{props.data.name}</div>
        </div>
    )
}

export default Card
