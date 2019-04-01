import React, { Component } from 'react';

import { View, Text, StyleSheet, FlatList } from 'react-native';

import moment from 'moment';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import HoursActions from '../../store/ducks/hours';


class UniqueReport extends Component {

    static navigationOptions = {
        header: null
    }

    componentDidMount() {
        this.props.getHoursReportRequest(this.props.navigation.state.params)
    }

  render() {
    console.log(this.props.hours.report.data);
    return (
        <View style={styles.container}>

            <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 17 }}>Colaborador</Text>
                <Text>Activities</Text>
            </View>

            <View>

            <FlatList 
            
            data={this.props.hours.report.data}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => {
 
                { item && item.time.map(time => (
             
                
                        <View style={styles.content}>

                        <View style={styles.dateHour}>
                            <Text style={{ fontSize: 17 }}>Date</Text>
                            <Text>{moment(item.created_at).format('DD/MM/YYYY')}</Text>
                        </View>
                        <View>
                            <Text style={{ fontSize: 17 }}>Hours</Text>
                            <Text>{time.time_worked}</Text>
                        </View>
                    </View>
                    
                ))}
            }}
            />

            </View>
            
        </View>
    );
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
    dateHour: {

    }
});
  

const mapDispatchToProps = dispatch => bindActionCreators(HoursActions, dispatch);

const mapStateToProps = state => ({
  hours: state.hours
})
export default connect(mapStateToProps, mapDispatchToProps)(UniqueReport);
