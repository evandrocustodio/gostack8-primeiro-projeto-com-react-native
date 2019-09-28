import React, {Component} from 'react';
import PropTypes from 'prop-types';

import api from '../../config/api';
import {Container, Avatar, Bio, Name, Header} from './styles';

export default class User extends Component {
  static navigationOptions = ({navigation}) => ({
    title: 'evadnro',
  });

  constructor() {
    super();
    this.state = {
      stars: [],
    };
  }

  async componentDidMount() {
    const {navigation} = this.props;
    const user = navigation.getParam('User');

    const response = await api.get(`users/${user.login}/starred`);
    this.setState({
      stars: response.data,
    });
  }

  render() {
    const {stars} = this.state;
    const {navigation} = this.props;
    const user = navigation.getParam('User');
    console.tron.log(user);
    return (
      <Container>
        <Header>
          <Avatar source={{uri: user.avatar}} />
          <Name>{user.name}</Name>
          <Bio>{user.bio}</Bio>
        </Header>
      </Container>
    );
  }
}

User.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
  }).isRequired,
};
