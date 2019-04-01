import React, { Component } from 'react';
import createNavigator from './routes';
import AsyncStorage from '@react-native-community/async-storage';
import NavigationService from './services/navigation';
 
import { connect } from 'react-redux';



class App extends Component {
    
    registerService = (ref) => {
        NavigationService.setTopLevelNavigator(ref);
    }

    // componentDidMount() {
    //     AsyncStorage.clear()
    // }

    render() {
        const { auth } = this.props;

        if(!auth.authChecked) return null;

        const Routes = createNavigator(auth.signedIn, auth.role);
        return <Routes ref={this.registerService} />
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
})

export default connect(mapStateToProps)(App);