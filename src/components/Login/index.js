import React, {useState} from "react"
import {Text, TextInput, View, Pressable, Keyboard} from "react-native"
import styles from "./style"
import { LargeButton } from "../Button/"

export default function Login(){

const [email, setEmail] = useState(null)
const [password, setPassword] = useState(null)
const [errorMessage, setErrorMessage] = useState(null)

function emailPassCheck() {
    if(email == null || password == null) {
        setErrorMessage("Campo obrigatório*")
        return
    }
    setEmail(null)
    setPassword(null)
    setErrorMessage(null)
}

    return(
        <Pressable onPress={Keyboard.dismiss}>
            <View style={styles.boxTitle}>
                <Text style={styles.textTitle}>Health Manager</Text>
            </View>
            <Text style={styles.formLabel}>E-mail</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setEmail}
                    value={email}
                    placeholder="usuario@email.com"
                    keyboardType="email-address"
            />
            <Text style={styles.formLabel}>Senha</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setPassword}
                    value={password}
                    secureTextEntry={true}
            />
            <LargeButton text={"Login"} onPress={() =>{emailPassCheck()}}/>
            <LargeButton text={"Cadastre-se"}/>
        </Pressable>
    );
}