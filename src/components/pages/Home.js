import gidle from "../../img/gidle.jpg";

function Home() {
    return (
        <div className="container">
            <h1 className="mt-5">Início</h1>
            <img src={gidle} alt="Grupo" />
            <p>(G)I-DLE é um grupo feminino de K-pop formado pela CUBE Entertainment em 2018.</p>
        </div>
    )
}

export default Home