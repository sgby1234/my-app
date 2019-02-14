import React from 'react'

export class Note extends React.Component{
    render(){
        return (
            <div className='note'>
                <h4>{this.props.text}</h4>
                {/*<button className="btnStyle">x</button>}*/}
            </div>
            
        );
    }
};

