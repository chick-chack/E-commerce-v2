import React from 'react';

import MagicZoom from 'react-magic-zoom';

 class MagicTest extends React.Component {
    render() {
        return (
            <MagicZoom>
                <span>
                    <img src={'http://lorempixel.com/520/400/sports/1'} />
                </span>
            </MagicZoom>
    );
    }
}

export default MagicTest;