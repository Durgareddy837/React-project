import'./netflix-header.css';

export function NetflixHeader(){
    return(
        <header className="d-flex mt-4 justify-content-around">
            <div>
                <span className="brand">Netflix</span>
            </div>
            <div>
                <div className="input-group">
                    <span className="bi bi-globe input-group-text"> </span>
                        <select className="form-select">
                        <option>Language</option>
                        </select>
                    <button className="btn btn-danger ms-2">Signin</button>
                </div>
            </div>
        </header>
    )
}