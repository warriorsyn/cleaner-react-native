import * as React from 'react';
import { Text, View, StyleSheet, Button, FlatList } from 'react-native';
import { FAB } from 'react-native-paper';
import { Icon } from 'native-base';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import WorkerActions from '../../store/ducks/worker';



class Worker extends React.Component {
   
    static navigationOptions = {
        title: "Worker",
    }


  createWorker = () => {
    this.props.navigation.navigate('CreateWorker');
  };

  componentDidMount() {
    this.props.getWorkerRequest();
  }

  componentDidUpdate(prevProps) {
  

      if(prevProps.worker.data.data !== this.props.worker.data.data) {
        this.props.getWorkerRequest();
      }
   
 
  }

  render() {

    return (
      <View style={styles.container}>
      
        <FlatList 
          data={this.props.worker.data.data}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => (
            <View style={styles.clients}>
            <View>
              <Text>{item.name}</Text>
              
              <Text>{item.address && (<Icon name="pin" style={{fontSize: 17}}/>)}{item.address}</Text>
            </View>
            {/* <View>
                <Icon name="add" onPress={() => alert('pressed')}/>
            </View> */}
          </View>
         
          )}
        />
 
        <FAB style={styles.fab} small icon="add" onPress={this.createWorker} />
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

const mapDispatchToProps = dispatch => bindActionCreators(WorkerActions, dispatch);

const mapStateToProps = state => ({
  worker: state.worker
})
export default connect(mapStateToProps, mapDispatchToProps)(Worker);