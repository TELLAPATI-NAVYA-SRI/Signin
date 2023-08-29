import React from "react";
const textStyle={textDecoration:"none",
    color :"#B8860B"};
function Header(){
    return(
    <div class="container-fluid">
        <header>
       
        <a href="./index.js" style={textStyle}>
          <h1 >Home</h1>
        </a>
        
        </header>
    </div>
    );
}

export default Header;