export type RootStackParamList = {
    SignIn:undefined,
    PaperList:undefined,
    Queuestion:{
        paperIndex:number,
        questionId:number,
        correctAnswers:number
    },
    FinalResult:{
        paperIndex:number,
        correctAnswers:number
    }
}