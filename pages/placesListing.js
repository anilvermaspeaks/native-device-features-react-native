import React, { useEffect } from 'react';
import { View, Text, Platform, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import * as placesActions from '../store/places-action';

import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import AppHeaderButton from '../components/HeaderButton';

import PlaceItem from '../components/PlaceItem'


const PlacesListing = (props) => {

    const places = useSelector(state => state.places.places)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(placesActions.loadPlaces());
    }, [dispatch]);

    return <FlatList data={places} keyExtractor={Item => Item.id} renderItem={itemData => <PlaceItem image={itemData.item.imageUri} title={itemData.item.title} address={null} onSelect={() => {
        props.navigation.navigate('Detail', { title: itemData.item.title, id: itemData.item.id })
    }
    } />} />
}


PlacesListing.navigationOptions = (nav) => {
    return {
        headerTitle: 'All Places',
        headerRight: () => <HeaderButtons HeaderButtonComponent={AppHeaderButton}>
            <Item
                title="Add Place"
                iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
                onPress={() => {
                    nav.navigation.navigate('NewPlace');
                }}
            />
        </HeaderButtons>
    }
}
export default PlacesListing;