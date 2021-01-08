import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Data } from './Data'
import '../style/card.css'
import '../style/candidate.css'
import '../style/home.css'
import '../style/search.css'
import { CandidateStatus } from "../utils/CandidateStatus"
import { useHistory } from 'react-router-dom'
function Candidate() {
    const { id } = useParams()
    const [data, setData] = useState();
    const history = useHistory()
    useEffect(() => {
        setData(Data.filter(data => data.id === id))
    }, [])

    function select() {
        CandidateStatus.select(id)
        console.log(CandidateStatus.getStatus(id))
        history.push('/')
    }

    function reject() {
        CandidateStatus.reject(id)
        console.log(CandidateStatus.getStatus(id))
        history.push('/')

    }
    return (
        <div className="center-align">
            {data && <div className="card" id={id}>
                <div className="card-iamge">
                    <img className="card-image" src={data[0].Image} alt="Avatar" />
                </div>
                <div className="container-text">{data[0].name}</div>
            </div>}
            <div>
                <button className="select" onClick={() => select()}>Selected</button>
                <button className="reject" onClick={() => reject()}>Rejected</button>
            </div>
        </div>
    )
}

export default Candidate
