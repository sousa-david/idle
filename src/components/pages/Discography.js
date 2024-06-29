import { useState, useEffect } from "react";

import Recording from "./Recording";

import cover1 from "../../img/i_am.jpg"
import cover2 from "../../img/i_made.jpg";
import cover3 from "../../img/latata.jpg";
import cover4 from "../../img/i_trust.jpg";
import cover5 from "../../img/dumdi_dumdi.jpg";
import cover6 from "../../img/oh_my_god.jpg";
import cover7 from "../../img/i_burn.jpg";
import cover8 from "../../img/i_never_die.jpg";
import cover9 from "../../img/i_love.jpg";
import cover10 from "../../img/i_feel.jpg";
import cover11 from "../../img/heat.jpg";
import cover12 from "../../img/two.jpg";

function Discography() {

    const [recordings, setRecordings] = useState([]);

    const covers = [cover1, cover2, cover3, cover4, cover5, cover6, cover7, cover8, cover9, cover10, cover11, cover12];

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
        <div className="container mb-3">
            <h1 className="display-5 mt-5">Discografia</h1>
            <div className="d-flex flex-wrap">
                {recordings.map((recording, index) => (
                    <Recording
                    name={recording.name}
                    type={recording.type}
                    cover={covers[index]}
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