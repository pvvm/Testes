import React, {useState} from "react"
import {TouchableOpacity, Text, TextInput, View, Pressable, Keyboard} from "react-native"
import ResultImc from "./ResultImc/"
import styles from "./style"

export default function Form(){

const [height, setHeight] = useState(null)
const [weight, setWeight] = useState(null)
const [messageImc, setMessageImc] = useState("Preencha o peso e a altura")
const [imc, setImc] = useState(null)
const [textButton, setTextButton] = useState("Calcular")
const [errorMessage, setErrorMessage] = useState(null)

function imcCalculator() {
    let heightFormat = height.replace(",", ".")
    let weightFormat = weight.replace(",", ".")
    return setImc((weightFormat/(heightFormat*heightFormat)).toFixed(2))
}

function validationImc() {
    if(weight != null && height != null) {
        imcCalculator()
        setHeight(null)
        setWeight(null)
        setErrorMessage(null)
        setMessageImc("Seu imc é igual:")
        setTextButton("Calcular novamente")
        return
    }
    if(imc == null)
        setErrorMessage("Campo obrigatório*")
    setImc(null)
    setTextButton("Calcular")
    setMessageImc("Preencha o peso e a altura")
}

    return(
        <View style={styles.formContext}>
            {imc == null ?
            <Pressable onPress={Keyboard.dismiss} style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setHeight}
                    value={height}
                    placeholder="Ex. 1.75"
                    keyboardType="numeric"
                />
                <Text style={styles.formLabel}>Peso</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setWeight}
                    value={weight}
                    placeholder="Ex. 75.365"
                    keyboardType="numeric"
                />
                {/*<Button
                    onPress={() => validationImc()}
                    title={textButton}/>
                */}
                <TouchableOpacity
                    style={styles.buttonCalculator}
                    onPress={() =>{validationImc()}}
                >
                    <Text style={styles.textButtonCalculator}>{textButton}</Text>
                </TouchableOpacity>
                </Pressable>
            :
            <View style={styles.exhibitionResultImc}>
                <ResultImc messageResultImc={messageImc} resultImc={imc}/>
                <TouchableOpacity
                    style={styles.buttonCalculator}
                    onPress={() =>{validationImc()}}
                >
                    <Text style={styles.textButtonCalculator}>{textButton}</Text>
                </TouchableOpacity>
            </View>
            }
        </View>
    );
}