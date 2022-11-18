import Man from '../img/man.png'
import Women from '../img/women.png'

export default function Main(){
    const normal_text = {
        fontFamily: "'Courier New', Courier, monospace"
    }
    return(
        <div className="row mt-5 text-center d-flex justify-content-md-center justify-content-around">
            <a className="col-md-3 col-5 p-0 men-women" href='men'>
                <img src={Man} alt="" className='img-fluid rounded-3 '/>
                <div class="middle">
                    <div class="text">Explore</div>
                </div>
            </a>
            
            <div className="col-6 text-light flex-column align-items-center d-none d-md-flex justify-content-center">
                <span className="text-uppercase lh-base p-2 fs-1 fs-md-2">
                    <span>Business Clothing</span><br/>
                    <span>From </span><br />
                    <span>Top</span><br />
                    <span>Designers</span>
                </span>
                <div class="input-group mb-3">
                    <input style={normal_text} type="text" class="form-control bg-dark text-light" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" required/>
                    <button class="btn btn-outline-light" type="button" id="button-addon2">Button</button>
                </div>
            </div>
            
            <a className="col-md-3 col-5 p-0 men-women" href='women'>
                <img src={Women} alt="" className='img-fluid rounded-3 w-100'/>
                <div class="middle">
                    <div class="text">John Doe</div>
                </div>
            </a>
            <div class="input-group mt-4 d-flex justify-content-center w-xs-75 w-100 d-md-none">
                <input style={normal_text} type="text" class="form-control bg-dark text-light fs-6" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                <button class="btn btn-outline-light fs-6" type="button" id="button-addon2">Button</button>
            </div>
        </div>
    )
}