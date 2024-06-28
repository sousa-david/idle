import Spinner from "react-bootstrap/Spinner";

function MemberBio({name}) {

    function biography(name) {

        if(name === "soyeon") {
            return <>
            <div className="lh-sm">
                <p><strong>Nome completo:</strong> Jeon Soyeon</p>
                <p><strong>Data de nascimento:</strong> 26/08/1998</p>
                <p><strong>Local de nascimento:</strong> Seul, Coreia do Sul</p>
            </div>
            </>
        }
        else if(name === "miyeon") {
            return <>
                <p><strong>Nome completo:</strong> Cho Miyeon</p>
                <p><strong>Data de nascimento:</strong> 31/01/1997</p>
                <p><strong>Local de nascimento:</strong> Incheon, Coreia do Sul</p>
            </>
        }
        else if(name === "minnie") {
            return <>
                <p><strong>Nome completo:</strong> Nicha Yontararak</p>
                <p><strong>Data de nascimento:</strong> 23/10/1997</p>
                <p><strong>Local de nascimento:</strong> Bangkok, Tailândia</p>
            </>
        }
        else if(name === "yuqi") {
            return <>
                <p><strong>Nome completo:</strong> Song Yuqi</p>
                <p><strong>Data de nascimento:</strong> 23/09/1999</p>
                <p><strong>Local de nascimento:</strong> Beijing, China</p>
            </>
        }
        else if(name === "shuhua") {
            return <>
                <p><strong>Nome completo:</strong> Yeh Shuhua</p>
                <p><strong>Data de nascimento:</strong> 06/01/2000</p>
                <p><strong>Local de nascimento:</strong> Taoyuan, Taiwan</p>
            </>
        }
        else if(name === "soojin") {
            return <>
                <p><strong>Nome completo:</strong> Seo Soojin</p>
                <p><strong>Data de nascimento:</strong> 09/03/1998</p>
                <p><strong>Local de nascimento:</strong> Bongdam-eup, Hwaseong-si, Coreia do Sul</p>
            </>
        }
        else return <Spinner animation="border" role="status"></Spinner>
    }

    return (
        <div>
            {biography(name)}
        </div>
    )
}

export default MemberBio