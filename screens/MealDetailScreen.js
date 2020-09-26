import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import { MEALS, CATEGORIES } from "../data/dummy-data"

const MealDetailScreen = props => {
    const mealId = props.navigation.getParam("mealId");

    const selectedMeal = MEALS.find(meal => meal.id === mealId);

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
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
    
    const mealId = navigationData.navigation.getParam("mealId");
    const selectedMeal = MEALS.find(meal => meal.id === mealId);


    return {
        headerTitle: selectedMeal.title,
        headerStyle: {
            backgroundColor: Platform.OS === "android" ? selectedCategory.color : ""
        },
        headerTintColor: Platform.OS === "android" ? "white" : selectedCategory.color
    };
};

const styles = StyleSheet.create({
    screen: { flex: 1, justifyContent: "center", alignItems: "center" }
});

export default MealDetailScreen;