import React from 'react';
import { Text, View, StyleSheet, Image, Switch} from 'react-native';
import { Card } from 'react-native-paper';

export default class App extends React.Component{
state = {
  switchValue: false
};

render(){
    return (
    <View style={styles.container}>
      <Card style={[styles.bulbContainer, {backgroundColor: this.state.switchValue ? 'yellow' : 'black' }]}>
        <Text style={[styles.paragraph, {color: this.state.switchValue ? 'black' : 'white'}]}>AMC MP1</Text>
        <Text style={[styles.paragraph, {color: this.state.switchValue ? 'black' : 'white'}]}>{this.state.switchValue ? 'ON' : 'OFF'}</Text>
        <View style={styles.switchContainer}>
          <Image style={styles.bulb} source={require('./assets/bulb_off.png')} />
          <Switch value={this.state.switchValue} onValueChange={(switchValue)=>this.setState({switchValue})}/>
        </View>
      </Card>
      
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bulbContainer: {
    width: 350,
    height: 600,
    padding:10,
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  bulb: {
    height: 300,
    width: 300,
  },
  switchContainer: {
    alignItems: 'center',
  },
});
