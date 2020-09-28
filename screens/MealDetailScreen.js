import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { View, Text, StyleSheet, Button } from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons'



import { MEALS, CATEGORIES } from "../data/dummy-data"
import HeaderButton from '../components/HeaderButton'
import { toggleFavorite } from '../store/actions/meals'

const MealDetailScreen = props => {
    const availableMeals = useSelector(state => state.meals.meals);

    const mealId = props.navigation.getParam("mealId");

    const currentMealIsFavorite = useSelector(state => 
        state.meals.favoriteMeals.some(meal => meal.id === mealId)
    );

    const selectedMeal = availableMeals.find(meal => meal.id === mealId);

    const dispatch = useDispatch();

    const toggleFavoriteHandler = useCallback (() => {
        dispatch(toggleFavorite(mealId));
    }, [dispatch, mealId]);

    useEffect(() => {
        props.navigation.setParams({toggleFav: toggleFavoriteHandler})
    }, [toggleFavoriteHandler]);

    useEffect(() => {
        props.navigation.setParams({isFav: currentMealIsFavorite})
    }, [currentMealIsFavorite]);

    return (
        <View style={styles.screen}>
            <Text> {selectedMeal.title} </Text>
            <Button title="Go Back!" onPress={() => {
                props.navigation.popToTop();
            }} />
        </View>
    );
}

MealDetailScreen.navigationOptions = (navigationData) => {

    const catId = navigationData.navigation.getParam("categoryId");
    var selectedCategory = CATEGORIES.find(cat => cat.id === catId);
    var CategoryColor;

    if(selectedCategory === undefined)
        CategoryColor = "orange"
    else
        CategoryColor = selectedCategory.color
    
    // const mealId = navigationData.navigation.getParam("mealId");
    const mealTitle = navigationData.navigation.getParam("mealTitle");
    const toggleFavorite = navigationData.navigation.getParam('toggleFav');
    const isFavorite = navigationData.navigation.getParam('isFav')
    // const selectedMeal = MEALS.find(meal => meal.id === mealId);


    return {
        headerTitle: mealTitle,
        headerRight: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title="Favorite" iconName={isFavorite ? 'ios-star' : 'ios-star-outline'} onPress={toggleFavorite} />
            </HeaderButtons>
        ),
        headerStyle: {
            backgroundColor: Platform.OS === "android" ? CategoryColor : ""
        },
        headerTintColor: Platform.OS === "android" ? "white" : CategoryColor
    };
};

const styles = StyleSheet.create({
    screen: { flex: 1, justifyContent: "center", alignItems: "center" }
});

export default MealDetailScreen;