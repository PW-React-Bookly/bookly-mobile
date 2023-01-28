import React, {Dispatch, SetStateAction, useState} from "react"
import {
    View,
    TextInput,
    StyleSheet, Text
} from "react-native";
import {GetBookablesArgsInterface} from "../../interfaces/getBookablesArgsInterface";

const CarFilterPanel = (props: {args: GetBookablesArgsInterface, setFilterArgs: Dispatch<SetStateAction<Map<string, string>>>}) => {
    const [value, setValue] = useState('');
    const handleCarTypeChange = (input: string) => {
        setValue(input)
        props.setFilterArgs(map => {
            if(input !== '')
                map.set('carType',`${input}`);
            else
                map.delete('carType');
            return map;
        })
    }

    return (
        <View>
            <View>
                <Text  style={{...styles.inputStyle, textAlign: 'center', textAlignVertical: 'center', height: 'auto'}}>
                    Car type
                </Text>
                <TextInput
                    maxLength={30}
                    style={styles.inputStyle}
                    placeholder="Car Type"
                    onChangeText={handleCarTypeChange}
                    value={value}
                />
            </View>
        </View>
    );
}

export default CarFilterPanel;

const styles = StyleSheet.create({
        inputStyle: {
            marginTop: 20,
            marginLeft: 20,
            width: 300,
            height: 40,
            paddingHorizontal: 10,
            borderRadius: 50,
            backgroundColor: '#DCDCDC',
        },
    }
);