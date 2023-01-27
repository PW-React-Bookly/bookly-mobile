import {FlatList, StyleSheet, View} from "react-native";
import React, {useEffect, useRef, useState} from "react";
import {BookableType} from "../interfaces/bookingInterface";
import BookingTypeButton from "../profile/BookingTypeButton";
import {BookableInterface} from "../interfaces/bookableInterface";
import {GetBookablesArgsInterface} from "../interfaces/getBookablesArgsInterface";
import useGetBookables from "./useGetBookables";
import BookablesTable from "./BookablesTable";
import FilterCollapsible from "./filter/FilterCollapsible";

function BookingScreen({ navigation }) {
    const flatListRef = useRef<FlatList>()
    const [bookables, setBookables] = useState<BookableInterface[]>([]);
    const [args, setArgs] = useState<GetBookablesArgsInterface>({bookableType: BookableType.Flat,
        pageContext: {currentPage: 0, pageSize: 10}, queryParameters: new Map<string, string>()});
    const {
        data
    } = useGetBookables(args);

    useEffect(() => {
        if (args.pageContext.currentPage == 0) {
            setBookables(data);
        } else {
            setBookables(prev => prev.concat(data));
        }
    }, [data]);

    function setBookableType(bookable: BookableType) {
        setArgs({bookableType: bookable, pageContext: {pageSize: 10, currentPage: 0}, queryParameters: new Map<string, string>()});
        if(flatListRef.current.props.data.length > 0)
            flatListRef.current.scrollToIndex({animated: true, index:0})
    }
    function fetchData(reset: boolean) {
        if (reset) {
            setArgs(prev => ({pageContext: {pageSize: 10, currentPage: 0}, bookableType: prev.bookableType,
                queryParameters: prev.queryParameters}));
        } else {
            if(bookables.length % args.pageContext.pageSize !== 0) return;
            setArgs(prev => ({pageContext: {pageSize: 10, currentPage: prev.pageContext.currentPage + 1},
                bookableType: prev.bookableType, queryParameters: prev.queryParameters}));
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <BookingTypeButton label={"Flats"} value={BookableType.Flat} selectedValue={args.bookableType}
                                   setSelectedValue={setBookableType}/>
                <BookingTypeButton label={"Cars"} value={BookableType.Car} selectedValue={args.bookableType}
                                   setSelectedValue={setBookableType}/>
                <BookingTypeButton label={"Parking"} value={BookableType.Park} selectedValue={args.bookableType}
                                   setSelectedValue={setBookableType}/>
            </View>
            <FilterCollapsible  args={args} setArgs={setArgs}/>
            <View style={styles.tableContainer}>
                <BookablesTable bookables={bookables} fetchData={fetchData} flatListRef={flatListRef}/>
            </View>
        </View>
    );
}

export default BookingScreen;

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
