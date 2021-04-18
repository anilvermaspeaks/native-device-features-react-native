import React from 'react';
import { View, Text } from 'react-native';

const PlacesDetail = (props) => {
    console.log(props)
    return <View>
        <Text>Place Detail {props.headerTitle}</Text>
    </View>
}

PlacesDetail.navigationOptions = navData => {
    console.log()
    return {
        headerTitle: navData.navigation.getParam('title')
    }
}

export default PlacesDetail;