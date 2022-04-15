import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    boxTitle: {
        alignItems:"center",
        justifyContent:"center",
        paddingLeft:40,
        paddingRight:40,
        paddingBottom:30,
    },
    textTitle: {
        textAlign:"center",
        color:"#000000",
        fontSize:45,
        fontWeight:"normal",
    },
    formLabel: {
        color:"#212F47",
        fontSize:24,
        paddingLeft:30,
        fontWeight:"100",
        paddingTop: 20,
    },
    input: {
        height:65,
        width:320,
        alignSelf: "center",
        borderRadius:50,
        borderWidth:3,
        borderColor:"#7EA1C4",
        backgroundColor:"#F1F5F9",
        margin:12,
        paddingLeft:10,
        marginBottom:30,
    },
    errorMessage:{
        fontSize:12,
        color:"red",
        fontWeight:"bold",
        paddingLeft:30,
    },
});

export default styles