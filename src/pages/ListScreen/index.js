import React, {useLayoutEffect} from 'react';

import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

import FeatherIcon from 'react-native-vector-icons/Feather';
import NoteItem from '../../components/NoteItem';

import {
  Container,
  HeaderAddButton,
  NotesList,
  EmptyNotes,
  EmptyNotesText,
} from './styles';

export default () => {
  const navigation = useNavigation();
  const list = useSelector((state) => state.notes.list);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Notes',
      headerRight: () => (
        <HeaderAddButton
          underlayColor="transparent"
          onPress={() => {
            navigation.navigate('EditNote');
          }}>
          <FeatherIcon name="plus" size={22} color="#fff" />
        </HeaderAddButton>
      ),
    });
  }, [navigation]);

  const handleNotePress = (index) => {
    navigation.navigate('EditNote', {
      key: index,
    });
  };

  return (
    <Container>
      {list.length > 0 && (
        <NotesList
          keyExtractor={(item, index) => index.toString()}
          data={list}
          renderItem={({item, index}) => (
            <NoteItem data={item} index={index} onPress={handleNotePress} />
          )}
        />
      )}

      {list.length === 0 && (
        <EmptyNotes>
          <FeatherIcon name="file-text" size={65} color="#fff" />
          <EmptyNotesText>There are no notes :/</EmptyNotesText>
        </EmptyNotes>
      )}
    </Container>
  );
};
