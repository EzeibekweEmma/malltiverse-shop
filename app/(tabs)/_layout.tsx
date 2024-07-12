import { Tabs } from 'expo-router';
import tailwind from '@/tailwind.config';
import { Octicons } from '@expo/vector-icons';
import { Image, View } from 'react-native';
import { CartIcon, CheckoutIcon, HomeIcon } from '@/assets/images/svgIcons';
// import HomeIcon from '@/assets/images/homeIcon.svg';

const colors = tailwind.theme?.extend?.colors;

const TabsNavigation = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#2A2A2A',
        tabBarInactiveTintColor: '#ffffff',
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
        },
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          height: 67,
          borderRadius: 20,
          borderTopWidth: 0,
          backgroundColor: colors?.pryColor,
          margin: 20,
          paddingTop: 14,
        },
      }}
    >
      <Tabs.Screen
        name="(product)"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => (
            <View
              className={
                focused
                  ? 'bg-[#FF7F7D] h-10 w-10 justify-center items-center flex rounded-full'
                  : ''
              }
            >
              <HomeIcon color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => (
            <View
              className={
                focused
                  ? 'bg-[#FF7F7D] h-10 w-10 justify-center items-center flex rounded-full'
                  : ''
              }
            >
              <CartIcon color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="checkout"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => (
            <View
              className={
                focused
                  ? 'bg-[#FF7F7D] h-10 w-10 justify-center items-center flex rounded-full'
                  : ''
              }
            >
              <CheckoutIcon color={color} />
            </View>
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsNavigation;
