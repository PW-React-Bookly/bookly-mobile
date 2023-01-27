import {FlatList, RefreshControl} from "react-native";
import React, {Ref, useEffect, useState} from "react";
import {BookableInterface} from "../interfaces/bookableInterface";
import BookablesTableItem from "./BookablesTableItem";

export default function BookablesTable(props: {
    bookables: BookableInterface[],
    fetchData: (boolean) => void,
    flatListRef: Ref<FlatList<BookableInterface>>
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
    }, [props.bookables]);

    return (
        <FlatList
            ref={props.flatListRef}
            data={props.bookables}
            keyExtractor={(bookable) => bookable.id}
            refreshControl={
                <RefreshControl
                    refreshing={loading}
                    onRefresh={handleRefresh}
                />
            }
            onEndReached={handleFetchData}
            renderItem={({item}) => (
                <BookablesTableItem bookable={item} />
            )}
        />
    );
}