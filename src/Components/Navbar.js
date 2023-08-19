import React from 'react'

function Navbar(){
    return(
        <header>
            <nav>
                <div  className='logo'>ART</div>
                <div>
                 <ul>
                   <a href="#"><li>Home</li></a> 
                    <a href="#"><li>About Us</li></a>
                    <a href="#"><li>Pages</li></a>
                    <a href="#"><li>Services</li></a>
                   <a href="#"> <li>Contact Us</li></a>
                 </ul>
                </div>
                
            </nav>

        </header>
    )
}
export default Navbar;