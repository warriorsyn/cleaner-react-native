import * as React from 'react';
import { Text, View, StyleSheet, TextInput, KeyboardAvoidingView, TouchableOpacity, Dimensions } from 'react-native';
 
const { WIDTH } = Dimensions.get('window');


import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ProductActions from '../../store/ducks/product';

class CreateProduct extends React.Component {
  
  static navigationOptions = {
    header: null
  }

  state = {
    name: '',
    code: '',
    quantity: '',
  }

  handleSubmit = () => {
    const { name, code, quantity } = this.state;

    this.props.createProductsRequest(name, code, quantity);
  }
  

  render() {
      console.log(this.props)
    return (
     <KeyboardAvoidingView style={styles.container}>
        <View>
          <View style={{ alignItems: 'center' }}>
          <Text style={{fontSize: 25, fontWeight: 'bold'}}>Create Product</Text>
          </View>
          <TextInput 
          placeholder="Product name" 
          style={styles.input} 
          value={this.state.name}
          onChangeText={value => this.setState({ name: value })}
          />

          <TextInput 
          placeholder="Product code" 
          style={styles.input} 
          value={this.state.code} 
          onChangeText={value => this.setState({ code: value })}
          />

          <TextInput 
          placeholder="quantity" 
          style={styles.input}  
          value={this.state.quantity}
          onChangeText={value => this.setState({ quantity: value })}
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
    backgroundColor: '#fff',
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

const mapDispatchToProps = dispatch => bindActionCreators(ProductActions, dispatch);


export default connect(null, mapDispatchToProps)(CreateProduct);
