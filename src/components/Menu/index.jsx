import React from 'react';
import { Link } from 'react-router-dom'
class Menu extends React.Component {
    render() {
        return <div>
            <Link to="/">All todo List</Link>&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/finished">Finished</Link>
        </div>
    }
}

export default Menu;