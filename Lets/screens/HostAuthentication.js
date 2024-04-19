import React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity   } from 'react-native';
import arrowToLeft from '../assets/images/arrowToLeft.png';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-paper';

export default function LoginPage() {
  const navigation = useNavigation();

  const buttonPress = () => {
    navigation.navigate('ChooseUser')
  };

  //TextInput
  const [text, setText] = React.useState('');
  const onChangeText = (inputText) => {
    setText(inputText)
    console.log(inputText)
  };

    return (
        <View style={styles.container}>

          <View style={styles.header}>

            <TouchableOpacity onPress={buttonPress}>
              <Image source={arrowToLeft} style={styles.arrowIcon} />
            </TouchableOpacity>
            <Text style={styles.headerText}>사장님이신가요?</Text>

          </View>

          <View style={styles.textInputContainer}>
          <TextInput
            label="가게 이름을 입력해주세요"
            value={text}
            onChangeText={onChangeText}
            style={styles.storeInputText}
          />
          </View>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height:'100%',
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
      flexDirection: 'row',
      marginTop:15,
      marginBottom:10,
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 20,
      paddingBottom: 10,
    },
    headerText: {
      fontWeight: 'bold',
      fontSize: 20,
      marginLeft: 10,
    },
    arrowIcon: {
      width: 20,
      height: 20,
      marginTop:4.5,

    },
    textInputContainer :{
      width:360,
      justifyContent: 'center',
    }
});
