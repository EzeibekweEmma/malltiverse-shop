import { Stack } from 'expo-router';
import { View, StyleSheet, Image, StatusBar } from 'react-native';
import logo from '@/assets/images/logo.png';

const ScreenLayout = ({
  headerTitle,
  name,
}: {
  headerTitle: string;
  name: string;
}) => {
  return (
    <View style={[styles.container, { backgroundColor: '#ffffff' }]}>
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
            headerTitleStyle: { color: '#000000', fontSize: 19 },
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
    paddingTop: 10,
  },
  headerStyle: {
    backgroundColor: '#ffffff',
  },
});

export default ScreenLayout;
