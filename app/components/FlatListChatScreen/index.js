import React from 'react';
import {View, Image, Text} from 'react-native';
import {chatStyle} from '../../views/appFlow/chatScreen/style';

export const Chats = ({item}) => {



const {chatImg, chatTitle} = chatStyle;
return(
<View style={{flexDirection: 'row'}}>
    <Image
         source={{uri: item.image}}
         style={chatImg}
    /> 
    <Text style={chatTitle}>{item.name}</Text>
</View>
)
}


