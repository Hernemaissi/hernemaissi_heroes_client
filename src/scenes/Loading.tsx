import * as React from 'react';

class Loading extends React.Component<{}, {}> {
    constructor(props: {}) {
        super(props);
    }

    render() {
        return (
            <div> Connecting... </div>
        );
    }
}

export default Loading;