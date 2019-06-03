import React from 'react';

const RandomColor = (WrappedComponent) => {
    const ColorArr = ['primary', 'success', 'secondary', 'danger', 'warning', 'info', 'dark'];
    let randomKey = Math.floor(Math.random() * 6);
    let randomColor = 'text-' + ColorArr[randomKey];

    return (props) => {
        return(
            <div className={randomColor}>
                <WrappedComponent {...props} />
            </div>
        )
    }
}

export default RandomColor;