import React from 'react';
import { View, Text, Platform } from 'react-native';

import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import AppHeaderButton from '../components/HeaderButton'


const PlacesListing = () => {
    return <View>
        <Text>Place listings</Text>
    </View>
}


PlacesListing.navigationOptions = (nav) => {
    return {
        headerTitle: 'All Places',
        headerRight: () => <HeaderButtons HeaderButtonComponent={AppHeaderButton}>
            <Item title='Add Place' iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
                onPress={() => {
                    nav.navigation.navigate('NewPlace')
                }}
            />
        </HeaderButtons>
    }
}
export default PlacesListing;