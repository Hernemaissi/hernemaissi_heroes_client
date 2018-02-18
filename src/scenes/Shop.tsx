import * as React from 'react';

interface ShopProps {
    onBuy: (index: number) => void;
}

class Shop extends React.Component<ShopProps, {}> {
    constructor(props: ShopProps) {
        super(props);
    }

    render() {
        return (
            <div>
                <div> You are in shop! </div>
                <button onClick={() => this.props.onBuy(0)}> Buy potion </button>
            </div>
        );
    }
}

export default Shop;