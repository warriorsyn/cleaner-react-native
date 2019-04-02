import React, { Component } from 'react';
import { View,Text, StyleSheet, FlatList, TouchableOpacity, Dimensions } from 'react-native';
 
import { Icon } from 'native-base';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ProductActions from '../../store/ducks/product';


class WorkerProduct extends Component {
    static navigationOptions = {
 
        title: "Order Product"
    }

    componentDidMount() {
      this.props.getProductsRequest();
    }

    componentDidUpdate(prevProps) {
      if(prevProps !== this.props) {
        this.props.getProductsRequest();
      }
    }

    createProduct = () => {
      this.props.navigation.navigate('CreateProduct')
    }

 
    handleOrder = id => {
        this.props.navigation.navigate('WorkerOrder', id)
      }
      

  render() {

    return (
        <View style={styles.container}>
          <FlatList 
              data={this.props.product.products.data}
              keyExtractor={item => String(item.id)}
              renderItem={({item}) => (
                
                <View style={styles.clients}>
                <View>
                <Text style={{fontSize: 18}}>{item.name}</Text>
                <Text>Quantity: {item.quantity}</Text>
                    
                </View>
                <View>
                    <Icon name="add" onPress={() => this.handleOrder(item.id)}/>
                </View>
            </View> 
              )}
            />
        </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    clients: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 15,
      alignItems: 'center',
      borderWidth: 0.5,
      borderColor: '#ccc',
    }
  });
  
const mapDispatchToProps = dispatch => bindActionCreators(ProductActions, dispatch);

const mapStateToProps = state => ({
  product: state.product
})
export default connect(mapStateToProps, mapDispatchToProps)(WorkerProduct);
