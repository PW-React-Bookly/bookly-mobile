import React, {Dispatch, SetStateAction} from "react"
import {
    View,
    TextInput,
    StyleSheet
} from "react-native";
import {GetBookablesArgsInterface} from "../../interfaces/getBookablesArgsInterface";

const FilterPanel = (props: {args: GetBookablesArgsInterface, setArgs: Dispatch<SetStateAction<GetBookablesArgsInterface>>}) => {

    const handleCarTypeChange = (input: string) => {
        props.setArgs((prev: GetBookablesArgsInterface) => {
            const map = prev.queryParameters;
            if(input !== '')
                map.set('carType',`${input}`);
            else
                map.delete('carType');
            return {...prev, pageContext: {pageSize:prev.pageContext.pageSize, currentPage: 0}, queryParameters: map};
        })
    }

    return (
        <View>
            <View>
                <TextInput
                    maxLength={30}
                    style={styles.inputStyle}
                    placeholder="Car Type"
                    onChangeText={handleCarTypeChange}
                    value={props.args.queryParameters.get('carType')}
                />
            </View>
        </View>
    );
}

export default FilterPanel;

const styles = StyleSheet.create({
        inputStyle: {
            marginTop: 20,
            width: 300,
            height: 40,
            paddingHorizontal: 10,
            borderRadius: 50,
            backgroundColor: '#DCDCDC',
        },
    }
);