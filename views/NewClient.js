import React from 'react';
import {useState} from 'react';

import {View, StyleSheet, Alert} from 'react-native';
import {
  TextInput,
  Headline,
  Button,
  Portal,
  Dialog,
  Paragraph,
} from 'react-native-paper';

import globalStyles from '../styles/global';
import {CreateNewClient} from '../utils/fetch';

const NewClient = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [error, setError] = useState(false);

  const saveClient = async () => {
    if (!name.trim() || !phone.trim() || !email.trim() || !company.trim()) {
      setError(true);
      return;
    }
    const client = {name, phone, email, company};
    await CreateNewClient(client);
  };

  return (
    <>
      <View style={globalStyles.ctn}>
        <Headline style={globalStyles.title}>Add New Client</Headline>
        <TextInput
          style={styles.input}
          label="Name"
          placeholder="Jhon"
          onChangeText={(v) => setName(v)}
          value={name}
        />
        <TextInput
          style={styles.input}
          label="Phone"
          placeholder="+52 800000"
          keyboardType="numeric"
          onChangeText={(v) => setPhone(v)}
          value={phone}
        />
        <TextInput
          style={styles.input}
          label="Email"
          placeholder="example@exaple.com"
          keyboardType="email-address"
          onChangeText={(v) => setEmail(v)}
          textContentType="emailAddress"
          value={email}
        />
        <TextInput
          style={styles.input}
          label="Company"
          placeholder="Company Example Name"
          onChangeText={(v) => setCompany(v)}
          value={company}
        />
        <Button
          icon="pencil-circle"
          mode="contained"
          onPress={() => saveClient()}>
          Save Client
        </Button>
        <Portal>
          <Dialog visible={error} onDismiss={() => setError(false)}>
            <Dialog.Title>Error</Dialog.Title>
            <Dialog.Content>
              <Paragraph>All Fields Are Required</Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={() => setError(false)}>OK</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 20,
  },
});

export default NewClient;
