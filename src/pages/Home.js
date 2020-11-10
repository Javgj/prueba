import React from 'react'

import List from '../components/List'

class Home extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            info: []
        }

    }

    componentDidMount() {
        fetch('https://rickandmortyapi.com/api/character').then(response => {
            response.json().then(res => {
                this.setState({
                    info: res.results // X
                })

                console.log(this.state.info)
            })
        })
    }

    render() {
        return (
            <div>
                <List info={ this.state.info }></List>
            </div>
        )
    }
}

export default Home