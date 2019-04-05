import React, { Component } from 'react';

import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Icon } from 'native-base';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import WorkerActions from '../../store/ducks/worker';


class ChooseReport extends Component {

    static navigationOptions = {
        header: null
    }
    
    componentDidMount() {
        this.props.getWorkerRequest();
      }

    handleReport = obj => {
      this.props.navigation.navigate('UniqueReport', obj)
    }
    
  render() {
    return (
        <View style={styles.container}>
        <View style={{alignItems: 'center'}}>
            <Text style={styles.title}>Hours Report</Text>
        </View>
        <FlatList 
          data={this.props.worker.data.data}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => (
            <View style={styles.clients}>
            <View>
              <Text>{item.name}</Text>
              
              <Text>{item.address && (<Icon name="pin" style={{fontSize: 17}}/>)}{item.address}</Text>
            </View>
            <View>
                <Icon name="add" onPress={() => this.handleReport({ id: item.id, name: item.name })}/>
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
    }, 
    title: {
        fontSize: 25,
        marginBottom: 10
    }
  });

  
const mapDispatchToProps = dispatch => bindActionCreators(WorkerActions, dispatch);

const mapStateToProps = state => ({
  worker: state.worker
})
export default connect(mapStateToProps, mapDispatchToProps)(ChooseReport);