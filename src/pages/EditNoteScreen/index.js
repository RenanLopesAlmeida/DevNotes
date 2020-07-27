import React, {useState, useEffect, useLayoutEffect, useCallback} from 'react';

import FeatherIcon from 'react-native-vector-icons/Feather';

import {useSelector, useDispatch} from 'react-redux';
import {useNavigation, useRoute} from '@react-navigation/native';

import {
  HeaderAddButton,
  Container,
  TitleInput,
  BodyInput,
  CloseButton,
} from './styles';

export default () => {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();
  const list = useSelector((state) => state.notes.list);

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [status, setStatus] = useState('new');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <CloseButton
          underlayColor="transparent"
          onPress={() => navigation.goBack()}>
          <FeatherIcon name="x" size={25} color="#db4444" />
        </CloseButton>
      ),
      title: title !== '' ? title : 'New Note',
      headerRight: () => (
        <HeaderAddButton underlayColor="transparent" onPress={handleSaveButton}>
          <FeatherIcon name="save" size={25} color="#fff" />
        </HeaderAddButton>
      ),
    });
  }, [status, navigation, title, body, handleSaveButton]);

  useEffect(() => {
    if (route.params?.key !== undefined && list[route.params?.key]) {
      setStatus('edit');
      setTitle(list[route.params.key].title);
      setBody(list[route.params.key].body);
    }
  }, [list, route.params]);

  const handleSaveButton = useCallback(() => {
    if (title !== '' && body !== '') {
      if (status === 'edit') {
        dispatch({
          type: 'EDIT_NOTE',
          payload: {
            key: route.params.key,
            title,
            body,
          },
        });
      } else {
        dispatch({
          type: 'ADD_NOTE',
          payload: {title, body},
        });
      }

      navigation.goBack();
    } else {
      alert('Please add a title and a body to your Note');
    }
  }, [title, body, dispatch, status, navigation, route.params.key]);

  return (
    <Container>
      <TitleInput
        placeholder="Add a title"
        placeholderTextColor="#999"
        value={title}
        onChangeText={(text) => setTitle(text)}
        autoFocus={true}
      />

      <BodyInput
        placeholder="Add your note here"
        placeholderTextColor="#fff"
        multiline={true}
        textAlignVertical="top"
        value={body}
        onChangeText={(text) => setBody(text)}
      />
    </Container>
  );
};
