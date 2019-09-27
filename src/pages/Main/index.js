import React, {Component} from 'react';
import {Keyboard} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Container, Form, SubmitButton, Input} from './styles';
import api from '../../config/api';

export default class Main extends Component {
  state = {
    newUser: 'evandrocustodio',
    users: [],
  };

  handleSubmit = async () => {
    const {newUser, users} = this.state;
    console.tron.log(newUser);

    const response = await api.get(`users/${newUser}`);

    const data = {
      name: response.data.name,
      login: response.data.login,
      bio: response.data.bio,
      avatar: response.data.avatar_url,
    };
    this.setState({
      users: [...users, data],
      newUser: '',
    });
    Keyboard.dismiss();
  };

  render() {
    const {newUser} = this.state;
    return (
      <Container>
        <Form>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Adicionar Usuário"
            value={newUser}
            onChangeText={text => this.setState({newUser: text})}
            returnKeyType="send"
            onSubmitEditing={this.handleSubmit}
          />
          <SubmitButton>
            <Icon
              name="add"
              size={20}
              color="#FFF"
              onPress={this.handleSubmit}
            />
          </SubmitButton>
        </Form>
      </Container>
    );
  }
}
