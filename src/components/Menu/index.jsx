import React from 'react';
import { Link } from 'react-router-dom'
import { Menu } from 'antd';
class TopMenu extends React.Component {
    render() {
        return <div>
                <Menu mode="horizontal">
                    <Menu.Item key="mail">
                        <Link to="/">All todo List</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to="/finished">Finished</Link>
                    </Menu.Item>
                </Menu>
        </div>
    }
}

export default TopMenu;