import React, { Component } from 'react';

import { View, Text, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';

const { WIDTH } = Dimensions.get('window');

export default class Init extends Component {
  
  static navigationOptions = {
   header: null
  }
  

  administratorHandler = () => {
    this.props.navigation.navigate('Signin')
  }

  workerHandler = () => {

  }
  render() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={this.administratorHandler}>
                <Text style={styles.label}>Administrator</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.label}>Worker</Text>
            </TouchableOpacity>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#353940',
    padding: 10
  },
  button: {
    height: 55,
    backgroundColor: "#7289DA",
    borderRadius: 5,
    width: WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15
  },
  label: {
    color: 'white',
    fontWeight: 'bold'
  }
}) 