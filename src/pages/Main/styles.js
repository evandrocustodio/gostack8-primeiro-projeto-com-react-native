import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
`;

export const Form = styled.View`
  flex-direction: row;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #444;
  font-size: 16px;
  color: #fff;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#7159c1',
})`
  flex: 1;
  height: 40px;
  background: #eee;
  border-radius: 4px;
  padding: 0 15px;
  border: 1px solid #eee;
`;

export const SubmitButton = styled(TouchableOpacity)`
  justify-content: center;
  align-items: center;
  background: #7159c1;
  border-radius: 4px;
  margin-left: 10px;
  padding: 0 20px;
  opacity: ${props => (props.loading ? 0.6 : 1)};
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const User = styled.View`
  align-items: center;
  margin: 0 20px 30px;
`;
export const Avatar = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  background: #eee;
`;
export const Name = styled.Text`
  font-size: 14px;
  color: #333;
  font-weight: bold;
  text-align: center;
  margin-top: 4px;
`;
export const Bio = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 13px;
  color: #999;
  line-height: 18px;
  margin-top: 5px;
  text-align: center;
`;
export const ProfileButton = styled(TouchableOpacity)`
  margin-top: 10px;
  align-self: stretch;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  background: #7159c1;
  height: 36px;
  flex-direction: row;
`;

export const ProfileButtonText = styled.Text`
  font-size: 14px;
  margin-left: 20px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
`;
