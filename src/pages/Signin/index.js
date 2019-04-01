import React from 'react';

import { Platform ,View, Text, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AuthActions from '../../store/ducks/auth';

class Signin extends React.Component {

    static navigationOptions = {
        title: "Administrator"
    }

    state = {
        email: '',
        password: ''
    }

    handleSubmit = () => {
        const { email, password } = this.state;

        this.props.signInRequest(email, password)
    }

    render() {

        const { email, password } = this.state;

        return (
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ?  'padding' : 'null' }  style={styles.container} >
                <View>
                    <Text style={styles.title}>Signin</Text>

                    <Text style={styles.label}>E-mail</Text>
                    <TextInput 
                        style={styles.input}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                        underlineColorAndroid="transparent"
                        autoFocus={true}
                        returnKeyType="next"
                        value={email}
                        onChangeText={text => this.setState({ email: text })}
                        onSubmitEditing={() => this.passwordInput.focus()}
                    />
                    
                    <Text style={styles.label}>Password</Text>
                    <TextInput 
                        style={styles.input}
                        autoCapitalize="none"
                        autoCorrect={false}
                        underlineColorAndroid="transparent"
                        returnKeyType="send"
                        secureTextEntry
                        value={password}
                        onChangeText={text => this.setState({ password: text })}
                        ref={el => { this.passwordInput = el}}
                        onSubmitEditing={this.handleSubmit}
                    />

                    <TouchableOpacity style={styles.button} onPress={this.handleSubmit}>
                        <Text style={styles.buttonText}>Signin</Text>
                    </TouchableOpacity>

                </View>
            </KeyboardAvoidingView>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators(AuthActions,dispatch)
export default connect(null, mapDispatchToProps )(Signin)