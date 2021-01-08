import React, { useEffect, useState } from 'react'
import { CandidateStatus } from "../utils/CandidateStatus"
import { Data } from "./Data"
import Card from "./Card"
function Select() {
    const [data, setData] = useState([])
    useEffect(() => {
        setData(Data.filter(data => CandidateStatus.getStatus(data.id) === 1))
    }, [])
    return (
        <div>
            {data.length ? data.map((item) => <Card data={item} status={CandidateStatus} />) : <div>No Selected Cendidate</div>}
        </div>
    )
}

export default Select
