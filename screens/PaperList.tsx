import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../RootStackParamList'
import { GetDefaultPaperList } from '../Papers'

type Props = {}

const PaperList = (props: Props) => {

    const myPaperList = GetDefaultPaperList()

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

    const onAnsweringPress = (index : number) => {
        navigation.navigate('Queuestion',{
            paperIndex:index,
            questionId:0,
            correctAnswers:0
        })
    }

  return (
    <View style={styles.MainContainer}>
      <TextInput placeholder='Search' style={styles.SearchBar}/>
      <ScrollView>
    {
        myPaperList.map((paper,index)=>(
            <TouchableOpacity key={index} onPress={()=>onAnsweringPress(index)} style={styles.ListItem} >
                <View>
                    <Text style={styles.ListItemTitle}>{paper.title}</Text>
                    <Text style={styles.ListItemDate}>{paper.year}</Text>
                </View>
                <View style={styles.ProgressContainer}>
                    <View style={styles.subContainer}>
                        <Text>Score</Text>
                        <Text>12%</Text>
                    </View>
                    <View style={styles.subContainer}>
                        <Text>Progress</Text>
                        <Text>50%</Text>
                    </View>
                </View>
            </TouchableOpacity>
        ))
    }
      
      
      
      
      </ScrollView>
    </View>
  )
}

export default PaperList

const styles = StyleSheet.create({
    SearchBar:{
        backgroundColor:'#eee',
        padding:8,
        margin:10,
        borderRadius:20,
        paddingLeft:15,
        paddingRight:15
    },
    MainContainer:{
        height:'100%',
        backgroundColor:'#fff'
    },
    ListItem:{
        padding:8,
        margin:8,
        borderRadius:10,
        backgroundColor:'#eee',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row'
    },
    ProgressContainer:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    ListItemTitle:{
        fontSize:18
    },
    ListItemDate:{
        fontSize:20,
        fontWeight:'bold'
    },
    subContainer:{
        padding:5,
        margin:5
    }
})