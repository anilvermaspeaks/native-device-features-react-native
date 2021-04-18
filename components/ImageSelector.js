import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, Button, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import Colors from '../theme/colors';


const ImageSelector = (props) => {
    const [image, setImage] = useState(null);

    //permissons for ios
    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);


    const pickImage = async () => {
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [16, 9],
            quality: 1,
        });

        if (!result.cancelled) {
            setImage(result.uri);
            props.onImageTaken(result.uri);
        }
    };

    return <View style={styles.imagePicker}>
        {!image && <View style={styles.imagePreView}><Text>No Image Picked Yet!</Text></View>}
        {image && <Image style={styles.image} source={{ uri: image }} style={{ width: 200, height: 200 }} />}
        <Button color={Colors.primary} title="Pick an image" onPress={pickImage} />
    </View>

}


const styles = StyleSheet.create({
    imagePicker: {
        alignItems: 'center'
    },
    imagePreView: {
        width: '100%',
        height: 300,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#ccc',
        borderWidth: 1
    },
    image: {
        width: '100%',
        height: '100%'
    }
})

export default ImageSelector