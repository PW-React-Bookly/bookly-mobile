import {Text, View, StyleSheet, FlatList, RefreshControl} from "react-native";
import React, {useState} from "react";
import BookingTypeButton from "./BookingTypeButton";
import BookingsTable from "./BookingsTable";

function MyBookingsScreen({navigation}) {

    const [selectedValue, setSelectedValue] = useState("Flats");

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <BookingTypeButton value={"Flats"} selectedValue={selectedValue} setSelectedValue={setSelectedValue} />
                <BookingTypeButton value={"Cars"} selectedValue={selectedValue} setSelectedValue={setSelectedValue} />
                <BookingTypeButton value={"Parking"} selectedValue={selectedValue} setSelectedValue={setSelectedValue} />
            </View>
            <View style={styles.tableContainer}>
                <BookingsTable />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    tableContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'stretch',
        marginHorizontal: '15%',
        marginVertical: '0.5%'
    },
    row: {
        marginTop: '1%',
        marginBottom: '0.5%',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
});

export default MyBookingsScreen;