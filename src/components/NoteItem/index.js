import React, {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import FeatherIcon from 'react-native-vector-icons/Feather';

import {NoteBox, Title, DeleteNoteButton} from './styles';

export default ({data, index, onPress}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleDeleteButton = useCallback(() => {
    dispatch({
      type: 'DELETE_NOTE',
      payload: {key: index},
    });
    navigation.goBack();
  }, [dispatch, navigation, index]);

  return (
    <NoteBox onPress={() => onPress(index)}>
      <>
        <Title>{data.title}</Title>
        <DeleteNoteButton onPress={handleDeleteButton}>
          <FeatherIcon name="trash" size={22} color="#fff" />
        </DeleteNoteButton>
      </>
    </NoteBox>
  );
};
