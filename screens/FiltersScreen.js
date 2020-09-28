import React, { useState, useEffect, useCallback } from 'react';
import { View,  Text, StyleSheet, Switch } from 'react-native';
import { useDispatch } from 'react-redux'

import HeaderButton from '../components/HeaderButton'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'

import Colors from '../constans/Colors'
import { setFilters } from '../store/actions/meals';

const FilterSwitch = props => {
    return (
        <View style={styles.filterContaioner}>
            <Text>{props.label}</Text>
            <Switch trackColor={{ true: Colors.primaryColor}} thumbColor={Colors.primaryColor} value={props.state} onValueChange={props.onChange}  />
        </View>
    );
}

const FiltersScreen = props => {
    const { navigation } = props;

    const [isGlutenFree, setisGlutenfree] = useState(false);
    const [isLactoseFree, setisLactosefree] = useState(false);
    const [isVegan, setisVegan] = useState(false);
    const [isVegetarian, setisVegetarian] = useState(false);

    const dispatch = useDispatch();

    const saveFilters = useCallback(() => {
        const appliedFilters = {
            glutenFree: isGlutenFree,
            lactoseFree: isLactoseFree,
            vegan: isVegan,
            vegeterian: isVegetarian
        };

        dispatch(setFilters(appliedFilters));

    }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian, dispatch] );

    useEffect(() => {
        props.navigation.setParams({save: saveFilters});
    }, [saveFilters] );

    return (
        <View style={styles.screen}>
            <Text style={styles.title}> Available Filters </Text>
            <FilterSwitch label="Gluten-free" state={isGlutenFree} onChange={newValue => setisGlutenfree(newValue)} />
            <FilterSwitch label="Lactose-free" state={isLactoseFree} onChange={newValue => setisLactosefree(newValue)} />
            <FilterSwitch label="Vegan" state={isVegan} onChange={newValue => setisVegan(newValue)} />
            <FilterSwitch label="Vegetarian" state={isVegetarian} onChange={newValue => setisVegetarian(newValue)} />
        </View>
    );
}

FiltersScreen.navigationOptions = navData => {
    return {
        headerTitle: "Filter Meals",
        headerRight: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title="Save" iconName="ios-save" onPress={ navData.navigation.getParam('save') } />
            </HeaderButtons>
        )
    };

}

const styles = StyleSheet.create({
    screen: { flex: 1, alignItems: "center" },
    filterContaioner: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "80%", marginVertical: 5 },
    title: { fontSize: 22, margin: 20, textAlign: "center" }
});

export default FiltersScreen;