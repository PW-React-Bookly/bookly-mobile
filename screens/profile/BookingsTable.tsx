import {FlatList, RefreshControl} from "react-native";
import React, {Ref, useEffect, useState} from "react";
import BookingsTableItem from "./BookingsTableItem";
import {BookingInterface, } from "../interfaces/bookingInterface";

export default function BookingsTable(props: {
    bookings: BookingInterface[],
    fetchData: (boolean) => void,
    flatListRef: Ref<FlatList<BookingInterface>>
},) {
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
            ref={props.flatListRef}
            data={props.bookings}
            keyExtractor={(booking) => booking.id.toString()}
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