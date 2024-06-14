import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Card from "react-bootstrap/Card";

import { Button } from "react-bootstrap";

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
        <div className="container">
            <h1 className="display-5 mt-5">Atuais</h1>
            <div className="d-flex">
                {members.filter(member => member.status === 'current').map((member) => (
                    <Card className="mb-3 me-2" style={{width:'18rem'}}>
                        <Card.Header>
                            <Card.Title><h1 className="text-capitalize">{member.name}</h1></Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>{member.bio}</Card.Text>
                            <Link to={`/member/${member.id}`}><Button variant="primary">Ler mais</Button></Link>
                        </Card.Body>
                    </Card>
                ))}
            </div>

            <h1 className="display-5">Ex-membro</h1>
            {members.filter(member => member.status === 'former').map((member) => (
                <Card className="mb-3" style={{width:'18rem'}}>
                    <Card.Header>
                        <Card.Title><h1 className="text-capitalize">{member.name}</h1></Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>{member.bio}</Card.Text>
                        <Link to={`/member/${member.id}`}><Button variant="primary">Ler mais</Button></Link>
                    </Card.Body>
                </Card>
            ))}
        </div>
    )
}

export default Members