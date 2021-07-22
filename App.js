// In App.js in a new project

import * as React from 'react';
import { View, Text, Button, StyleSheet, TextInput, SafeAreaView, Image, TouchableOpacity, Icon } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { back } from 'react-native/Libraries/Animated/src/Easing';
import { abs } from 'react-native-reanimated';
import { ScrollView } from 'react-native-gesture-handler';

// Import my components
// {...}

const buttonClickedHandler = () => {
  console.log('You have been clicked a button!');
  // do something
};

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={homeStyle.color}>

          <Image
            source={require('./assets/logo_museomix.png')}
            style={{ width: 131, height: 17, marginTop: 10, marginLeft: 8 }}
          />

          <Image
            source={require('./assets/timer.png')}
            style={{ width: 120, height: 68, marginLeft: 245, top: -10 }}
          />

          <View>
            <Text style={homeStyle.message}>Welcome John Doe,</Text>
          </View>

          <View style={homeStyle.square}>
            <TouchableOpacity style={homeStyle.notificationCenter} onPress={() => navigation.navigate('Notification')}>
              <Image
                source={require('./assets/notif.png')}
                style={{ marginRight: 10, }}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Team')}>
              <Image
                source={require('./assets/teamBTN.png')}
                style={{ top: -40, marginLeft: -7 }}
              />
            </TouchableOpacity>

            <TouchableOpacity style={homeStyle.goalBTN} onPress={() => navigation.navigate('Goal')}>
              <Text style={{ color: '#0093BE', fontWeight: '600', alignItems: 'center' }}>VOIR LES OBJECTIFS</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
              <Image
                source={require('./assets/profilBTN.png')}
                style={{ top: 10, marginLeft: 20 }}
              />
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity style={homeStyle.sosBTN} onPress={buttonClickedHandler} onPress={() => navigation.navigate('Sos')}>
              <Image
                source={require('./assets/sosBtn.png')}
                style={{ top: -30, marginLeft: 8 }}
              />
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// Style for the Home Page
const homeStyle = StyleSheet.create({
  color: {
    flex: 1,
    backgroundColor: '#FEED01',
  },
  square: {
    width: 375,
    height: 450,
    top: -30,
    backgroundColor: '#0BBBEF',
    borderWidth: 3,
    borderColor: '#04A3D2',
    justifyContent: 'center',
  },
  message: {
    fontSize: 24,
    flex: 1,
    paddingLeft: 10,
    top: -45,
    color: 'black',
  },
  notificationCenter: {
    flexDirection: 'row-reverse',
    margin: 3,
  },
  goalBTN: {
    height: 50,
    width: 295,
    margin: 12,
    borderWidth: 3,
    borderColor: "#03A3D2",
    borderRadius: 59,
    backgroundColor: '#FEED01',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 40,
    top: -10
  },
  sosBTN: {
    flexDirection: 'row',
  }
})


function Team() {
  return (
    <SafeAreaView >
      <Image
        source={require('./assets/team.png')}
        style={{ left: 180, marginBottom: 5 }}
      />
      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: 1,
          width: 300,
          marginLeft: 30
        }}
      />
      <View style={homeStyle.color}>
        <Image
          source={require('./assets/teamLogo.png')}
        />
      </View>
    </SafeAreaView>
  )
}

function Notification( navigation ) {
  return (
    <View style={homeStyle.color}>
      <Text>Notification Screen</Text>
    </View>
  )
}

function Goal( navigation ) {
  return (
    <View style={homeStyle.color}>
      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: 1,
          width: 300,
          marginLeft: 30
        }}
      />
      <Button 
         title="See my Goals"
         onPress={() => navigation.navigate('MyGoal')}
      />
    </View>
  )
}

function MyGoal() {
  return (
    <View>
      <Text>My Goals Screen</Text>
      <Button
        title="See Team's Goals"
        onPress={() => navigation.navigate('Goal')}
      />
    </View>
  )
}


function Profile() {
  const [onChangeText] = React.useState("test@gmail.com");
  return (
    <ScrollView style={styles.background}>
      <SafeAreaView >
        <Image
          source={require('./assets/profilTitle.png')}
          style={{ left: 180, marginBottom: 5 }}
        />
        <View style={styles.inputsBackground}>
          <Image
            source={require('./assets/profilPIC.png')}
            style={{ width: 110, height: 110, borderRadius: 400 / 2, borderColor: '#04A3D2', borderWidth: 2, marginLeft: 3, marginTop: -100, marginLeft: 10, top: 30 }}
          />
          <Image
            source={require('./assets/picto_profil.png')}
            style={{ width: 38, height: 42, top: -5, left: 80 }}
          />
          <TextInput
            style={styles.typeInput}
            onChangeText={onChangeText}
            value='Codeur'
          />
          <Text style={{ color: 'white', marginLeft: 31 }}>Modifer mes informations personnelles</Text>

          <Text style={styles.inputLabels}>Email</Text>
          <TextInput
            style={styles.inputs}
            onChangeText={onChangeText}
            value='Email'
          />

          <Text>Nom</Text>
          <TextInput
            style={styles.inputs}
            onChangeText={onChangeText}
            value='Nom'
          />

          <Text>Prénom</Text>
          <TextInput
            style={styles.inputs}
            onChangeText={onChangeText}
            value='Prénom'
          />

          <Text>Téléphone</Text>
          <TextInput
            style={styles.inputs}
            onChangeText={onChangeText}
            value='Téléphone'
          />

          <Text>Date de naissance</Text>
          <TextInput
            style={styles.inputs}
            onChangeText={onChangeText}
            value='Date de naissance'
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  inputs: {
    height: 59,
    width: 295,
    margin: 12,
    padding: 13,
    marginLeft: 30,
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    borderWidth: 2,
    borderColor: "#FFED00",
    borderRadius: 50,
    backgroundColor: '#0BBBEF',
    color: 'white',
  },
  inputLabels: {
    width: 46,
    height: 19,
    backgroundColor: '#0BBBEF',
    marginLeft: 54,
    top: 25,
    backgroundColor: '#0BBBEF',
    color: 'white'
  },
  typeInput: {
    height: 59,
    width: 120,
    margin: 12,
    padding: 13,
    marginLeft: 30,
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    borderWidth: 2,
    borderColor: "#FFED00",
    borderRadius: 50,
    backgroundColor: '#0BBBEF',
    color: 'white',
  },
  background: {
    backgroundColor: '#FFED01'
  },
  inputsBackground: {
    width: 375,
    height: 800,
    backgroundColor: '#0BBBEF',
    borderWidth: 3,
    borderColor: '#04A3D2',
    justifyContent: 'center',
  },
  label: {
    position: 'absolute',
    top: -10,
    left: 20,
    backgroundColor: '#FFED00',
    padding: 5,
    paddingTop: 0,
  }
});

function Sos() {
  return (
    <View style={homeStyle.color}>
      <Text>Sos Screen</Text>
    </View>
  )
}

function Contact() {
  const [text, onChangeText] = React.useState("test@gmail.com");
  return (
    <SafeAreaView style={homeStyle.color}>
      <View style={homeStyle.square}>
        <Image
          source={require('./assets/icon.png')}
          style={{ width: 110, height: 110, borderRadius: 400 / 2, borderColor: '#04A3D2', borderWidth: 2 }}
        />
        <Image
          source={require('./assets/picto_profil.png')}
          style={{ width: 38, height: 42 }}
        />
        <TextInput style={homeStyle.color}
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
      </View>
    </SafeAreaView>
  )
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerStyle: {
              backgroundColor: "#0BBBEF",
            },
            headerTintColor: '#ffed00',
          }}
        />

        <Stack.Screen
          name="Team"
          component={Team}
          options={{
            headerStyle: {
              backgroundColor: "#0BBBEF",
            },
            headerTintColor: '#ffed00',
          }}
        />

        <Stack.Screen
          name="Notification"
          component={Notification}
          options={{
            headerStyle: {
              backgroundColor: "#0BBBEF",
            },
            headerTintColor: '#ffed00',
          }}
        />
        <Stack.Screen

          name="Goal"
          component={Goal}
          options={{
            headerStyle: {
              backgroundColor: "#0BBBEF",
            },
            headerTintColor: '#ffed00',
          }}
        />

        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            headerStyle: {
              backgroundColor: "#0BBBEF",
            },
            headerTintColor: '#ffed00',
          }}
        />

        <Stack.Screen
          name="Sos"
          component={Sos}
          options={{
            headerStyle: {
              backgroundColor: "#0BBBEF",
            },
            headerTintColor: '#ffed00',
          }}
        />

        <Stack.Screen
          name="Contact"
          component={Contact}
          options={{
            headerStyle: {
              backgroundColor: "#0BBBEF",
            },
            headerTintColor: '#ffed00',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
