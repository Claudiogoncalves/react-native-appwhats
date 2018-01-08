import React, { Component } from 'react';
import {  
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux'; 

const formRegister =  props => {
  return (
    <View style={styles.container}>    
      <View style={styles.form}>
        <TextInput value={props.nome} style={styles.formInput} placeholder='Nome' />
        <TextInput value={props.email} style={styles.formInput} placeholder='Email' />
        <TextInput value={props.senha} style={styles.formInput} placeholder='Senha' />      
      </View>
      <View style={styles.button}>
        <Button title="Cadastrar" onPress={() => false} color='#492267' />
      </View>            
    </View>  
  );  
}

const mapStateToProps = state => ({
  nome: state.AuthReducer.nome,
  email: state.AuthReducer.email,
  senha: state.AuthReducer.senha,
});

export default connect(mapStateToProps, null)(formRegister);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,    
    backgroundColor: '#F5FCFF',
  }, 
  form: {
    flex: 4,
    justifyContent: 'center', 
  },
  button: {
    flex: 1,    
  },
  formInput: {
    fontSize: 20,
    height: 45,
  },  
});
