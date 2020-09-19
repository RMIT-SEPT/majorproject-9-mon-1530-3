import React, { Component } from 'react'

class PopupMenu extends Component {


    render() {
        return (
            <div id="menuContent" className="popupMenu">
                <a href="/cancel">cancel booking.</a><br></br><br></br>
                <a href="/">link2</a><br></br><br></br>
                <a href="/">link3</a><br></br><br></br>
                <a href="/">link4</a><br></br><br></br>
                <a href="/">link5</a><br></br><br></br>
                <a href="/">link6</a><br></br>
            </div>
        )
    }
}

export default PopupMenu;