import {FlatList, RefreshControl, Text, TouchableOpacity} from "react-native";
import React, {useState} from "react";
import BookingsTableItem from "./BookingsTableItem";

export default function BookingsTable() {
    const [loading, setLoading] = useState(true);

    return (
        <FlatList
            data={data}
            keyExtractor={(item, index) => item}
            refreshControl={
                <RefreshControl
                    refreshing={loading}
                />
            }
            renderItem={({item}) => (
                <BookingsTableItem data={item} />
            )}
        />
    );
}

const data = ["one", "two", "three", "four", "five"];