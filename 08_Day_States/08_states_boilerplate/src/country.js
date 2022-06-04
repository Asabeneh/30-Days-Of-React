import React from "react";
import countriesData from "./data/countries";

const styles = {
    wrapper : {
        width : 500,
        height : 500,
        backgroundColor: 'red',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    buttonStyle : {
        backgroundColor: 'rebeccapurple',
        padding: '1rem',
        color: 'white',
        borderRadius: 12,
        border: 'none',
        cursor:'pointer'
    }
}



export class Country extends React.Component {
    state = {
        count: 0,
        styles: {
            backgroundColor: 'black',
            color: 'white',
        },
        random: 0
    }

    changeBackground = () => {
        let styles = {...this.state.styles};

        if( this.state.styles.backgroundColor === 'black' && this.state.styles.color === 'white' ){
            styles.backgroundColor = 'white'
            styles.color = 'black'
            this.setState({ styles });
        } else {
            styles.backgroundColor = 'black'
            styles.color = 'white'
            this.setState({ styles });
        }
    }

    changeCountry = () => {
        const randomNumber = Math.floor(Math.random() * countriesData.length);
        this.setState({ random: randomNumber})
    }

    render() {
        return(
        <div
            style={{
                backgroundColor:this.state.styles.backgroundColor,
                color:this.state.styles.color,
                display:'flex',
                alignItems:'center',
                flexDirection: 'column'
            }}>
                leleley
                <button onClick={ () => this.changeBackground() }>farmalolo</button>
                <div style={ styles.wrapper }>
                    {
                        countriesData.map( (country, index ) => {
                            if( index === this.state.random ) {
                                return (
                                    <div>
                                        <img src={ country.flag } alt={'seks'} width='100'/>
                                        <div>
                                            leblebleb : <span>{country.capital}</span>
                                        </div>
                                    </div>
                                );
                            }
                        })
                    }
                    <button style={ styles.buttonStyle } onClick={ () => this.changeCountry() } >Choose a country</button>
                </div>
            </div>
        )
    }
}