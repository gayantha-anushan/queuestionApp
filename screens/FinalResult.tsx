import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../RootStackParamList'

type Props = NativeStackScreenProps<RootStackParamList,'FinalResult'>

const FinalResult = ({route,navigation}: Props) => {

  const {allQuestion,correctAnswers} = route.params
  return (
    <View style={{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      height:'100%',
      width:'100%',
      backgroundColor:'#fff'
    }}>
      <View style={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
      }}>
        <Text style={{
          color:'#0f0',
          fontWeight:'bold',
          fontSize:30
        }}>Congratulations!</Text>
        <Text style={{
          fontSize:18,
          fontWeight:'bold',
          color:'#000'
        }}>{(correctAnswers/allQuestion)*100}%</Text>
        <Text>See What you missed!</Text>
        <Text>Let's Go again</Text>
      </View>
    </View>
  )
}

export default FinalResult

const styles = StyleSheet.create({})