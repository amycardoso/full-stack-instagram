import React, { Component } from 'react';

import { View, Image, TouchableOpacity} from 'react-native';

import camera from '../assets/camera.png';

export default class Feed extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerRight: (
            <TouchableOpacity style={{ marginRight: 20 }} onPress={() => navigation.navigate('New')}>
                <Image source={camera} />
            </TouchableOpacity>
        ),
    });

  render() {
    return <View />;
  }
}
