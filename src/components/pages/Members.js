import { useState, useEffect } from "react";

import MemberCard from "./MemberCard";

function Members() {

    const [members, setMembers] = useState([]);

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
                {members.filter(member => member.status === 'current').map((member) => (
                    <MemberCard
                    id={member.id}
                    name={member.name}
                    description={member.description}
                    key={member.id}
                    />
                ))}
            </div>

            <h4>Ex-membro</h4>
            {members.filter(member => member.status === 'former').map((member) => (
                <MemberCard 
                id={member.id}
                name={member.name}
                description={member.description}
                key={member.id}
                />
            ))}
        </div>
    )
}

export default Members