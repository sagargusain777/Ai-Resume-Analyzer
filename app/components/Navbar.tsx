import {Link} from "react-router";
const Navbar:() => Element = () =>{
    return (
        < nav className="navbar">
            <Link to = "/">
                <p className = "text-2xl font-bold text-gradient">HIREWISE</p>
            </Link>
            <Link to ="/upload" className="primary-button w-fit">
                Upload Resume Hire Faster Drag me Faster


            </Link>


        </nav>
    )
}

export default Navbar;