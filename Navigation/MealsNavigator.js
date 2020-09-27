import React from 'react'
import { createStackNavigator } from "react-navigation-stack"
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs"
import { Ionicons } from '@expo/vector-icons'

import CategoriesScreen from "../screens/CategoriesScreen"
import CategoryMealsScreen from "../screens/CategoryMealsScreen"
import MealDetailScreen from "../screens/MealDetailScreen"
import FavoritesScreen from "../screens/FavoritesScreen"
import FiltersScreen from '../screens/FiltersScreen'

import Colors from '../constans/Colors'

const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals: {
        screen: CategoryMealsScreen
    },
    MealDetail: MealDetailScreen
});

const FavNavigator = createStackNavigator({
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === "android" ? "orange" : ""
        },
        headerTintColor: Platform.OS === "android" ? "white" : "orange",
        headerTitle: "Favorites"
    }
});

const FiltersNavigator = createStackNavigator({
    Filters: FiltersScreen
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === "android" ? "#3fb2c1" : ""
        },
        headerTintColor: Platform.OS === "android" ? "white" : "#3fb2c1",
        headerTitle: "Favorites"
    }
});



const MealsFavTabNavigator = createBottomTabNavigator({
    Meals: { screen: MealsNavigator, navigationOptions: { 
        tabBarIcon: (tabInfo) => {
                return <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
            } 
        } 
    },
    Favorites: {
        screen: FavNavigator, 
        navigationOptions: {
            tabBarLabel: "Favorites",
            tabBarIcon: (tabInfo) => {
                return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
            } 
        }
    },
    Filters: {
        screen: FiltersNavigator, 
        navigationOptions: {
            tabBarLabel: "Filters",
            tabBarIcon: (tabInfo) => {
                return <Ionicons name="ios-funnel" size={25} color={tabInfo.tintColor} />
            } 
        }
    },
}, {
    tabBarOptions: {
        activeTintColor: Colors.primaryColor
    }
});




export default createAppContainer(MealsFavTabNavigator);