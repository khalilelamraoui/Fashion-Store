export default function Header(){
    return(
        <div>
            <div className="row">
                <div className="col-1">
                    <button class="btn fs-1" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"><i class="fa-solid fa-bars"></i></button>

                    <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Backdrop with scrolling</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <p>Try scrolling the rest of the page to see this option in action.</p>
                        </div>
                    </div>
                </div>
                <div className="col-3"></div>
                <div className="col-4">
                    <h1><a href="index.html">Main website</a></h1>
                </div>
                <div className="col-2"></div>
                <div className="col-2 fs-1">
                    <a href="#"><i class="fa-regular fa-heart"></i></a>
                    <a href="#"><i class="fa-regular fa-user"></i></a>
                    <a href="#"></a>
                    <i class="fa-regular fa-cart-arrow-down"></i>
                </div>
            </div>
            
        </div>
    )
}