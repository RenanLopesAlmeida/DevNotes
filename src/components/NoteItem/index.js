import React from 'react';
import {NoteBox, Title} from './styles';

export default ({data, index, onPress}) => {
  return (
    <NoteBox onPress={() => onPress(index)}>
      <Title>{data.title}</Title>
    </NoteBox>
  );
};
