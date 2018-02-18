import * as React from 'react';
import { connect } from 'react-redux';

import './App.css';
import * as models from './models';
import { updateStatus } from './actions/player';
import { Player } from './models';
import { Store } from './global';
import Loading from './scenes/Loading';
import Town from './scenes/Town';
import Shop from './scenes/Shop';
import EventViewer from './EventViewer';

const logo = require('./logo.svg');

interface AppState {
  ws: WebSocket;
  connected: boolean;
  history: string[];
}

interface DispatchProps {
  updateStatus: (player: Player) => void;
}

interface StateProps {
  player: Player;
}

class App extends React.Component<DispatchProps & StateProps, AppState> {

  constructor(props: DispatchProps & StateProps) {
    super(props);
    let ws = new WebSocket('ws://localhost:8080');
    ws.onopen = () => {
      this.setState({
        connected: true
      });
    };

    window.addEventListener('beforeunload', function () {
      ws.close();
    });

    ws.onmessage = (e) => {
      console.log('received: ', e.data);
      const jsonData = JSON.parse(e.data);
      if (jsonData.id === 'status') {
        const newPlayer: models.Player = jsonData.message;
        this.props.updateStatus(newPlayer);
      }
      if (jsonData.id === 'message') {
        const history = this.state.history.slice();
        history.push(jsonData.message);
        this.setState({
          history: history
        });
      }
    };

    ws.onerror = (e) => {
      // an error occurred
      console.log('Error: ', e);
    };
    
    ws.onclose = (e) => {
      // connection closed
      console.log(e.code, e.reason);
    };

    this.state = {
      ws: ws,
      connected: false,
      history: [],
    };

    this.clickMe = this.clickMe.bind(this);
    this.performAction = this.performAction.bind(this);
    this.buyItem = this.buyItem.bind(this);
  }

  componentWillUnmount() {
    this.state.ws.close();
  }

  clickMe() {
    this.state.ws.send(JSON.stringify({id: 'button', content: ''}));
  }

  performAction(action: string) {
    this.state.ws.send(JSON.stringify({id: 'action', message: action}));
  }

  buyItem(index: number) {
    const strIndex = index.toString();
    this.state.ws.send(JSON.stringify({id: 'buy', message: strIndex}));
  }

  currentScene() {
    switch (this.props.player.currentScene.name) {
      case 'start': {
        return <Loading />;
      }
      case 'town': {
        return (
        <Town
          performAction={this.performAction}
        />
        );
      }
      case 'shop': {
        return <Shop onBuy={this.buyItem} />;
      }
      default:
        return <Loading />;
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Multiplayer</h1>
        </header>
        <div className="App-intro">
          {this.currentScene()}
        </div>
        <EventViewer history={this.state.history} />
      </div>
    );
  }
}

const mapStateToProps = (state: Store.All, ownProps: {}): StateProps => {
  return {
    player: state.player.player
  };
};

const mapDispatchToProps = (dispatch: any): DispatchProps => {
  return {
    updateStatus: (player: models.Player) => {
      dispatch(updateStatus(player));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
