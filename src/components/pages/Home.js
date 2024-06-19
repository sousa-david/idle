import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import gidle from "../../img/gidle.jpg";

function Home() {
    return (
        <div className="container">
            <h1 className="display-5 mt-5">(G)I-DLE</h1>
            <Tabs defaultActiveKey="intro" id="tabs" className="mb-3" justify>
                <Tab eventKey="intro" title="Introdução">
                    <img src={gidle} className="img-fluid" alt="Grupo" />
                    <p className="mt-4">
                        <span className="fw-bold">(G)I-DLE</span> é um grupo feminino de K-pop formado pela CUBE Entertainment em 2018.
                        Composto originalmente por seis membros &ndash; Soyeon, Miyeon, Minnie, Soojin, Yuqi e Shuhua &ndash; 
                        o grupo rapidamente se destacou na indústria musical sul-coreana e internacional.
                    </p>
                </Tab>
                <Tab eventKey="name" title="Nome">
                    <p className="mt-4">
                        O nome do grupo tem um significado interessante. A letra "G" significa "garota" 
                        em inglês, enquanto "I-DLE" é derivado da palavra coreana "아이들" (aideul), que significa "crianças".
                        Além disso, "I" representa a individualidade das membros do grupo, e "DLE" é a forma plural, 
                        simbolizando a união dessas individualidades.
                    </p>
                </Tab>
                <Tab eventKey="fandom" title="Fandom">
                    <p className="mt-4">
                        <span class="fst-italic">Neverland</span> é o nome oficial do fandom, ou seja, a comunidade 
                        de fãs dedicados ao grupo. O termo é inspirado na terra mágica da história de Peter Pan, 
                        simbolizando um lugar onde os fãs e as integrantes do (G)I-DLE podem escapar da realidade 
                        e viver sonhos e aventuras juntos.
                    </p>
                </Tab>
            </Tabs>
        </div>
    )
}

export default Home