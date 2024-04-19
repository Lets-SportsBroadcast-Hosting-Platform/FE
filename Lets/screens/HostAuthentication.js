import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import arrowToLeft from '../assets/images/arrowToLeft.png';
import { useNavigation } from '@react-navigation/native';
import { TextInput, Button } from 'react-native-paper';

export default function LoginPage() {
  const navigation = useNavigation();

  const arrowbuttonPress = () => {
    navigation.navigate('ChooseUser');
    console.log("arrowbuttonPressed");
  };

  //TextInput
  const [text, setText] = React.useState('');
  const onChangeText = (inputText) => {
    setText(inputText);
    console.log(inputText);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={arrowbuttonPress} style={styles.touchable}>
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
      <Button mode="contained" onPress={() => console.log('Pressed')} style={styles.typeButton}>
        직접등록
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flex: 1,
    alignItems: 'center',
    position: 'relative'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 10,
    paddingTop: 20,
    paddingBottom: 10,
    width: '100%',
    position: 'relative',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  touchable: {
    alignItems: 'center',
    position: 'absolute',
    top: '50%', left: 0,
    transform: [{translateY: 13.1}, {translateX: 20}]
  },
  arrowIcon: {
    width: 20,
    height: 20,
     // 이미지와 텍스트 사이의 간격 조정
  },
  textInputContainer: {
    width: 360,
    justifyContent: 'center',
  },
  typeButton: {
    width: 360,
    borderRadius: 5,
    marginTop: 7,
    backgroundColor:'#01162D',
  },
  storeInputText :{
    height:45,
    borderRadius:5
  }
});
