import React from 'react'
import './Header.scss'
import { AiOutlineSearch } from 'react-icons/ai'
import user from '../../../assets/images/site.png'
import 'bootstrap/dist/css/bootstrap.min.css';

export const Header = () => {
    return (
        <div>
         <header className="header">
            <nav className="navbar navbar-expand-lg navbar-dark bgcolornav mb-4">
                <a className="navbar-brand float-left pl-5" href="#"><img src={user} alt="user" className="imgsize" /> <span className="text-white"><b>JGN</b></span></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="navbar-nav form-inline my-2 my-lg-0  formpading">
                    <input className="form-control mr-sm-2 d-lg-block d-md-none" type="search" placeholder=" &nbsp; &nbsp; &nbsp; Search" aria-label="Search"/>
                    <AiOutlineSearch className="serchiconpositon"/>
                    </form>
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Marketplace <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Stores</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">My Collection</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link  active" href="#">Create</a>
                    </li>
                    </ul>
                    
                    <ul className="navbar-nav ml-auto" id="yellolink">
                    <div className="pr-3 mt-2">
                        <img src="..." alt="..." className="img-thumbnail imgcircle"/>
                    </div>
                    <form className="navbar-nav form-inline my-2">
                       <input className="form-control mr-sm-2 blacksearch" type="text" placeholder="abcdxyz" aria-label="Search"/>
                    </form>
                    <li className="nav-item active">
                        <a className="nav-link" href="#">EN</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">XY</a>
                    </li>
                    </ul>
                    
                </div>
                </nav>
            </header>
        </div>
    )
}
