import React from 'react';
import { View, Text, Platform } from 'react-native';
import {
    HeaderButton
} from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons'

import Colors from '../theme/colors';


const AppHeaderButton = (props) => {
    return <HeaderButton {...props} IconComponent={Ionicons} iconSize={24} color={Platform.OS === 'android' ? '#fff' : Colors.primary} />
}

export default AppHeaderButton;