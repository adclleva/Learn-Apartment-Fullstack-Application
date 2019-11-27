import React from 'react'

class Apartments extends React.Component {
    constructor(props) {
        super(props)    
        this.state = {
            apartments: []
        }
    }
    render() {
        return(
            <div>
                <h1>Apartments</h1>
            </div>
        )
    }
}

export default Apartments