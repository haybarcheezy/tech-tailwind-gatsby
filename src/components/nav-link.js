import { Link } from 'gatsby';
import React from 'react';

const activeStyles = {
    color: '#1c64f2'
}

const NavLink = ({ children, to }) => (
    <Link to={to} className="inline-block px-2 py-2 text-xl font-medium text-gray-200 no-underline rounded hover:bg-gray-200 md:text-base md:text-gray-900 hover:text-blue-500 md:mx-2" activeStyle={activeStyles}>
            {children}
    </Link>
)


export default NavLink;