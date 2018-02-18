import * as React from 'react';

interface TownProps {
    performAction: (action: string) => void;
}

class Town extends React.Component<TownProps, {}> {
    constructor(props: TownProps) {
        super(props);
    }

    render() {
        return (
            <div>
                <div> You are in town! </div>
                <button onClick={() => this.props.performAction('shop')}> SHOP </button>
            </div>
        );
    }
}

export default Town;