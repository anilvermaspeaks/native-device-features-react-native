import React, { useState } from 'react';
import { View, Text, ScrollView, Button, TextInput, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux'

import Colors from '../theme/colors';
import ImageSelector from '../components/ImageSelector'
import * as placesActions from '../store/places-action';

const AddPlace = (props) => {

    const [titleValue, setTitleValue] = useState('')
    const [selectedImage, setSelectedImage] = useState();

    const dispatch = useDispatch();

    //change title
    const titleChangeHandler = (text) => {
        setTitleValue(text)
    }

    const imageTakenHandler = imagePath => {
        setSelectedImage(imagePath);
    };

    // save place handler
    const savePlaceHandler = () => {
        dispatch(placesActions.addPlace(titleValue, selectedImage))
        props.navigation.goBack();

    }

    return <ScrollView>
        <View style={styles.form}>
            <Text style={styles.label}>Title</Text>
            <TextInput style={styles.input} onChangeText={titleChangeHandler} value={titleValue} />
            <ImageSelector onImageTaken={imageTakenHandler} />
            <Button onPress={savePlaceHandler} title="save place" color={Colors.primary} />
        </View>
    </ScrollView>
}


const styles = StyleSheet.create({
    form: {
        margin: 30
    },
    label: {
        fontSize: 18,
    },
    input: {
        paddingVertical: 15,
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        marginBottom: 15
    }
})

export default AddPlace;