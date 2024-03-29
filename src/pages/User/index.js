import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ActivityIndicator} from 'react-native';

import api from '../../config/api';
import {
  Container,
  Avatar,
  Bio,
  Name,
  Header,
  Stars,
  Starred,
  OwnerAvatar,
  Info,
  Title,
  Author,
} from './styles';

export default class User extends Component {
  static navigationOptions = ({navigation}) => ({
    title: navigation.getParam('user').name,
  });

  constructor() {
    super();
    this.state = {
      stars: [],
    };
  }

  async componentDidMount() {
    const {navigation} = this.props;
    const user = navigation.getParam('user');

    const response = await api.get(`users/${user.login}/starred`);
    this.setState({
      stars: response.data,
    });
  }

  render() {
    const {stars} = this.state;
    const {navigation} = this.props;
    const user = navigation.getParam('user');
    console.tron.log('aqui ==> ', user);
    return (
      <Container>
        <Header>
          <Avatar source={{uri: user.avatar}} />
          <Name>{user.name}</Name>
          <Bio>{user.bio}</Bio>
        </Header>
        <Stars
          data={stars}
          keyExtractor={star => String(star.id)}
          renderItem={({item}) => (
            <Starred>
              <OwnerAvatar source={{uri: item.owner.avatar_url}} />
              <Info>
                <Title>{item.name}</Title>
                <Author>{item.owner.login}</Author>
              </Info>
            </Starred>
          )}
        />
      </Container>
    );
  }
}

User.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
  }).isRequired,
};
