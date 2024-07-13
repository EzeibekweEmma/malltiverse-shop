import { TrashIcon } from '@/assets/images/svgIcons';
import { useProductContext } from '@/component/ProductContext';
import { useNavigation } from 'expo-router';
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
  SafeAreaView,
  Platform,
  TextInput,
  Pressable,
  Image,
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const CartScreen = () => {
  const navigation = useNavigation();
  const { cart, removeFromCart, clearCart } = useProductContext();

  // State to store item quantities
  const [quantities, setQuantities] = useState(
    cart.reduce((acc, item) => ({ ...acc, [item.id]: 1 }), {})
  );

  // Function to handle quantity increase
  const handleIncrease = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: prev[id] + 1,
    }));
  };

  // Function to handle quantity decrease
  const handleDecrease = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: prev[id] > 1 ? prev[id] - 1 : 1,
    }));
  };

  // Function to calculate total cost
  const calculateTotalCost = () => {
    return cart.reduce(
      (total, product) => total + product.price * quantities[product.id],
      0
    );
  };

  // Render item in cart
  const renderItem = ({ item }) => {
    return (
      <View className="flex-row items-center justify-between px-4 py-7 border border-pryColor/30 rounded-md mb-5">
        <Image
          source={{
            uri: `https://api.timbu.cloud/images/${item?.photos[0]?.url}`,
          }}
          style={{
            width: 80,
            height: 80,
            objectFit: 'contain',
            marginRight: 5,
          }}
        />
        <View className="flex-1">
          <TouchableOpacity
            onPress={() => removeFromCart(item.id)}
            className="absolute top-0 right-0"
          >
            <TrashIcon />
          </TouchableOpacity>
          <Text className="font-[semi] text-lg mr-5" numberOfLines={1}>
            {item.name}
          </Text>
          <Text className="font-[regular] text-base">{item.description}</Text>
          <View className="flex-row justify-between mt-2">
            <View className="flex-row space-x-5 items-center">
              <TouchableOpacity onPress={() => handleDecrease(item.id)}>
                <Text className="font-[semi] border pl-2.5 pr-2 pt-0.5 text-2xl">
                  -
                </Text>
              </TouchableOpacity>
              <Text className="font-[semi] text-lg">{quantities[item.id]}</Text>
              <TouchableOpacity onPress={() => handleIncrease(item.id)}>
                <Text className="font-[semi] border pl-2.5 pr-2 pt-0.5 text-2xl">
                  +
                </Text>
              </TouchableOpacity>
            </View>
            <Text className="font-[semi] text-lg mt-2">
              N {Number(item.price) * quantities[item.id]}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <ScrollView className="flex-1 bg-bgColor">
      <GestureHandlerRootView className="flex-1 pb-32">
        <SafeAreaView
          className={`${Platform.OS === 'android' ? 'pt-4' : ''} flex-1`}
        >
          <View className="flex-1 mx-5">
            <FlatList
              data={cart}
              keyExtractor={(item) => item.id.toString()}
              renderItem={renderItem}
              ListEmptyComponent={
                <View className="flex-1 h-[80vh] items-center justify-center">
                  <Text className="font-[medium] text-2xl">
                    No Item in Cart
                  </Text>
                </View>
              }
            />

            {/* Shopping Summary */}
            {cart.length > 0 && (
              <View className="bg-[#EDEDEDAB] p-5 rounded-lg mt-5">
                <Text className="font-[semi] text-xl">Shopping Summary</Text>
                <View className="mt-7">
                  <Text className="font-[regular] text-xl">Discount Code</Text>
                  <View className="flex-row justify-between mt-3">
                    <TextInput
                      className="h-12 w-[70%] rounded-md p-2.5 border border-pryColor/40 text-xl font-[medium]"
                      autoCapitalize="none"
                    />
                    <Pressable className="h-12 bg-secColor justify-center items-center px-3 rounded-md">
                      <Text className="font-[medium] text-lg">Apply</Text>
                    </Pressable>
                  </View>
                  <View className="flex-row justify-between mt-7 items-center">
                    <Text className="font-[regular] text-xl mt-5">
                      Sub-Total
                    </Text>
                    <Text className="font-[medium] text-xl mt-3">
                      N {calculateTotalCost()}
                    </Text>
                  </View>
                  <View className="flex-row justify-between items-center">
                    <Text className="font-[regular] text-xl mt-5">
                      Delivery Fee
                    </Text>
                    <Text className="font-[medium] text-xl mt-3">N 1,500</Text>
                  </View>
                  <View className="flex-row justify-between items-center border-b border-dashed pb-5">
                    <Text className="font-[regular] text-xl mt-5">
                      Discount Amount
                    </Text>
                    <Text className="font-[medium] text-xl mt-3">N 3,500</Text>
                  </View>
                  <View className="flex-row justify-between items-center">
                    <Text className="font-[regular] text-xl mt-5">
                      Total Amount
                    </Text>
                    <Text className="font-[medium] text-xl mt-3">
                      N {calculateTotalCost() + 1500 - 3500}
                    </Text>
                  </View>
                  <View className="items-center justify-center mt-8">
                    <TouchableOpacity
                      onPress={() => navigation.navigate('checkout' as never)}
                      className="bg-secColor w-[90%] p-3 rounded-xl items-center justify-center"
                    >
                      <Text className="text-pryColor font-[semi] text-base">
                        Checkout
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}
          </View>
        </SafeAreaView>
      </GestureHandlerRootView>
    </ScrollView>
  );
};

export default CartScreen;
