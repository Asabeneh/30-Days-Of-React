import React from "react";

class Header extends React.Component{
    render(){
        // destruct data prop passed from App component
        const {
            welcome,
            title,
            subtitle,
            author: {firstName,lastName},
            date
        } = this.props.data;
        return(
            <header>
                <div className="header-wrapper">
                    <h1>{welcome}</h1>
                    <h2>{title}</h2>
                    <h3>{subtitle}</h3>
                    <p>{firstName} {lastName}</p>
                    <small>{date}</small>
                </div>
            </header>
        )
    }
}

export default Header;