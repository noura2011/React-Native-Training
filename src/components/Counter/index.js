import React, { useState } from "react";
import { Text,View,Pressable } from "react-native";
import styles from "./styles";
function Counter(){
    const [counter,setcounter]=useState(0);
    const Increment=()=>{setcounter((val)=>val+1)};
    const Minus =()=>{setcounter((val)=>val-1)};
    return(
        <View style={styles.container}>
            <Pressable style={styles.button} onPress={Increment}>
                <Text style={styles.signText}>{"+"}</Text>
            </Pressable>
            <Text style={styles.TextCounter}>{counter}</Text>
            <Pressable style={styles.button} onPress={Minus}>
                <Text style={styles.signText}>{"-"}</Text>
            </Pressable>
        </View>
    )
}
export {Counter}