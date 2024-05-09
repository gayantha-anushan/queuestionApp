import { Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View, useColorScheme } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../RootStackParamList';


const SignIn = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const isDarkMode = useColorScheme() === 'dark';

    const onLoginButtonPress = () => {
        navigation.navigate("PaperList")
    }

  return (
    <View style={{
        backgroundColor:isDarkMode ? "#000":"#fff",
        height:"100%",
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    }}>
      <View style={styles.container}>
      <Text style={isDarkMode ? styles.LoginTitleDark : styles.LoginTitle} >Login to Your Account</Text>
      <Text style={styles.label}>Email Address</Text>
      <TextInput style={styles.formField} />
      <Text style={styles.label}>Password</Text>
      <TextInput style={styles.formField}/>
      <View style={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
      }}>
        <TouchableOpacity onPress={()=>onLoginButtonPress()} style={styles.signIn}>
            <Text style={styles.btnText}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.forgotPw}>
            <Text style={styles.btnTextFgt}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      </View>
    </View>
  )
}

export default SignIn

const styles = StyleSheet.create({
    LoginTitle:{
        fontWeight:'bold',
        fontSize:20,
        color:'#000',
        width:'100%',
        marginBottom:50,
        textAlign:'center'
    },
    LoginTitleDark:{
        fontWeight:'bold',
        fontSize:20,
        color:'#fff'
    },
    container:{
        width:'95%'
    },
    label:{
        //width:'100%'
        fontSize:16
    },
    formField:{
        backgroundColor:'#eee',
        borderRadius:30,
        margin:10,
        paddingLeft:20,
        paddingRight:20
    },
    signIn:{
        backgroundColor:'#9563F1',
        width:'70%',
        textAlign:'center',
        padding:8,
        borderRadius:20,
        marginTop:10
    },
    btnText:{
        fontSize:18,
        fontWeight:'bold',
        textAlign:'center',
        color:'#fff'
    },
    btnTextFgt:{
        fontSize:18,
        //fontWeight:'',
        textAlign:'center',
        textDecorationLine:'underline',
        marginTop:10
    },
    forgotPw:{
        //
    }
})