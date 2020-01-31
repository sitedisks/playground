import React, { useContext } from 'react';
import { ThemeContext } from '../contents/ThemeContext';

/*
class ThemeToggle extends React.Component {
    static contextType = ThemeContext;

    render() {
        const { toggleTheme } = this.context;

        return (
            <button onClick={toggleTheme}>Toggle the Themme</button>
        )
    }
}
*/ 

const ThemeToggle = () => {
    const { toggleTheme } = useContext(ThemeContext);
    return (
        <button onClick={toggleTheme}>Toggle the Themme</button>
    )
}

export default ThemeToggle;