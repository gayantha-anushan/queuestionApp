import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../RootStackParamList'
import { GetDefaultPaperList } from '../Papers'

type Props = NativeStackScreenProps<RootStackParamList,'Queuestion'>
const Queuestion = ({route,navigation}: Props) => {

  //const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  const { paperIndex, questionId,correctAnswers} = route.params;
  const paperDetails = GetDefaultPaperList()

  const [Queuestion, setQueuestion] = useState<any>(null)
  const [allQueuestions, setAllQueuestions] = useState(0)
  const [setselectedAnswer, setSetselectedAnswer] = useState("")


  useEffect(() => {
    setAllQueuestions(paperDetails[paperIndex].questions.length)
    setQueuestion(paperDetails[paperIndex].questions[questionId])
  }, [questionId])
  
  function GoNext(itm : string){
      var newCorrect = correctAnswers
      if(Queuestion.correct == itm){
        newCorrect = newCorrect + 1
      }
      if(allQueuestions < questionId + 2){
        GoCongrats(newCorrect)
      }else{
        navigation.navigate("Queuestion",{
          paperIndex:paperIndex,
          questionId:questionId + 1,
          correctAnswers:newCorrect
        })
      }
  }

  function GoCongrats(corrects : number){
    navigation.navigate("FinalResult",{
      allQuestion:allQueuestions,
      correctAnswers:corrects
    })
  }

  return (
    <View style={styles.Maincontainer}>
      <View style={styles.TopBar}>
        <View style={styles.MarkContainer}>
            <Text style={styles.Marks}>{questionId + 1}/{allQueuestions}</Text>
        </View>
        <View style={styles.RightPanel}>
            <Text style={styles.TimeTitle}>Time Remaining</Text>
            <Text style={styles.RemainingTime}>59m:14s</Text>
        </View>
      </View>
      {
        Queuestion != null ? (<>
        <Text style={styles.Queuestition}>{Queuestion.question}</Text>
        <View style={styles.answerHolder}>
          {
            Queuestion.answers.map((itm,indx)=>(
              <Text style={styles.answer} onPress={()=>GoNext(itm)} >{itm}</Text>
            ))
          }
        </View>
        </>) : null
      }
      <View style={styles.bottomBar}>
        <TouchableOpacity style={{
          padding:8,
          backgroundColor:'#eee',
          paddingHorizontal:40
        }}>
          <Text style={{
            fontSize:16,
            color:'#000',
            fontWeight:'bold'
          }}>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>GoNext("")} style={{
          padding:8,
          backgroundColor:'#9563F1',
          paddingHorizontal:40
        }}>
          <Text style={{
            fontSize:16,
            fontWeight:'bold',
            color:'#fff'
          }}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Queuestion

const styles = StyleSheet.create({
    Maincontainer:{
        height:'100%',
        backgroundColor:'#fff'
    },
    TopBar:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row'
    },
    MarkContainer:{
        backgroundColor:'#9563F1',
        padding:8
    },
    Marks:{
        fontWeight:'bold',
        color:'#fff'
    },
    RemainingTime:{
      fontSize:18,
      color:'#9563F1'
    },
    RightPanel:{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      flexDirection:'row',
      paddingRight:8
    },
    TimeTitle:{
      fontSize:16,
      paddingRight:12
    },
    Queuestition:{
        color:'#000',
        padding:10,
        margin:8,
        fontSize:18
    },
    answerHolder:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    answer:{
        backgroundColor:'#eee',
        margin:4,
        padding:8,
        width:'70%',
        borderRadius:15,
        fontSize:16
    },
    bottomBar:{
      position:'absolute',
      bottom:0,
      display:'flex',
      justifyContent:'space-evenly',
      alignItems:'center',
      flexDirection:'row',
      width:'100%'
    }
})