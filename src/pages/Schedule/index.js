import React, { Component } from 'react';
import { FAB } from 'react-native-paper';
import { View,Text, StyleSheet, FlatList } from 'react-native';
import { Icon } from 'native-base';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ScheduleActions from '../../store/ducks/schedule';

import moment from 'moment';


class Schedule extends Component {

    static navigationOptions = {
        title: "Schedule"
    }

    componentDidMount() {
      this.props.getScheduleRequest();
    }

    componentDidUpdate(prevProps) {
      if(prevProps !== this.props) {
        this.props.getScheduleRequest();
      }
    }

    createSchedule = () => {
      this.props.navigation.navigate('CreateSchedule');
    }
    render() {
 
        return (


            <View style={styles.container}>
                  <FlatList 
                    data={this.props.schedule.data.data}
                    keyExtractor={item => String(item.id)}
                    renderItem={({item}) => (
                      
                      <View style={styles.clients}>
                        <View>
                        <Text>{item.work}</Text>
                        
                        <Text>{moment(item.date_time).format('DD/MM/YYYY')}</Text>
                        <Text><Icon name="pin" style={{fontSize: 17}}/>{item.address}</Text>
                        </View>
                        {/* <View>
                            <Icon name="add" onPress={() => alert('pressed')}/>
                        </View> */}
                      </View>
                    )}
                  />
          
          
                <FAB style={styles.fab} small icon="add" onPress={this.createSchedule} />
            </View>
        )
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
  

const mapDispatchToProps = dispatch => bindActionCreators(ScheduleActions, dispatch);

const mapStateToProps = state => ({
  schedule: state.schedule
})
export default connect(mapStateToProps, mapDispatchToProps)(Schedule);
