import { Stack } from 'expo-router';
import { View, StyleSheet, Image, StatusBar } from 'react-native';

const logo = require('@/assets/images/logo.png');
const ScreenLayout = ({
  headerTitle,
  name,
}: {
  headerTitle: string;
  name: string;
}) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor="#ffffff" />
      <Stack>
        <Stack.Screen
          name={name}
          options={{
            headerLargeTitle: true,
            headerLeft: () => (
              <Image
                source={logo}
                style={{ width: 100, height: 20, objectFit: 'cover' }}
              />
            ),
            headerTitleAlign: 'center',
            headerTitleStyle: {
              color: '#000000',
              fontSize: 19,
              fontFamily: 'semi',
            },
            headerTransparent: false,
            headerStyle: styles.headerStyle,
            headerBlurEffect: 'prominent',
            headerShadowVisible: false,
            headerTitle,
          }}
        />
      </Stack>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerStyle: {
    backgroundColor: '#ffffff',
  },
});

export default ScreenLayout;
