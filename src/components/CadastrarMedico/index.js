import React from 'react';
import {Text, TextInput, View, Pressable, Keyboard, StyleSheet} from "react-native";
import {Telefone} from './telefone';
import { ReturnArrow } from '../ReturnArrow/';
import { Especialidades } from '../DropDown/dropdown';

export default function CadastrarMedico(){
    return(
        <Pressable on Press={Keyboard.dismiss}>
            <ReturnArrow/>
            <View style={style.boxTitle}>
                <Text style={style.textTitle}>Cadastro de Médico</Text>
            </View>
            <View style={style.dadosmedico}>
                <View>
                    <Text style={style.formLabel}>Nome</Text>
                    <TextInput
                        style={style.input}
                    />
                </View>
                <View>
                    <Text style={style.formLabel}>E-mail</Text>
                    <TextInput
                        style={style.input}
                    />
                </View>

                <Telefone/>

                <Especialidades/>

                <View>
                    <Text style={style.formLabel}>Endereço</Text>
                    <TextInput
                        style={style.input}
                    />
                </View>
                <View>
                    <Text style={style.formLabel}>Observações</Text>
                    <TextInput
                        style={style.input}
                    />
                </View>
            </View>
            
        </Pressable>
    );
}

const style = StyleSheet.create({
    boxTitle: {
        justifyContent:"center",
        paddingLeft:40,
        paddingRight:40,
        paddingBottom:30,
    },
    textTitle: {
        color:"#212F47",
        fontSize:28,
        fontWeight:"normal",
    },
    dadosmedico: {
        flexDirection: "column",
        justifyContent: "space-evenly"
    },
    formLabel: {
        color:"#212F47",
        fontSize:24,
        paddingLeft:40,
        fontWeight:"100",
        paddingTop: 20,
    },
    input: {
        height:50,
        width:320,
        alignSelf: "center",
        borderRadius:50,
        borderWidth:3,
        borderColor:"#7EA1C4",
        backgroundColor:"#F1F5F9",
        margin:12,
        paddingLeft:20,
        paddingRight:20,
        marginBottom:30
    }
})