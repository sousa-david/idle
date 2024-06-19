import cube from "../../img/cube_logo.png";

function Footer() {
    return (
        <footer className="footer mt-auto py-3" style={{backgroundColor: "#f2f2f2"}}>
            <div className="container d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                    <div className="mb-3 me-2">
                        <img src={cube} alt="Cube Entertainment" width="40" height="40" />
                    </div>
                    <p className="text-muted small"><span className="text-uppercase">&copy; Cube Entertainment.</span> All rights reserved.</p>
                </div>
                <div className="mb-3 justify-content-end d-flex">
                    <span><a className="text-body-secondary" href="https://github.com/sousa-david">David Sousa</a></span>
                </div>
            </div>
        </footer>
    )
}

export default Footer