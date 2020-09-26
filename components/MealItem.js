import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'

const MealItem = props => {
    return (
        <View style={styles.mealItem}>
            <TouchableOpacity onPress={props.onSelectMeal}>
                <View>
                    <View style={{...styles.mealRow, ...styles.mealHeader}}>
                        <ImageBackground source={{uri: props.image}} style={styles.bgImage}>
                        <Text numberOfLines={1} style={styles.title}>{props.title}</Text>
                        </ImageBackground>
                    </View>
                    <View style={{...styles.mealRow, ...styles.mealDetails}}>
                        <Text>{props.duration}m</Text>
                        <Text>{props.complexity.toUpperCase()}</Text>
                        <Text>{props.affordability.toUpperCase()}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    mealItem: { height: 200, width: "100%", backgroundColor: "#ccc", marginTop: 10, borderTopLeftRadius: 10, borderTopRightRadius: 10 , overflow: "hidden" },
    mealRow: { flexDirection: "row" },
    mealHeader: { height: "90%" },
    mealDetails: { paddingHorizontal: 10, justifyContent: "space-between" },
    bgImage: { width: "100%", height: "100%", justifyContent: "flex-end"},
    title: {color: "white", fontSize: 20, backgroundColor: "rgba(0,0,0,0.5)", paddingVertical: 5, paddingHorizontal: 12, textAlign: "center" }
});

export default MealItem;