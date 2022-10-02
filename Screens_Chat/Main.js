import React, { useState } from 'react';
import { StatusBar, Text, View } from "react-native";

export default function Main() {
    return(
      <View>
          {/* <AuthScreen /> */}
          <Text>Chat App here</Text>
          <StatusBar style="auto" />
        </View>
    );
}

export { Main };