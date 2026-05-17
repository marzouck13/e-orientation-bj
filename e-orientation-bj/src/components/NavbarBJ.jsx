import 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav} from 'react-bootstrap';

const NavbarBJ = () => {
return (
<Navbar expand="lg" className="navbar-custom py-1 sticky-top shadow-sm">
<Container fluid className="px-lg-5 d-flex align-items-center justify-content-between">
<Navbar.Brand href="/" className="m-0 p-0 flex-shrink-0">
<img
src="/logoS.png" 
className="logo-navbar"
alt="E-Orientation BJ Logo"
style={{ maxHeight: '90px', width: 'auto' }}
/>
</Navbar.Brand>
<Navbar.Toggle aria-controls="navbar-nav" className="border-0 shadow-none p-0 custom-toggler">
<div className="hamburger-icon">
<div className="bar1"></div>
<div className="bar2"></div>
<div className="bar3"></div>
</div>
</Navbar.Toggle>
<Navbar.Collapse id="navbar-nav" className="justify-content-end">
<Nav className="ms-auto align-items-center d-flex flex-column flex-lg-row flex-nowrap-lg">
<Link to="/simulateur" className="nav-link-custom w-100 text-center text-lg-start text-decoration-none shadow-none" style={{ background: 'none', border: 'none' }}>
<span className="nav-text-adaptive fw-bold">Accéder au simulateur</span>
</Link>
<a href="https://eresultats.bj" className="nav-link-custom text-decoration-none w-100 text-center text-lg-start" target="_blank" rel="noreferrer">
<span className="nav-text-adaptive">eRésultats</span>
</a>
<a href="https://enseignementsuperieur.gouv.bj" className="nav-link-custom text-decoration-none w-100 text-center text-lg-start" target="_blank" rel="noreferrer">
<span className="nav-text-adaptive">Ministère</span>
</a>
<a href="https://bourses.enseignementsuperieur.gouv.bj/" className="nav-link-custom text-decoration-none w-100 text-center text-lg-start" target="_blank" rel="noreferrer">
<span className="nav-text-adaptive">Bourses extérieurs</span>
</a>
<div className="ms-lg-2 mt-2 mt-lg-0 w-100 w-lg-auto">
<a 
href="https://apresmonbac.bj" 
className="btn-espace d-block fw-bold text-decoration-none shadow-sm" 
style={{ whiteSpace: 'nowrap' }}
>
Postuler sur "apresmonbac.bj"
</a>
</div>
</Nav>
</Navbar.Collapse>
</Container>
</Navbar>
);
};

export default NavbarBJ;