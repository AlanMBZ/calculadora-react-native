import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Switch} from 'react-native';
import { ThemeContext } from './src/context/ThemeContext';
import { myColors } from './src/styles/Colors';
import Button from './src/components/Button';
import MyKeyboard from './src/components/MyKeyboard';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {

  const [theme, setTheme] = useState<{ ligth: boolean; dark: boolean; }>({ ligth: true, dark: false });

  return (
    <ThemeContext.Provider value={theme}>
    <SafeAreaView style={theme.ligth ? styles.container : [styles.container, {backgroundColor: '#000000'}]}>

      <StatusBar style="auto" />

      <MyKeyboard />



      { /* <Switch

        value={theme.ligth}
        onValueChange={() => setTheme({ ligth: !theme.ligth, dark: !theme.dark })}

      /> */}

      



    </SafeAreaView>
    </ThemeContext.Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.ligth,
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
});
