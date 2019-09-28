import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
`;

export const Header = styled.View`
  align-items: center;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #eee;
`;

export const User = styled.View`
  align-items: center;
  margin: 0 20px 30px;
`;
export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background: #eee;
`;
export const Name = styled.Text`
  font-size: 20px;
  color: #333;
  font-weight: bold;
  text-align: center;
  margin-top: 10px;
`;
export const Bio = styled.Text`
  font-size: 14px;
  color: #999;
  line-height: 18px;
  margin-top: 5px;
  text-align: center;
`;
