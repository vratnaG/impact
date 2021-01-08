import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Data } from "./Data"
import Card from "./Card"
import "../style/home.css"
import Search from "./Search"
import "../style/search.css"
import { CandidateStatus } from "../utils/CandidateStatus"
import { useHistory } from 'react-router-dom'
function Home() {
    const [data, setState] = useState(Data)
    const [search, setSearch] = useState(null)
    const [showsearch, setShowSearch] = useState(false)
    const [status, setStatus] = useState({})
    const history = useHistory()

    console.log(status)
    // const url = 'https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json'

    // useEffect(() => {
    //     axios.get(url)
    //         .then((resp) => {
    //             setState(resp.data)
    //             console.log(data)
    //         })
    //         .catch((err) => {
    //             alert(err.messages)
    //         })
    // }, [])

    function SearchName() {
        setShowSearch(true)
    }

    return (
        <div>

            {showsearch ? <div className="title"> Serach Candidate List</div> : <div className="title">Candidate List</div>}
            <div><input type="text" value={search} placeholder="search by name" onChange={(e) => setSearch(e.target.value)} /><button className="button" onClick={() => SearchName()}>Search</button></div>
            <div>
                <button className="select" onClick={() => history.push('/shortlisted')}>Selected</button>
                <button className="reject" onClick={() => history.push('/rejected')}>Rejected</button>
            </div>
            {showsearch && <div className="end"><button className="close" onClick={() => setShowSearch(false)}>close</button></div>}
            {showsearch ? <Search data={data} search={search} status={CandidateStatus} /> : <div className="horizontal">
                {data && data.map((data) => <Card data={data} status={CandidateStatus} />)}
            </div>}
        </div>
    )
}

export default Home
