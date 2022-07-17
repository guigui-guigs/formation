import React, {Component} from "react";
import CardList from "./CardList";
import SearcBox from './SearchBox';
import Scroll from './Scroll';
import ErrorBoundary from "./ErrorBoundary";

class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({robots: users}));
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }

    render(){
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        if (robots.length === 0){
            return <h1>Loading...</h1>
        } else {
            return (
                <div className='tc'>
                    <h1>Robotfriends</h1>
                    <SearcBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots ={filteredRobots} />
                        </ErrorBoundary>
                    </Scroll>
                </div>
            )
        }
    }
}

export default App