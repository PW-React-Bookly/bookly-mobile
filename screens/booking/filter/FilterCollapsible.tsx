import React, {Dispatch, SetStateAction} from "react"
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import {Collapse, CollapseHeader, CollapseBody} from 'accordion-collapse-react-native';
import CarFilterPanel from "./CarFilterPanel";
import {GetBookablesArgsInterface} from "../../interfaces/getBookablesArgsInterface";
import {dateToString} from "../../../utils/dateToString";

const FilterCollapsible = (props: {
    children: React.ReactNode, filterArgs: Map<string, string>, setArgs: any
}) => {

    function setFilters() {
        props.setArgs(prev => ({
            ...prev,
            pageContext: {pageSize: prev.pageContext.pageSize, currentPage: 0},
            queryParameters: props.filterArgs
        }))
    }

    return (
        <Collapse>
            <CollapseHeader>
                <View style={styles.button}>
                    <Text style={styles.buttonLabel}>Filters</Text>
                </View>
            </CollapseHeader>
            <CollapseBody>
                <View>
                    <View style={{flexDirection: 'row'}}>
                        {props.children}
                    </View>
                    <TouchableOpacity
                        onPress={setFilters}
                        style={styles.button}>
                        <Text style={styles.buttonLabel}>
                            Apply
                        </Text>
                    </TouchableOpacity>
                </View>
            </CollapseBody>
        </Collapse>
    );
}

export default FilterCollapsible;

const styles = StyleSheet.create({
        button: {
            margin: 20,
            borderRadius: 50,
            backgroundColor: 'oldlace',
            marginHorizontal: '1%',
            minWidth: '10%',
            textAlign: 'center',
            width: 150,
            padding: 10
        },
        buttonLabel: {
            textAlignVertical: 'center',
            textAlign: 'center',
            fontSize: 18,
            fontWeight: '500',
            color: 'coral',
        },
    }
)