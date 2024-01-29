import React from 'react';
import Temperature from '../components/Temperature';

const IndexPage = () => {

    return (
        <div>
            <Temperature minTemperature={0} maxTemperature={30} targetTemperature={45} />
        </div>
    );
};

export default IndexPage;
