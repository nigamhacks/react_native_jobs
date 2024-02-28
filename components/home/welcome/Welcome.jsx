import {useState} from 'react'
import { 
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native'
import {useRouter} from 'expo-router'
import styles from './welcome.style'
import { icons } from '../../../constants'

const Welcome = () => {
  const router=useRouter();
  return (
    <View style= {styles.container}>
      <Text style={styles.userName}>Hello Sachin</Text>
      <Text style={styles.welcomeMessage}>Find your perfect job</Text>
    </View>
  )
}

export default Welcome