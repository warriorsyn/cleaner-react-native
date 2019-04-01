import { createAppContainer, createSwitchNavigator, createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { Icon } from 'native-base';
import React from 'react';


import Verify from './pages/Verify';

import Main from './pages/Main';
import Client from './pages/Client';
import CreateClient from './pages/CreateClient';

import Worker from './pages/worker';
import CreateWorker from './pages/CreateWorker';

import Schedule from './pages/Schedule';
import CreateSchedule from './pages/CreateSchedule';
import ScheduleInformation from './pages/ScheduleInformation';

import Signin from './pages/Signin';

import DashboardWorker from './pages/DashboardWorker'

import Product from './pages/Product';
import CreateProduct from './pages/CreateProduct';

import ChooseReport from './pages/ChooseReport';
import UniqueReport from './pages/UniqueReport';

const clientStackNavigator = createStackNavigator({
    Client,
    CreateClient
})

const scheduleStackNavigator = createStackNavigator({
    Schedule,
    CreateSchedule
})

const workerStackNavigator = createStackNavigator({
    Worker,
    CreateWorker
})


const productStackNavigator = createStackNavigator({
    Product,
    CreateProduct
})

const ReportStackNavigator = createStackNavigator({
    ChooseReport,
    UniqueReport
})

const HomeNavigator = createStackNavigator({
    Main,
    Product: productStackNavigator,
    report: ReportStackNavigator
})


const appBottomNavigator = createBottomTabNavigator({
    Home: HomeNavigator,
    Client: clientStackNavigator,
    Worker: workerStackNavigator,
    Schedule: scheduleStackNavigator
}, {
    tabBarOptions: {
        activeTintColor: 'black',
        inactiveTintColor: 'gray'
    }, defaultNavigationOptions: ({navigation}) => ({
        tabBarIcon: ({ tintColor }) => {
            const { routeName } = navigation.state;
            let iconName;
            if(routeName === 'Client') {
                iconName = 'people'
            } else if(routeName === 'Home') {
                iconName = 'home'
            } else if(routeName === 'Schedule') {
                iconName = 'calendar'
            } else if(routeName === 'Worker') {
                iconName = 'briefcase'
            }

            return <Icon name={iconName} size={25} style={{color: tintColor}} />;
        }
    })
    
})

const ScheduleWorker = createStackNavigator({
    Schedule: DashboardWorker,
    ScheduleInformation
})

const Dashboard = createBottomTabNavigator({
    Schedule: ScheduleWorker
}, {
    tabBarOptions: {
        activeTintColor: 'black',
        inactiveTintColor: 'gray'
    },
    defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ tintColor }) => {
            const { routeName } = navigation.state;
            let iconName;

            if(routeName === 'Schedule') {
                iconName = 'calendar'
            }

            return <Icon name={iconName} size={25} style={{color: tintColor}} />;
        }
    })
})

export default function createNavigator(isLoggedIn = false, role = '') {

    return createAppContainer(
        createSwitchNavigator({
        Signin,
        Verify, 
        Home: appBottomNavigator,
        Dashboard
    }, {
        initialRouteName: isLoggedIn ? 'Verify' : 'Signin'
    })
    )
}