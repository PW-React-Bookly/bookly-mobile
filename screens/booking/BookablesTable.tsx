import {FlatList, RefreshControl} from "react-native";
import React, {Ref, useEffect} from "react";
import {BookableInterface} from "../interfaces/bookableInterface";
import BookablesTableItem from "./BookablesTableItem";
import { useRecoilValue} from "recoil";
import {loadingAtom} from "../../utils/recoil/loadingAtom";

export default function BookablesTable(props: {
    bookables: BookableInterface[],
    fetchData: (boolean) => void,
    flatListRef: Ref<FlatList<BookableInterface>>
},) {
    const loading = useRecoilValue(loadingAtom);
    function handleFetchData() {
        props.fetchData(false);

    }
    function handleRefresh() {
        props.fetchData(true);

    }

    useEffect(() => {
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