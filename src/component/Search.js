import React from 'react'
import "../style/home.css"
import Card from './Card'
function Search(props) {
    let result = props.data.filter(data => data.name.indexOf(props.search) > -1);
    console.log(result)
    return (
        <div>
            <div className="horizontal">
                {result ? result.map((data) => <Card data={data} status={props.status} />) : <div className="title">No result found</div>}
            </div>
        </div>
    )
}

export default Search
