import React, { Component } from 'react';

import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ClientActions from '../../store/ducks/client';
import HoursActions from '../../store/ducks/hours';
import moment from 'moment';
import { DatePicker } from 'native-base';

class ClientInformation extends Component {
  render() {
    return (
        <View style={styles.container}>

        <View style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 17 }}>Worker: {this.props.navigation.state.params.name} </Text>
           
      
        </View>

        <View>

        <View style={styles.content}>
        <View>
    
            <DatePicker
                defaultDate={new Date()}            
                locale={"en"}
                timeZoneOffsetInMinutes={undefined}
                modalTransparent={false}
                animationType={"fade"}
                androidMode={"default"}
                placeHolderText="Date 01"
                textStyle={{ color: "green" }}
                placeHolderTextStyle={{ color: "#d3d3d3" }}
                onDateChange={this.setDateOne}
                disabled={false}
                />
        </View>
        <View>

            <DatePicker
                defaultDate={new Date()}            
                locale={"en"}
                timeZoneOffsetInMinutes={undefined}
                modalTransparent={false}
                animationType={"fade"}
                androidMode={"default"}
                placeHolderText="Date 02"
                textStyle={{ color: "green" }}
                placeHolderTextStyle={{ color: "#d3d3d3" }}
                onDateChange={this.setDateTwo}
                disabled={false}
                />
        </View>
            <TouchableOpacity onPress={this.onSubmit} style={styles.button}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>Send</Text>
            </TouchableOpacity>
        </View>

        {/* { this.props.report.report && (
                <FlatList 

                data={this.props.report.report.data}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => (
                    
                    
                            <View style={styles.content}>
    
                            <View style={styles.dateHour}>
                                <Text style={{ fontSize: 17 }}>Date</Text>
                                <Text>{moment(item.finished_job).format('DD/MM/YYYY')}</Text>
                            </View>
                            <View>
                                <Text style={{ fontSize: 17 }}>Hours</Text>
                                <Text>{item.time_worked}</Text>
                            </View>
                        </View>
                        
                
            )}
                />
        ) } */}


        </View>
        
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
    h2: {
        fontSize: 20,
        lineHeight: 40
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    button: {
        height: 35,
        backgroundColor: "deepskyblue",
        borderRadius: 5,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15
      },
});

const mapDispatchToProps = dispatch => bindActionCreators(ClientActions, dispatch);

const mapStateToProps = state => ({
  client: state.client
})
export default connect(mapStateToProps, mapDispatchToProps)(ClientInformation);
