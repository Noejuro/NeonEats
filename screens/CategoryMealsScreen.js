import React from 'react';

import { CATEGORIES, MEALS } from '../data/dummy-data'
import MealList from '../components/MealList'


const CategoryMealsScreen = props => {

    const catId = props.navigation.getParam("categoryId");

   

    const displayedMeals = MEALS.filter( meal => meal.categoryIds.indexOf(catId) >= 0 );

    
    return (
        <MealList listData={displayedMeals} navigation={props.navigation} categoryId={catId} />
    );
}

CategoryMealsScreen.navigationOptions = (navigationData) => {
    
    const catId = navigationData.navigation.getParam("categoryId");
    
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);


    return {
        headerTitle: selectedCategory.title,
        headerStyle: {
            backgroundColor: Platform.OS === "android" ? selectedCategory.color : ""
        },
        headerTintColor: Platform.OS === "android" ? "white" : selectedCategory.color
    };
};



export default CategoryMealsScreen;