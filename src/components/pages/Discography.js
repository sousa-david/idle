import { useState, useEffect } from "react";

import Recording from "./Recording";

function Discography() {

    const [recordings, setRecordings] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/recordings', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setRecordings(data)
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <div className="container">
            <h1 className="display-5 mt-5">Discografia</h1>
            <div className="d-flex flex-wrap">
                {recordings.map((recording) => (
                    <Recording
                    name={recording.name}
                    type={recording.type}
                    release={recording.release}
                    tracklist={recording.tracklist}
                    key={recording.id}
                    />
                    )
                )}
            </div>
        </div>
    )

}

export default Discography