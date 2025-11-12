import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import Exercise1 from "./Exercise 1";
import Exercise2 from "./Exercise 2";
import Exercise3A from "./Exercise 3A";
import Exercise3B from "./Exercise 3B";
import Exercise3C from "./Exercise 3C";
import Exercise3D from "./Exercise 3D";
import Exercise3E from "./Exercise 3E";
import Exercise4 from "./Exercise 4";


const MyApp = () => {
    return (
        <View style={{marginTop: 40, flex: 1}}>
            <Text style={{fontSize: 30}}>Lesson 7 exercises:</Text>

            {/*<Exercise1/>*/}

            {/*<Exercise2/>*/}

            {/*<Exercise3A/>*/}

            {/*<Exercise3B/>*/}

            {/*<Exercise3C/>*/}

            {/*<Exercise3D/>*/}

            {/*<Exercise3E/>*/}

            <Exercise4/>


        </View>
    );
};

export default MyApp;

