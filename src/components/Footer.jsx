import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="bg-light text-center text-lg-start">

            <div className="text-center p-3" >
                &copy; 2020 Copyright:
                <Link className="text-dark" > Sk Resturant</Link>
            </div>

        </footer>
    )
}

export default Footer