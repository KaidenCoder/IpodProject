import React from "react";
import MenuScreen from "./MenuScreen";
import CoverFlow from "./subcomponents/CoverFlow";
import Games from "./subcomponents/Games";
import Music from "./subcomponents/Music";
import Settings from "./subcomponents/Settings";

const VisualScreen = (props) => {
    console.log(props)
    let screen = props.screen
    let displayMenu = props.menuScreen
    let displayScreen
    if (screen === 0) {
        displayScreen = (
            <MenuScreen
                pickMenu={props.pickMenu}
                menu_pos_change={props.menu_pos_change}
                screen={props.screen}
                menuItem={props.menuItem}
            />
        )
    }
    else if (screen === 1) {

        if (displayMenu === 0) {
            displayScreen = <CoverFlow />
        } else if (displayMenu === 1) {
            displayScreen = <Music />
        } else if (displayMenu === 2) {
            displayScreen = <Games />
        } else {
            displayScreen = <Settings />
        }

    }
    return (
        <>
            <div className="screencover">
                {displayScreen}
            </div>
        </>
    )
}

export default VisualScreen