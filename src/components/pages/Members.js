import { useState, useEffect } from "react";

import MemberCard from "./MemberCard";

import image1 from "../../img/jeon_soyeon.jpg";
import image2 from "../../img/cho_miyeon.jpg";
import image3 from "../../img/kim_minnie.jpg";
import image4 from "../../img/song_yuqi.jpg";
import image5 from "../../img/yeh_shuhua.jpg";
import image6 from "../../img/seo_soojin.jpg";

function Members() {

    const [members, setMembers] = useState([]);

    const photos = [image1, image2, image3, image4, image5, image6];

    useEffect(() => {
        fetch('http://localhost:3001/members', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => response.json())
        .then(data => {
            setMembers(data)
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <div className="container mt-5">
            <div className="d-flex flex-wrap">
                {members.map((member, index) => (
                    <MemberCard
                    id={member.id}
                    name={member.name}
                    description={member.description}
                    image={photos[index]}
                    status={member.status}
                    key={member.id}
                    />
                ))}
            </div>
        </div>
    )
}

export default Members