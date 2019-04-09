import React, { Component } from 'react';

import { View, Text, KeyboardAvoidingView, Dimensions , TextInput, TouchableOpacity, StyleSheet } from 'react-native';
const { WIDTH } = Dimensions.get('window');
// import styles from './styles';
import { DatePicker, Picker, Content, Icon } from 'native-base';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import WorkerActions from '../../store/ducks/worker';
import ClientActions from '../../store/ducks/client';
import ScheduleActions from '../../store/ducks/schedule';

class CreateSchedule extends Component {

  static navigationOptions = {
    title: "Create Schedule"
  }

  
  state = {
    work: '',
    observation: '',
    chosenDate: new Date(),
    worker: null,
    client: null,
    checklist: [],
    mock: [12],
    value: '',
    address: ''
  }

  onValueChange = value => {
    this.setState({
      worker: value
    });
  }

  onClientChange = value => {
    this.setState({
      client: value
    })
  }

  setDate = newDate => {
    this.setState({ chosenDate: newDate });
  }

  componentDidMount() {
    // if(this.props.worker.data.data !== undefined) {
    //    this.setState({
    //     worker: this.props.worker.data.data.id,
    //      client: this.props.client.data.data.id
    //   })
    // }
   
    this.props.WorkerCreator.getWorkerRequest();
    this.props.ClientCreator.getClientRequest();
  }

  componentDidUpdate(prevProps) {
      this.props.WorkerCreator.getWorkerRequest();
      this.props.ClientCreator.getClientRequest();

}

  ckecklistHandler = () => {
    this.setState({
      mock: [...this.state.mock, Math.random()]
    })
  }

  handlerInput = value => {
    const data = value.nativeEvent.text;
    this.setState(prevState => ({
      checklist: [...prevState.checklist, data]
    }))
  }


  handleSubmit = () => {
    const { work, observation, chosenDate, worker, client, checklist, address } = this.state;
    this.props.ScheduleCreator.createScheduleRequest(work, observation, chosenDate, worker, client, checklist, address);
  }

  render() {
 
    return (
      <KeyboardAvoidingView style={styles.container}>
        <Content>
          <View>
              <TextInput 
              placeholder="Work" 
              style={styles.input} 
              value={this.state.work}
              onChangeText={value => this.setState({ work: value })}
              />

              <TextInput 
              placeholder="Observation" 
              style={styles.input} 
              value={this.state.observation} 
              onChangeText={value => this.setState({ observation: value })}
              />

            <TextInput 
              placeholder="Address" 
              style={styles.input} 
              value={this.state.address} 
              onChangeText={value => this.setState({ address: value })}
              />

              <DatePicker
                defaultDate={new Date()}
                minimumDate={new Date()}
                
                locale={"en"}
                timeZoneOffsetInMinutes={undefined}
                modalTransparent={false}
                animationType={"fade"}
                androidMode={"default"}
                placeHolderText="Work date"
                textStyle={{ color: "green" }}
                placeHolderTextStyle={{ color: "#d3d3d3" }}
                onDateChange={this.setDate}
                disabled={false}
                />

              <Text>Choose worker</Text>
              <Picker
                note
                mode="dropdown"
                style={styles.input}
                selectedValue={this.state.worker}
                onValueChange={this.onValueChange}
              
              >
              {this.props.worker.data.data && this.props.worker.data.data.map(item => (
                <Picker.Item  key={item.id} label={item.name} value={item.id} />
              ))}
                
              </Picker>
          
              <Text>Choose client</Text>
              <Picker
                note
                mode="dropdown"
                style={styles.input}
                selectedValue={this.state.client}
                onValueChange={this.onClientChange}
                placeholder="asd"
              >
      
                {this.props.client.data.data && this.props.client.data.data.map(item => (
                <Picker.Item  key={item.id} label={item.name} value={item.id} />
              ))}
              </Picker>

            {this.state.mock && this.state.mock.map(input => {
              return (
                <View key={input} style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <TextInput 
                    style={styles.input}
                    placeholder="Checklist" 
                    onEndEditing={this.handlerInput}
                  />
                  <Icon style={styles.icon} name="add" onPress={this.ckecklistHandler}/>
                </View>
              )
          })}
            <TouchableOpacity style={styles.button} onPress={this.handleSubmit} >
              <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold' }}>Create</Text>
            </TouchableOpacity>
          </View>
        </Content>
      </KeyboardAvoidingView>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#fff'
  },
  input: {
    width: WIDTH,
    height: 55
  },
  button: {
    backgroundColor: 'deepskyblue',
    padding: 15,
    marginTop: 10,
    alignItems: 'center'
  },
  icon: {
    marginTop: 12
  }
})

const mapDispatchToProps = (dispatch) => {

  return {
    WorkerCreator : bindActionCreators(WorkerActions, dispatch),
    ClientCreator: bindActionCreators(ClientActions, dispatch),
    ScheduleCreator: bindActionCreators(ScheduleActions, dispatch),
  }
}

const mapStateToProps = state => ({
  worker: state.worker,
  client: state.client
})
export default connect(mapStateToProps, mapDispatchToProps)(CreateSchedule);