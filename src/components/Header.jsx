export default function Header(){
    const gap = {
        gap : "5px"
    }
    const normal_text = {
        fontFamily: "'Courier New', Courier, monospace"
    }
    return(
        <div>
            <div className="row p-2 align-items-center bg-primary-2 rounded-3 sticky">
                {/*Burger menu*/}
                <div className="col-2">
                    <button class="btn fs-3 text-light" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"><i class="fa-solid fa-bars"></i></button>

                    <div class="offcanvas offcanvas-bottom" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Backdrop with scrolling</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <p>Try scrolling the rest of the page to see this option in action.</p>
                        </div>
                    </div>
                </div>
                <div className="col-2"></div>
                {/*Main Page*/}
                <div className="col-4 text-center align-self-center">
                    <a href="index.html" className="text-light  fs-6 d-flex justify-content-center align-items-center" style={gap}>
                        <span className="fs-1">•</span> 
                        <span> Bold Feather Design</span>
                    </a>
                </div>
                <div className="col-2"></div>
                {/*Icons right side*/}
                <div className="col-2 fs-5 fs-sm-1 d-flex flex-column flex-sm-row justify-content-evenly text-white icons-header gap-1 ">
                    <a href="sdg" className="text-light icon"><i class="fa-regular fa-heart"></i></a>
                    <a href="gfs" className="text-light icon"><i class="fa-regular fa-user"></i></a>
                    <a href="dgs" className="text-light d-flex bag">
                        <i class="fa fa-bag-shopping align-self-center icon"></i>
                        <span className="align-items-start fs-6 notif fw-bold" id="products_num" style={normal_text}>2</span>
                    </a>
                </div>
            </div>
            
        </div>
    )
}