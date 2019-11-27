import React from 'react'
import { getApartments } from '../api' 
import { Card, Button } from 'react-bootstrap'
  
class Apartments extends React.Component {
    constructor(props) {
        super(props)    
        this.state = {
            apartments: [],
            errors: null
        }
    }

    componentDidMount = () => {
        this.loadApartments()
    }

    loadApartments = () => {
        getApartments()
            .then(apartments => {
                if (apartments.error) {
                    this.setState({errors: apartments.error})
                }
                this.setState({apartments})
            })
    }

    
    render() {
        const { apartments, errors} = this.state

        return(
            <div>
                <h2>List of Apartments</h2>

                {errors && 
                    <div>
                        <h3>There seems to be a problem</h3>
                        <ul>
                            {errors.map(error => (<li>error</li>))}
                        </ul>
                    </div>
                }

                {apartments.map((apartment, index) => {
                    return (
                        <div key={index}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="holder.js/100px180" alt="some photo" />
                                <Card.Body>
                                    <Card.Title>Apartment {apartment.id}</Card.Title>
                                    <Card.Text>
                                        {apartment.street}
                                    </Card.Text>
                                <Button variant="primary">Details</Button>
                                {apartment.user_id == this.props.currentUser &&
                                <div>
                                   <Button variant="primary">Edit</Button>
                                    <Button variant="primary">Delete</Button> 
                                </div>
                                }
                                </Card.Body>
                            </Card>
                        </div>
                    )
                })}


            </div>
        )
    }
}

export default Apartments