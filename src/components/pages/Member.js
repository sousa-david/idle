import styles from "../layout/Button.module.css";

import { useParams, Link, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

import Button from "react-bootstrap/Button";
import Breadcrumb from "react-bootstrap/Breadcrumb";

import { FaInstagram, FaHome } from "react-icons/fa";

import MemberBio from "./MemberBio";

function Member() {

    const {id} = useParams();
    const [member, setMember] = useState([]);

    const images = {
        "soyeon": require('../../img/jeon_soyeon.jpg'),
        "miyeon": require('../../img/cho_miyeon.jpg'),
        "minnie": require('../../img/kim_minnie.jpg'),
        "yuqi": require('../../img/song_yuqi.jpg'),
        "shuhua": require('../../img/yeh_shuhua.jpg'),
        "soojin": require('../../img/seo_soojin.jpg')
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

    if(!image) {
        return <Navigate to="/404" />
    }

    return (
        <div className="container mt-5 mb-3">
            <h1 className="display-6">{member.name}</h1>
            <Breadcrumb>
                <Breadcrumb.Item><Link to="/"><FaHome /></Link></Breadcrumb.Item>
                <Breadcrumb.Item><Link to="/members">Membros</Link></Breadcrumb.Item>
                <Breadcrumb.Item active>{member.name}</Breadcrumb.Item>
            </Breadcrumb>
            <div className="d-flex">
                <img src={image} alt={member.name} className="img-fluid" />
                <div className="px-3">
                    <p><MemberBio name={member.id} /></p>
                    <a href={`https://www.instagram.com/${member.instagram}`}>
                        <Button className={styles.customButton}>
                            <div className="d-flex align-items-center fw-bold">
                                <FaInstagram />&nbsp;
                                <span className="align-middle">{member.instagram}</span>
                            </div>
                        </Button>
                    </a>
                    <div className="mt-2">
                        <Link to="/members"><Button variant="secondary">
                            <span className="fw-bold text-white">Voltar</span>
                        </Button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default Member