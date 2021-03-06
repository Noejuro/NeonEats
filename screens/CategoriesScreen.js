import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Platform } from 'react-native';

import { CATEGORIES } from '../data/dummy-data'
import Colors from '../constans/Colors'
import CategoryGridTile from '../components/CategoryGridTile'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'



const CategoriesScreen = props => {
    const renderGridItem = (itemData) => {
        return (
            <CategoryGridTile 
            color={itemData.item.color}
            title={itemData.item.title} 
            onSelect={() => {
                props.navigation.navigate({routeName: "CategoryMeals", params: { categoryId: itemData.item.id }})
            } } />
        );
    }

    return (
        <FlatList keyExtractor={(item, index) => item.id} data={ CATEGORIES } renderItem={renderGridItem} numColumns={2} />
    );
};

CategoriesScreen.navigationOptions = {
    headerTitle: 'Meal Categories',
    headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primaryColor : ""
    },
    headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
    headerLeft: <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="Menu" iconName="ios-menu" onPress={() => {} }  />
    </HeaderButtons>
};

const styles = StyleSheet.create({
});

export default CategoriesScreen;