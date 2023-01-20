import {FlatList, RefreshControl, Text, TouchableOpacity} from "react-native";
import React, {useEffect, useRef, useState} from "react";
import BookingsTableItem from "./BookingsTableItem";
import {BookingInterface, BookableType} from "../interfaces/bookingInterface";
import {UserInterface} from "../interfaces/userInterface";

export default function BookingsTable(props: {bookings: BookingInterface[], fetchData: (boolean) => void}) {
    const [loading, setLoading] = useState(false);
    function handleFetchData() {
        setLoading(true);
        props.fetchData(false);

    }
    function handleRefresh() {
        setLoading(true);
        props.fetchData(true);

    }

    useEffect(() => {
        setLoading(false);
    }, [props.bookings]);

    return (
        <FlatList
            data={props.bookings}
            keyExtractor={(booking, index) => booking.id.toString()}
            refreshControl={
                <RefreshControl
                    refreshing={loading}
                    onRefresh={handleRefresh}
                />
            }
            onEndReached={handleFetchData}
            renderItem={({item}) => (
                <BookingsTableItem booking={item} />
            )}
        />
    );
}