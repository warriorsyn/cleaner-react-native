import React, { Component } from 'react';

import { View,Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Icon } from 'native-base';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ScheduleActions from '../../store/ducks/schedule';
import moment from 'moment';



const { WIDTH } = Dimensions.get('window');

class ScheduleInformation extends Component {
  
    static navigationOptions = {
        title: "Schedule Information"
    } 
    state = {
        isDateTimePickerVisible: false,
        time: ''
    };

    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

    _handleDatePicked = time => {
    
        this.setState({
            time: moment(time).format('HH:mm')
        })
        
        this._hideDateTimePicker()

        const id = this.props.navigation.state.params.id;
        const clientId = this.props.navigation.state.params.clientId;
        // const time = this.state.time;

        this.props.finishScheduleRequest(id, clientId ,this.state.time, moment().format('YYYY-MM-DD'));
    }
   

    componentDidMount() {

        this.props.getScheduleByIdRequest(this.props.navigation.state.params.id);
    }

    render() {

        const { schedule } = this.props;
        console.log(schedule);
        return (


            <View style={styles.container}>
               {schedule.scheduleById.data && (
                   <View style={styles.content}>
                       <Text style={styles.h2}>Work: {schedule.scheduleById.data.work}</Text>
                        <Text style={styles.h2}>Ovservation: {schedule.scheduleById.data.observe}</Text>
                        <Text style={styles.h2}>Work Date: {moment(schedule.scheduleById.data.date_time).format('DD/MM/YYYY')}</Text>
                        <Text style={styles.h2}>
                            Checklist:
                        </Text>
                        {schedule.scheduleById.data.checklist && schedule.scheduleById.data.checklist.map(checklist => (
                            <View key={checklist.id}>
                                <Text style={styles.checklist}>{checklist.task}</Text>
                            </View>
                            
                        ))}
                   </View>
                  
               )} 

               <TouchableOpacity style={styles.button} onPress={this._showDateTimePicker}>
                   <Text style={styles.label}>Finish the job</Text>
               </TouchableOpacity>
               <DateTimePicker
                mode='time'
                isVisible={this.state.isDateTimePickerVisible}
                onConfirm={this._handleDatePicked}
                onCancel={this._hideDateTimePicker}
                />

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
    checklist: {
        fontSize: 18,
        lineHeight: 35
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
  

const mapDispatchToProps = dispatch => bindActionCreators(ScheduleActions, dispatch);

const mapStateToProps = state => ({
  schedule: state.schedule
})
export default connect(mapStateToProps, mapDispatchToProps)(ScheduleInformation);
