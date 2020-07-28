import styled from 'styled-components/native';

export const HeaderAddButton = styled.TouchableHighlight`
  margin-right: 15px;
  height: 40px;
  width: 40px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const TitleInput = styled.TextInput`
  padding: 15px;
  margin: 10px;
  font-size: 20px;
  font-weight: bold;
  color: #fff;

  border-bottom-width: 1px;
  border-bottom-color: #ddd;
`;

export const BodyInput = styled.TextInput`
  flex: 1;
  padding: 25px;
  font-size: 15px;
  color: #fff;
`;

export const CloseButton = styled.TouchableHighlight`
  margin-left: 15px;
`;

export const DeleteButton = styled.TouchableHighlight`
  height: 50px;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background: #db4444;
  flex-direction: row;
`;

export const DeleteButtonText = styled.Text`
  font-size: 17px;
  font-weight: bold;
  color: #fff;
  margin-right: 10px;
`;
