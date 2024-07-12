import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';

const ScreenLayout = ({
  headerTitle,
  name,
}: {
  headerTitle: string;
  name: string;
}) => {
  return (
    <View style={[styles.container, { backgroundColor: '#ffffff' }]}>
      <StatusBar style="dark" backgroundColor="#ffffff" />
      <Stack>
        <Stack.Screen
          name={name}
          options={{
            headerLargeTitle: true,
            headerTitleStyle: { color: '#000000', fontSize: 28 },
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
    paddingTop: 20,
  },
  headerStyle: {
    backgroundColor: '#ffffff',
  },
});

export default ScreenLayout;
