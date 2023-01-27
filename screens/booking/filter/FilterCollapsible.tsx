import React, {Dispatch, SetStateAction} from "react"
import {View, Text, StyleSheet} from "react-native";
import {Collapse,CollapseHeader, CollapseBody} from 'accordion-collapse-react-native';
import FilterPanel from "./FilterPanel";
import {GetBookablesArgsInterface} from "../../interfaces/getBookablesArgsInterface";

const FilterCollapsible = (props: {args: GetBookablesArgsInterface, setArgs: Dispatch<SetStateAction<GetBookablesArgsInterface>> }) => {
   return (
       <Collapse>
           <CollapseHeader>
               <View style={styles.button}>
                   <Text style={styles.buttonLabel}>Filters</Text>
               </View>
           </CollapseHeader>
           <CollapseBody>
               <FilterPanel args={props.args} setArgs={props.setArgs}/>
           </CollapseBody>
       </Collapse>
   );
}

export default FilterCollapsible;

const styles = StyleSheet.create({
    button: {
        flex: 1,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderRadius: 4,
        backgroundColor: 'pastelBlue',
        alignSelf: 'flex-start',
        marginHorizontal: '1%',
        marginBottom: 6,
        minWidth: '30%',
        textAlign: 'center',
    },
    buttonLabel: {
        textAlign: 'center',
        fontSize: 22,
        fontWeight: '500',
        color: 'coral',
    },
    }
)