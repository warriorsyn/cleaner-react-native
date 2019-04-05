import { createAppContainer, createSwitchNavigator, createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { Icon } from 'native-base';
import React from 'react';


import Verify from './pages/Verify';

import Main from './pages/Main';
import Client from './pages/Client';
import CreateClient from './pages/CreateClient';
import ClientInformation from './pages/ClientInformation';
import ClientReport from './pages/ClientReport';
import ClientUniqueReport from './pages/ClientUniqueReport';

import Worker from './pages/worker';
import CreateWorker from './pages/CreateWorker';

import Schedule from './pages/Schedule';
import CreateSchedule from './pages/CreateSchedule';
import ScheduleInformation from './pages/ScheduleInformation';

import Signin from './pages/Signin';

import DashboardWorker from './pages/DashboardWorker'

import Product from './pages/Product';
import CreateProduct from './pages/CreateProduct';
import seeOrders from './pages/SeeOrders';
import WorkerProduct from './pages/WorkerProduct';
import WorkerOrder from './pages/WorkerOrder';

import ChooseReport from './pages/ChooseReport';
import UniqueReport from './pages/UniqueReport';

const clientStackNavigator = createStackNavigator({
    Client,
    CreateClient,
    ClientInformation
})

const scheduleStackNavigator = createStackNavigator({
    Schedule,
    CreateSchedule
})

const workerStackNavigator = createStackNavigator({
    Worker,
    CreateWorker
})

const clientReportNavigator = createStackNavigator({
    ClientReport,
    ClientUniqueReport
})


const productStackNavigator = createStackNavigator({
    Product,
    CreateProduct,
    seeOrders
})

const ReportStackNavigator = createStackNavigator({
    ChooseReport,
    UniqueReport
})

const HomeNavigator = createStackNavigator({
    Main,
    Product: productStackNavigator,
    report: ReportStackNavigator,
    ClientReport: clientReportNavigator
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

const ProductWorker = createStackNavigator({
    WorkerProduct,
    WorkerOrder
})

const Dashboard = createBottomTabNavigator({
    Schedule: ScheduleWorker,
    Product: ProductWorker
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
            } else if(routeName === 'Product') {
                iconName = 'cart'
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