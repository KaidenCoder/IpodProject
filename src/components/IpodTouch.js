import React from "react";
import ZingTouch from 'zingtouch'

class IpodTouch extends React.Component {

    componentDidMount() {
        const exitMenu = this.props.exitMenu
        const backBtn = document.getElementById("menu-btn")
        const activeMenuBtn = ZingTouch.Region(backBtn)

        activeMenuBtn.bind(backBtn, "tap", function (event) {
            return exitMenu()
        })
    }

    render() {

        const screen = this.props.screen
        console.log("this.props", this.props)
        return (
            <>
                <section id="control" style={stylesheet.controlSection}>
                    <div id="wheel" style={stylesheet.container}>
                        <div id="menu-btn" style={stylesheet.menuBtn}>
                            Menu
                        </div>
                        <div id="prev-btn" style={stylesheet.backArrow}>
                            <i className="fas fa-backward"></i>
                        </div>
                        <div id="next-btn" style={stylesheet.forwardArrow}>
                            <i className="fas fa-forward"></i>
                        </div>
                        <div id="play-btn" style={stylesheet.play_pause}>
                            <i className="fas fa-play"></i> <i className="fas fa-pause"></i>
                        </div>
                    </div>
                    <div id="okay-btn" style={stylesheet.selectBtn}
                        onClick={() => {
                            if (screen >= 0) {
                                return this.props.enterMenu();
                            }

                        }}>

                    </div>
                </section>
            </>
        )
    }

}

let stylesheet = {
    container: {
        margin: "10px auto",
        overflow: "hidden",
        height: 240,
        width: 230,
        background: "white",
        alignItems: "center",
        borderRadius: "100%",
        color: "#9E9E9E",
        boxShadow: "0 2px 5px 0 rgba(0, 0, 0, 0.2)"
    }, menuBtn: {
        display: "block",
        position: "absolute",
        top: 282,
        left: 125,
        fontSize: 24,
        color: "gray",
        fontWeight: "bolder"
    },
    backArrow: {
        width: 22,
        position: "absolute",
        top: 360,
        right: 215,
        fontSize: 22
    },
    forwardArrow: {
        width: 22,
        position: "absolute",
        top: 360,
        left: 215,
        fontSize: 22
    },
    play_pause: {
        fontSize: 18,
        width: 28,
        position: "absolute",
        top: 428,
        left: 145
    },
    selectBtn: {
        borderRadius: "100%",
        background: "#f0f0f0",
        width: 100,
        height: 100,
        position: "absolute",
        boxShadow: "inset 0 -2px 14px -1px rgba(0, 0, 0, 0.3)"
    },
    controlSection: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
}

export default IpodTouch