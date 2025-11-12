import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Exercise3E = () => {
    return (
        <View style={styles.parent}>
            <Text style={[styles.child, {backgroundColor: 'powderblue'}]}>
                Child One
            </Text>
            <Text style={[styles.child, {backgroundColor: 'skyblue'}]}>
                Child Two
            </Text>
            <Text style={[styles.child, {backgroundColor: 'steelblue'}]}>
                Child Three
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    parent: {
        flex: 1, // Parent must take up full screen height
        flexDirection: 'column',
        backgroundColor: '#F5fcff',
        borderColor: '#0099AA',
        borderWidth: 5,
        // justifyContent: 'flex-start',
        // justifyContent: 'flex-end',
        // justifyContent: 'space-around',
        justifyContent: 'space-between',
    },
    child: {
        borderWidth: 2,
        textAlign: 'center',
        fontSize: 24,
        // Note: No 'flex' property here, so they don't stretch
    },
});

export default Exercise3E;