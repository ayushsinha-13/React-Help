import { View, Text, Image } from 'react-native'
import React from 'react'

const Example = () => {
  return (
    <View>
        <View style={{marginTop: 40}}>
            <Text style={{color: "#000", fontSize: 30}}>example</Text>
        </View>

        <View style={{alignItems: "center",justifyContent:"center", marginTop: 50}}>
            <Image source={require('../../Images/component.jpg')} style={{height: 300, width: "100%"}}/>
        </View> 
    </View>
  )
}

export default Example