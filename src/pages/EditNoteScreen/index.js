import React, {useState, useEffect, useLayoutEffect} from 'react';

import FeatherIcon from 'react-native-vector-icons/Feather';

import {useSelector, useDispatch} from 'react-redux';
import {useNavigation, useRoute} from '@react-navigation/native';

import {HeaderAddButton, Container, TitleInput, BodyInput} from './styles';

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
      title: title !== '' ? title : 'New Note',
      headerRight: () => (
        <HeaderAddButton underlayColor="transparent">
          <FeatherIcon name="save" size={25} color="#fff" />
        </HeaderAddButton>
      ),
    });
  }, [navigation, title]);

  useEffect(() => {
    if (route.params?.key !== undefined && list[route.params.key]) {
      setStatus('edit');
      setTitle(list[route.params.key].title);
      setBody(list[route.params.key].body);
    }
  }, [route.params, list]);

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
