import * as React from 'react';
import { Text, View, StyleSheet, TextInput, KeyboardAvoidingView, TouchableOpacity, Dimensions } from 'react-native';
 
const { WIDTH } = Dimensions.get('window');

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ClientActions from '../../store/ducks/client';


class CreateClient extends React.Component {
  
  static navigationOptions = {
    title: 'Create Clients'
  }

  state = {
    email: '',
    name: '',
    address: '',
  }

  handleSubmit = () => {
    const { email, name, address } = this.state;

    this.props.createClientRequest(name, email, address);
  }
  
  render() {
    return (
     <KeyboardAvoidingView style={styles.container}>
        <View>
          <TextInput 
          placeholder="Full name" 
          style={styles.input} 
          value={this.state.name}
          onChangeText={value => this.setState({ name: value })}
          />

          <TextInput 
          placeholder="Email" 
          style={styles.input} 
          value={this.state.email} 
          onChangeText={value => this.setState({ email: value })}
          />

          <TextInput 
          placeholder="Address" 
          style={styles.input}  
          value={this.state.address}
          onChangeText={value => this.setState({ address: value })}
          />

          <TouchableOpacity style={styles.button} onPress={this.handleSubmit} >
            <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold' }}>Create</Text>
          </TouchableOpacity>
        </View>
     </KeyboardAvoidingView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#fff'
  },
  input: {
    width: WIDTH,
    height: 55
  },
  button: {
    backgroundColor: 'deepskyblue',
    padding: 15,
    marginTop: 10,
    alignItems: 'center'
  }
})

const mapDispatchToProps = dispatch => bindActionCreators(ClientActions, dispatch);

export default connect(null, mapDispatchToProps)(CreateClient);