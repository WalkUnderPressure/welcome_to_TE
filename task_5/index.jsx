import { useSelector } from 'react-redux';

// our redux state
reduxState = {
    isOnline: true,
    userData: {
        name: 'Peter',
        surname: 'Pen'
    }
}

const MainComponent = () => {
    const userData = useSelector(
        (reduxState) => reduxState.userData,
        (prevState, nextState) => (
            prevState.name === nextState.name
            && prevState.surname === nextState.surname
        ),
    ); // subscribe and get only userData object

    // ... other code
};
