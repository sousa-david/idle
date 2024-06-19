import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { SocialIcon } from "react-social-icons";

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
        <div className="container">
            <h1 className="display-6 mt-5">{member.name}</h1>
            {image ? (<img src={image} alt={member.name} className="img-fluid" />) : <p>Imagem não encontrada</p>}
            <p>{member.bio}</p>
            <div className="d-flex">
                <SocialIcon network="instagram" bgColor="#5e068c" style={{height:25, width:25}} />&nbsp;
                <p>{member.instagram}</p>
            </div>
        </div>
    )
}

export default Member