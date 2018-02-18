import * as React from 'react';

interface TownProps {
    history: string[];
}

class EventViewer extends React.Component<TownProps, {}> {
    constructor(props: TownProps) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.history.map((h) => {
                    return (
                        <p key={h}> {h} </p>
                    );
                })}
            </div>
        );
    }
}

export default EventViewer;