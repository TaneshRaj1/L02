import React from 'react';
import {View, Text} from 'react-native';

const Welcome = ({code,name})=> {
  return (
      <View>
        <Text>Welcome to {code} - {name}</Text>
      </View>
  );
};
//export default Welcome;
class ModuleInfo extends React.Component {
  render() {
    return (
        <View>
          <Text></Text>
          <Text>These are the Modules in this Semester</Text>
          <Welcome code= "C346" name="Mobile App Development"/>
          <Welcome code= "C105" name="Introduction to programing"/>
          <Welcome code= "C337" name="Immersive Technologies"/>

        </View>
    )
  }
}
export default ModuleInfo;