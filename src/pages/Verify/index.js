import React, { Component } from 'react';

import { View, ActivityIndicator } from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';


export default class Verify extends Component {

    constructor(props) {
        super(props);
        this.loadApp();
    }

    loadApp = async () => {
        const role = await AsyncStorage.getItem('@cleaner:role')

        this.props.navigation.navigate(role === 'administrator' ? 'Home' : 'Dashboard');
        
        // if(role === "administrator") {
        //     this.props.navigation.navigate('Home')
        // }
        // console.log(role)
    }

    render() {
        return (
            <View>
                <ActivityIndicator />
            </View>
        )
    }
}

