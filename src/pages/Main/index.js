import React from 'react';

import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Icon } from 'native-base';
const { WIDTH } = Dimensions.get('window');

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AuthActions from '../../store/ducks/auth';


class Main extends React.Component {

    static navigationOptions = {
        title: "Home"
    }

    handleLogout = () => {
        this.props.signOut()
    }

    handlerProduct = () => {
        this.props.navigation.navigate('Product')
    }
    
    handlerHours = () => {
        this.props.navigation.navigate('report');
    }

    render() {
        return (
            <View style={styles.container}>
                 <View>
                     <TouchableOpacity onPress={this.handlerHours} style={styles.menu}>
                         <Text style={styles.menuText}>Hours Report</Text>
                         <Icon name="arrow-forward" />
                     </TouchableOpacity>
                     <TouchableOpacity onPress={this.handlerProduct} style={styles.menu}>
                         <Text style={styles.menuText}>Products</Text>
                         <Icon name="arrow-forward" />
                     </TouchableOpacity>
                 </View>
                 <View>
                     <TouchableOpacity onPress={this.handleLogout} style={styles.button}>
                         <Text style={styles.label}>Logout</Text>
                     </TouchableOpacity>
                 </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between',
      backgroundColor: 'white',
      padding: 10
    },
    button: {
      height: 55,
      backgroundColor: "#d26666",
      borderRadius: 5,
      width: WIDTH,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 15
    },
    label: {
      color: 'white',
      fontWeight: 'bold'
    },
    menu: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: '#ccc',
        marginTop: 10
    },
    menuText: {
        fontSize: 20
    }
  }) 
const mapDispatchToProps = dispatch => bindActionCreators(AuthActions,dispatch)
export default connect(null, mapDispatchToProps )(Main)