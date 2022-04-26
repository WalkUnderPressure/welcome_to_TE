import { Component, memo } from 'react';

// functional component
const FirstComponent = memo(({ name }) => (
    <div>my name is {name}</div>
));

// class component
class SecondComponent extends Component {
    shouldComponentUpdate(nextProps) {
        return this.props.name !== nextProps.name;
    }

    render() {
        return (
            <div>my name is {this.props.name}</div>
        )
    }
}
