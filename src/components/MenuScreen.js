import React from "react";

class MenuScreen extends React.Component {

    componentDidMount() {
        this.props.pickMenu(this.props.menu_pos_change)
    }

    render() {
        let menuItem = this.props.menuItem
        let menuList = ["Cover Flow", "Music", "Games", "Settings"]
        let menuElement = []

        for (let m = 0; m < menuList.length; m++) {
            menuElement.push(
                m === menuItem ? (
                    <li className="list-items active" key={"m" + menuList[m]}>
                        <span>{menuList[m]}</span>
                    </li>
                ) : (
                    <li className="list-items" key={"m" + menuList[m]}>
                        <span>{menuList[m]}</span>
                    </li>
                )
            )
        }

        return (
            <>
                <ul id="menuList" className="list">
                    {menuElement}
                </ul>
            </>
        )
    }

}

export default MenuScreen