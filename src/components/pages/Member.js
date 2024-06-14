import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { SocialIcon } from "react-social-icons";

function Member() {

    const {id} = useParams();
    const [member, setMember] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3001/members/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => response.json())
        .then(data => {
            setMember(data)
        })
        .catch(err => console.log(err))
    }, [id])

    return (
        <div className="container">
            <h1 className="text-capitalize display-6 mt-5">{member.name}</h1>
            <p>{member.bio}</p>
            <div className="d-flex">
                <SocialIcon network="instagram" bgColor="#800080" style={{height:25, width:25}} />&nbsp;
                <p>{member.instagram}</p>
            </div>
        </div>
    )
}

export default Member