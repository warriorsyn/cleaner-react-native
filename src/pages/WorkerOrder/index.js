import React, { Component } from 'react';

import { View, StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ProductActions from '../../store/ducks/product';

const { WIDTH } = Dimensions.get('window');

class WorkerOrder extends Component {
    
    componentDidMount() {
        this.props.getProductByIdRequest(this.props.navigation.state.params)
    }
    
    createOrder = id => {
        this.props.createOrderRequest(id, 1);
    }
  render() {
    const { product } = this.props;
    console.log(this.props);
    return (
        <View style={styles.container}>

            {product.single.data && (
                <View style={styles.content}>
                    <Text style={styles.h2}>Product: {product.single.data.name}</Text>
                    <Text style={styles.h2}>Quantity: {product.single.data.quantity}</Text>
                    <TouchableOpacity style={styles.button} onPress={() => this.createOrder(product.single.data.id)}>
                   <Text style={styles.label}>Finish the job</Text>
               </TouchableOpacity>
                </View>
            )}

               

        </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      padding: 10
    }, 
    content: {

    },
    h2: {
        fontSize: 20,
        lineHeight: 40
    },
    button: {
        height: 50,
        backgroundColor: "#7289DA",
        borderRadius: 5,
        width: WIDTH,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
      },
    label: {
        color: 'white',
        fontWeight: 'bold'
      }
 
   
  });
  
const mapDispatchToProps = dispatch => bindActionCreators(ProductActions, dispatch);

const mapStateToProps = state => ({
  product: state.product
})
export default connect(mapStateToProps, mapDispatchToProps)(WorkerOrder);
