import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Colors from '../theme/colors';

//feature screens
import AddPlaces from '../pages/addPlace';
import MapPlace from '../pages/mapPlace';
import PlaceDetail from '../pages/placeDetail';
import PlacesListing from '../pages/placesListing';


const AppNavigator = createStackNavigator({
    Home: {
        screen: PlacesListing
    },
    Detail: {
        screen: PlaceDetail,
    },
    Map: {
        screen: MapPlace
    },
    NewPlace: {
        screen: AddPlaces,
    },


},

    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? Colors.primary
                    : ''
            },
            headerTintColor: Platform.OS === 'android' ? '#fff'
                : Colors.primary
        },
    }

);

export default createAppContainer(AppNavigator);

