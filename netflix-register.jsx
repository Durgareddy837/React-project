import'./netflix-register.css';

export function NetflixRegister(){
    return(
        <div className=" w-40 d-flex justify-content-center">
            <div className="w-100 justify-content-center d-flex ">
                <div className="input-group input-group-lg">
                    <input type ="email" placeholder="Your E-mail address" className="form-control bg-dark text-white"/>
                    <button className="btn btn-danger ms-3">
                        Get Started <span className="bi bi-chevron-right"></span>
                    </button>
                </div>
            </div>
        </div>
    )
}