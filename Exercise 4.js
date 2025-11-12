import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Exercise4 = () => {
    return (
        <View style={styles.parent}>
            <View style={[styles.child, {backgroundColor: 'skyblue'}]}>
                <Text>Square 1</Text>
            </View>

            <View style={[styles.child, {backgroundColor: 'mediumaquamarine'}]}>
                <Text>Square 2</Text>
            </View>

            <View style={[styles.child, {backgroundColor: 'tomato'}]}>
                <Text>Square 3</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        backgroundColor: 'whitesmoke',
        marginTop: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    child: {
        width: 80,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Exercise4;