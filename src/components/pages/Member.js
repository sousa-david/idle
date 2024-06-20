import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import Button from "react-bootstrap/Button";

import { SocialIcon } from "react-social-icons";

import NotFound from "./NotFound";

function Member() {

    const {id} = useParams();
    const [member, setMember] = useState([]);

    const images = {
        "soyeon": require('../../img/Soyeon.jpg'),
        "miyeon": require('../../img/Miyeon.jpg'),
        "minnie": require('../../img/Minnie.jpg'),
        "yuqi": require('../../img/Yuqi.jpg'),
        "shuhua": require('../../img/Shuhua.jpg'),
        "soojin": require('../../img/Soojin.jpg')
    };
    const image = images[id];

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
        <>
        {image ? <div className="container mb-3">
            <h1 className="display-6 mt-5">{member.name}</h1>
            <img src={image} alt={member.name} className="img-fluid" />
            <p>{member.bio}</p>
            <a href={`https://www.instagram.com/${member.instagram}`}>
                <Button variant="light">
                    <div className="d-flex align-items-center fw-bold">
                        <SocialIcon network="instagram" bgColor="#5e068c" style={{height: 25, width: 25}} />&nbsp;
                        <span className="align-middle">{member.instagram}</span>
                    </div>
                </Button>
            </a>
        </div> : <NotFound />}
        </>
    )
}

export default Member