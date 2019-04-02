import React, { Component } from 'react';

import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import { Icon } from 'native-base';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ScheduleActions from '../../store/ducks/schedule';
import AuthActions from '../../store/ducks/auth';

import moment from 'moment';

class DasboardWorker extends Component {
  

  static navigationOptions = {
    title: "My Schedule",
    
  }

  handlerLogout = ()=> {
    this.props.AuthCreators.signOut()
  }

 

  componentDidMount() {
    this.props.ScheduleCreators.getWorkersScheduleRequest();
  }

  componentDidUpdate(prevProps) {
    if(prevProps !== this.props) {
      this.props.ScheduleCreators.getWorkersScheduleRequest();
    }
  }

  render() {
  
    return (
        <View style={styles.container}>
        <Button title="logout" onPress={this.handlerLogout}/>
          <FlatList 
            data={this.props.schedule.workerData.data}
            keyExtractor={item => String(item.id)}
            renderItem={({item}) => (
              
              <View style={styles.clients}>
                <View>
                <Text>{item.work} {item.status !== false ? ( <Icon style={styles.done} name="checkmark-circle-outline" /> ): ''}</Text>
                
                <Text>{moment(item.date_time).format("DD/MM/YYYY")}</Text>
                </View>
                <View>
                    <Icon name="add" onPress={() => this.props.navigation.navigate('ScheduleInformation', item.id) }/>
                </View>
              </View>
            )}
          />

        </View>
    )
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
  done: {
    color: "green",
    fontSize: 18
  }
});

const mapDispatchToProps = (dispatch) => {
  return {
    ScheduleCreators : bindActionCreators(ScheduleActions, dispatch),
    AuthCreators: bindActionCreators(AuthActions, dispatch),
     
  }
}
const mapStateToProps = state => ({
  schedule: state.schedule
})

export default connect(mapStateToProps, mapDispatchToProps)(DasboardWorker)