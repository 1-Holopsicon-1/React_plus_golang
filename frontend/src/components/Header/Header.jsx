import React from "react";
import "./Header.sass";

const Header = () => (
    <div className="header">
        <h2>Your id - {sessionStorage.getItem("uid")}</h2>
    </div>
)

export default Header;