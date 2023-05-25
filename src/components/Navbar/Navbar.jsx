import { Link, NavLink } from 'react-router-dom'
import { CartWidget } from '../CartWidget/CartWidget'
import './Navbar.css'
const Navbar = () =>{
    return (
        <nav className="navbar navbar-expand-lg nav">
            <div className="container-fluid">
                <NavLink to ='/' className='navbar-brand' href="#"><img className='logo' src="/laCavaLogo.png" alt="logo de la cava" /></NavLink>
                <NavLink to ='/'><h1 className='titulo'>LaCava.com</h1></NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <NavLink  aria-current="page" className={({isActive})=> isActive ? 'nav-activo':'nav-link'} to ='/categoria/vinos'>Vinos</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink  aria-current="page" className={({isActive})=> isActive ? 'nav-activo':'nav-link'} to ='/categoria/cervezas'>Ceverzas</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink  aria-current="page" className={({isActive})=> isActive ? 'nav-activo':'nav-link'} to ='/categoria/whiskies'>Whiskies</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink  aria-current="page" className={({isActive})=> isActive ? 'nav-activo':'nav-link'} to ='/categoria/espumantes'>Espumantes</NavLink>
                    </li>
                </ul>
                </div>
            </div>
           <Link to='/cart'><CartWidget/></Link>
           
        </nav>
    )
}
export default Navbar