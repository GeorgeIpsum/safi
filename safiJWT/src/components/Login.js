import React, { Component, Fragment } from 'react';
import { Text, View } from 'react-native';
import { Input, TextLink, Loading, Button } from './common';
import axios from 'axios';
import deviceStorage from '../services/deviceStorage';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      error: '',
      loading: false
    };
    this.loginUser = this.loginUser.bind(this);
    this.onLoginFail = this.onLoginFail.bind(this);
  }

  loginUser() {
    const {email, password, password_confirmation} = this.state;
    this.setState({error: '', loading: true});

    axios.post("http://localhost:4000/api/v1/users/login", {
      email: email,
      password: password
    })
    .then((res) => {
      deviceStorage.saveItem("id_token", res.data.jwt);
      this.props.newJWT(res.data.jwt);
    })
    .catch((err) => {
      this.onLoginFail();
    })
  }

  onLoginFail() {
    this.setState({
      error: 'Login Failed',
      loading: false,
    });
  }

  render() {
    const { email, password, error, loading } = this.state;
    const { form, section, errorTextStyle } = styles;

    return (
      <Fragment>
        <View style={form}>
          <View style={section}>
            <Input
              placeholder="user@email.com"
              label="Email"
              value={email}
              onChangeText={email => this.setState({ email })}
            />
          </View>

          <View style={section}>
            <Input
              secureTextEntry
              placeholder="password"
              label="Password"
              value={password}
              onChangeText={password => this.setState({ password })}
            />
          </View>

          <Text style={errorTextStyle}>
            {error}
          </Text>

          {!loading ?
            <Button onPress={this.loginUser}>
              Login
            </Button>
            :
            <Loading size={'large'} />}

        </View>
        <TextLink onPress={this.props.authSwitch}>
          Don't have an account? Register!
        </TextLink>
      </Fragment>
    );
  }
}

const styles = {
  form: {
    width: '100%',
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  section: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    backgroundColor: '#fff',
    borderColor: '#ddd',
  },
  errorTextStyle: {
    alignSelf: 'center',
    fontSize: 18,
    color: 'red'
  }
};

export {Login};