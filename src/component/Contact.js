import React, {Component} from 'react';
import RandomColor from '../hoc/RandomColor';

class Contact extends Component {
    render() {
        return (
            <div className="Contact">
                <h3>Contact</h3>
                <p>This is Contact Page.</p>
            </div>   
        )
    }
}

export default RandomColor(Contact);