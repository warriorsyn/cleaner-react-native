import React, { Component } from 'react';

import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Icon } from 'native-base';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ProductActions from '../../store/ducks/product';
 

 
class SeeOrders extends Component {
    static navigationOptions = {
        header: null
    }

    componentDidMount() {
        this.props.getOrdersRequest();
    }

  render() {
      console.log(this.props)
    return (
        <View style={styles.container}>
            <FlatList 
              data={this.props.product.orders.data}
              keyExtractor={item => String(item.id)}
              renderItem={({item}) => (
                
                <View style={styles.clients}>
                <View>
                <Text style={{fontSize: 18}}>{item.product.name}</Text>
                <Text>Quantity: {item.quantity}</Text>
                <Text>Schedule: { item.schedule.work } </Text>
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
export default connect(mapStateToProps, mapDispatchToProps)(SeeOrders);
