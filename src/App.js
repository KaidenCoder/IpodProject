
import React from 'react';
import './App.css';
import IpodTouch from './components/IpodTouch';
import VisualScreen from './components/VisualScreen'
import ZingTouch from 'zingtouch';

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      visualscreen: 0,
      menu: 0,
      menuItem: 0
    }

    this.angle = 0;

  }

  changeMenu = (item) => {
    if (this.state.visualscreen < 1 ||
      (this.state.visualscreen === 1 && this.state.menu === 3)) {
      this.setState({
        menuItem: item
      })
    }
  }

  inMenu = () => {
    if (this.state.visualscreen < 1) {
      this.setState({
        visualscreen: this.state.visualscreen + 1
      })
    }

    if (this.state.visualscreen === 0) {
      this.setState({
        menu: this.state.menuItem,
        menuItem: 0
      })
    }
  }

  backMenu = () => {
    if (this.state.visualscreen > 0) {
      this.setState({
        visualscreen: this.state.visualscreen - 1,
        menuItem: 0
      })
    }
    if (this.state.visualscreen > 0 && this.state.visualscreen <= 1) {
      this.setState({
        menu: 0
      })
    }
  }

  zingtouchpos = (menu_pos_change) => {
    const containerEle = document.getElementById("wheel")
    const activeReg = ZingTouch.Region(containerEle)
    const childEle = document.getElementById("wheel")

    let list_item = document.getElementsByClassName("list-items")
    const len = list_item.length
    let i = 0
    let j = len

    activeReg.bind(childEle, "rotate", function (event) {
      if (event.detail.distanceFromOrigin === 0) {
        this.angle = event.detail.angle
      }

      if (Math.abs(this.angle - event.detail.angle) > 15) {
        this.angle = Math.abs(event.detail.angle)
        if (event.detail.distanceFromLast === 0) {
          return;
        } else if (event.detail.distanceFromOrigin > 0) {
          if (i >= list_item.length) {
            i = 0;
            menu_pos_change(i)
          }
          menu_pos_change(i)
          i++
        } else if (event.detail.distanceFromOrigin < 0) {
          if (j == 0) {
            j = len - i
            menu_pos_change(j)
          }
          menu_pos_change(j)
          j--
        }
      }
    })
  }

  render() {
    return (
      <div className="back-cover" >
        <div className="main">

          <VisualScreen
            screen={this.state.visualscreen}
            menuScreen={this.state.menu}
            pickMenu={this.zingtouchpos}
            menuItem={this.state.menuItem}
            menu_pos_change={this.changeMenu}
          />
          <IpodTouch
            screen={this.state.visualscreen}
            enterMenu={this.inMenu}
            exitMenu={this.backMenu}
          />
        </div>

      </div>
    );
  }

}

export default App;
