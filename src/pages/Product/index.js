import React, { Component } from 'react';
import { View,Text, StyleSheet, FlatList } from 'react-native';
import { FAB } from 'react-native-paper';
import { Icon } from 'native-base';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ProductActions from '../../store/ducks/product';


class Product extends Component {
    static navigationOptions = {
        header: null,
        title: "Product"
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

  render() {
    console.log(this.props.product)
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
                    <Icon name="add" onPress={() => alert('pressed')}/>
                </View>
            </View> 
              )}
            />
          
            <FAB style={styles.fab} small icon="add" onPress={this.createProduct} />
        </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    fab: {
      position: 'absolute',
      margin: 16,
      right: 0,
      bottom: 0,
      backgroundColor: 'blue',
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
export default connect(mapStateToProps, mapDispatchToProps)(Product);
