import React from 'react';

import Toggle from 'react-styled-toggle';


const SwitcherTheme = ({switchTheme}) => {


    return (

        <div className="mr-6">
            <Toggle onChange={switchTheme} backgroundColorChecked={'#652525'} backgroundColorUnchecked={'#910606'} />
        </div>

    );
};

export {SwitcherTheme};