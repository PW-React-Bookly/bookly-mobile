import {GetBookablesArgsInterface} from "../../interfaces/getBookablesArgsInterface";
import React, {Dispatch, SetStateAction, useEffect, useState} from "react";
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import DateInput from "./DateInput";
import moment from "moment";
import PriceFilter from "./PriceFilter";
import {dateToString} from "../../../utils/dateToString";

export default function DefaultFilters (props: {args: GetBookablesArgsInterface, setFilterArgs: Dispatch<SetStateAction<Map<string, string>>>}) {

    const [dateFrom, setDateFrom] = useState(moment().toDate())
    const [dateTo, setDateTo] = useState(moment().add(7, "days").toDate())
    const [priceFrom, setPriceFrom] = useState(0)
    const [priceTo, setPriceTo] = useState(9999999)

    useEffect(() => {
        handleFilter();
    }, [dateFrom, dateTo, priceFrom, priceTo]);
    function handleFilter() {
        props.setFilterArgs( map => {
            map.set("dateFrom", dateToString(dateFrom));
            map.set("dateTo", dateToString(dateTo));
            map.set("priceFrom", priceFrom.toString());
            map.set("priceTo", priceTo.toString());
            return map;
        });



    }

    return (
        <View>
            <View style={{flexDirection: 'row'}}>
                <DateInput date={dateFrom} setDate={setDateFrom} label={"From"}/>
                <DateInput date={dateTo} setDate={setDateTo} label={"To"}/>
                <PriceFilter from={priceFrom} to={priceTo} setFrom={setPriceFrom} setTo={setPriceTo} label="Price range"/>
            </View>
        </View>
    );
}