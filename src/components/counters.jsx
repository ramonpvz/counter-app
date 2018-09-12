import React, { Component } from 'react'; //imrc
import Counter from './counter'

//cc
class Counters extends Component {

    render() { 
        const{onReset, counters, onDelete, onIncrement} = this.props;
        return (<div>
            <button 
            onClick={onReset}
            className="btn-primary btn-sm m-2">Reset</button>
           { counters.map(counter => 
                <Counter key={counter.id} onIncrement={onIncrement} onDelete={onDelete} counter={counter}>
                    <h4>Counter #{counter.id}</h4>
                </Counter>)
            }
        </div>);
    }
}

export default Counters;
