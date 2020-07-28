import styled from 'styled-components/native';

export const NoteBox = styled.TouchableHighlight`
  height: 50px;
  padding-left: 16px;
  background: #222;
  border-radius: 15px;
  border-left-width: 3px;
  border-left-color: #7159c1;
  margin-bottom: 8px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 17px;
`;

export const DeleteNoteButton = styled.TouchableHighlight`
  height: 100%;
  width: 50px;
  background: #db4444;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  justify-content: center;
  align-items: center;
`;
