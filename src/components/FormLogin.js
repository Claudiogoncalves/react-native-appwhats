import React, { Component } from 'react';
import {  
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux'; 

const formLogin = props => {
  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>
          WhatsApp Clone!
        </Text>
      </View>
      <View style={styles.form}>
        <TextInput value={props.email} style={styles.formInput} placeholder='E-mail' />
        <TextInput value={props.senha} style={styles.formInput} placeholder='Senha' />
        <TouchableHighlight onPress={() => Actions.formRegister()} >
          <Text style={styles.textRegister}>Ainda não tem cadastro? Cadastre-se</Text>
        </TouchableHighlight>
      </View>
      <View style={styles.button}>
        <Button title="Acessar" onPress={() => false} color='#492267' />
      </View>            
    </View>
  );    
}

const mapStateToProps = state => ({
  email: state.AuthReducer.email,
  senha: state.AuthReducer.senha
});

export default connect(mapStateToProps, null)(formLogin);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,    
    backgroundColor: '#F5FCFF',
  },
  containerTitle: {
    flex: 1,       
    alignItems: 'center',
    justifyContent: 'center', 
  },
  title: {
    fontSize: 25,     
  },
  form: {
    flex: 2,
  },
  button: {
    flex: 2,    
  },
  formInput: {
    fontSize: 20,
    height: 45
  },
  textRegister: {
    fontSize: 17,
  }
});
