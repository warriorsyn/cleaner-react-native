import * as React from 'react';
import { Text, View, StyleSheet, Button, FlatList } from 'react-native';
import { FAB } from 'react-native-paper';
import { Icon } from 'native-base';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ClientActions from '../../store/ducks/client';



class Client extends React.Component {
   
    static navigationOptions = {
        title: "Clients",
        tabBarIcon: ({tintColor}) => (<Icon name="home" style={{color: tintColor}} />)
    }


  createClient = () => {
    this.props.navigation.navigate('CreateClient');
  };

  componentDidMount() {
    this.props.getClientRequest();
  }

  componentDidUpdate(prevProps) {
  

      if(prevProps.client.data.data !== undefined) {
        this.props.getClientRequest();
      }
  }

  render() {
     
    return (
      <View style={styles.container}>
        {/* 2807 */}
        <FlatList 
        // contentContainerStyle={styles.clients}
          data={this.props.client.data.data}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => (
            <View style={styles.clients}>
            <View>
              <Text>{item.name}</Text>
              
              <Text><Icon name="pin" style={{fontSize: 17}}/>{item.address}</Text>
            </View>
            <View>
              <Icon name="add" onPress={() => alert('pressed')}/>
            </View>
          </View>
         
          )}
        />
 
        <FAB style={styles.fab} small icon="add" onPress={this.createClient} />
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

const mapDispatchToProps = dispatch => bindActionCreators(ClientActions, dispatch);

const mapStateToProps = state => ({
  client: state.client
})
export default connect(mapStateToProps, mapDispatchToProps)(Client);