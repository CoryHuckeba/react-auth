import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
    state = { 
        email: '',
        password: '',
        error: ''
     };

    onButtonPress() {
        const { email, password } = this.state;
        this.setState({ error: '' });
        
        firebase.auth().signInWithEmailAndPassword(email, password)
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .catch(() => {
                        this.setState({ error: 'Invalid Email/Password combination.' });                
                    });
            });
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label='Email'
                        placeholder='user@gmail.com'
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}                        
                    />
                </CardSection>

                <CardSection>
                    <Input
                        secure
                        label='Password'
                        placeholder='password'
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}                        
                    />
                </CardSection>

                <Text style={styles.errorStyle}>
                    {this.state.error}
                </Text>

                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Login
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

export default LoginForm;
