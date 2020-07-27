import styled from 'styled-components/native';
import {FlatList} from 'react-native';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #333;
`;

export const Text = styled.Text`
  font-size: 30px;
  color: #fff;
`;

export const Button = styled.Button``;

export const HeaderAddButton = styled.TouchableHighlight`
  margin-right: 15px;
`;

export const NotesList = styled(FlatList)`
  flex: 1;
  width: 100%;
  padding: 10px;
`;

export const EmptyNotes = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const EmptyNotesText = styled.Text`
  font-size: 17px;
  color: #ddd;
  margin-top: 15px;
`;
