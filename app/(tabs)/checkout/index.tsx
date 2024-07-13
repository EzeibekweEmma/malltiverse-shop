import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Platform,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, { useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import PaymentModal from './PaymentModal';

const CheckoutScreen = () => {
  const [selectedOption, setSelectedOption] = useState('pickup');
  const [isModal, setIsModal] = useState(false);

  const handleSelectOption = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <ScrollView className="flex-1 bg-bgColor">
      <GestureHandlerRootView className="flex-1 pb-32">
        <SafeAreaView
          className={`${Platform.OS === 'android' ? 'pt-4' : ''} flex-1`}
        >
          <View className="mx-5 space-y-6">
            <Text className="font-[semi] text-xl">
              Select how to receive your package(s)
            </Text>
            <View>
              <Text className="font-[medium] text-xl">Pickup</Text>
              <View className="space-y-4 mt-3">
                <TouchableOpacity
                  className="flex-row items-center"
                  onPress={() => handleSelectOption('pickup')}
                >
                  <View
                    className={`h-5 w-5 rounded-full border border-pryColor justify-center items-center mr-3 ${
                      selectedOption === 'pickup' ? 'border-secColor' : ''
                    }`}
                  >
                    {selectedOption === 'pickup' ? (
                      <View className="h-2 w-2 rounded-full bg-secColor" />
                    ) : (
                      ''
                    )}
                  </View>
                  <Text className="font-[regular] text-pryColor">
                    Old Secretariat Complex, Area 1, Garki Abaji Abji
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  className="flex-row items-center"
                  onPress={() => handleSelectOption('delivery')}
                >
                  <View
                    className={`h-5 w-5 rounded-full border border-pryColor justify-center items-center mr-3 ${
                      selectedOption === 'delivery' ? 'border-secColor' : ''
                    }`}
                  >
                    {selectedOption === 'delivery' ? (
                      <View className="h-2 w-2 rounded-full bg-secColor" />
                    ) : (
                      ''
                    )}
                  </View>
                  <Text className="font-[regular] text-pryColor">
                    Sokoto Street, Area 1, Garki Area 1 AMAC
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            {/* Delivery */}
            <View>
              <View>
                <Text className="font-[medium] text-xl mb-3">Delivery</Text>
                <TextInput
                  className="h-12 rounded-md p-2.5 border border-pryColor/40 text-xl font-[medium]"
                  autoCapitalize="none"
                />
              </View>
            </View>
            {/* Contact */}
            <View>
              <View className="space-y-3 mb-7">
                <Text className="font-[medium] text-xl">Contact</Text>
                <TextInput
                  className="h-10 w-[70%] rounded-md p-2.5 border border-pryColor/40 text-lg font-[medium]"
                  autoCapitalize="none"
                  placeholder="Phone nos 1"
                  keyboardType="numeric"
                />
                <TextInput
                  className="h-10 w-[70%] rounded-md p-2.5 border border-pryColor/40 text-lg font-[medium]"
                  autoCapitalize="none"
                  placeholder="Phone nos 2"
                  keyboardType="numeric"
                />
              </View>
            </View>
            {/* Payment Modal*/}
            <PaymentModal isModal={isModal} setIsModal={setIsModal} />

            <View className="items-center justify-center">
              <TouchableOpacity
                onPress={() => setIsModal(true)}
                className="bg-secColor w-[80%] p-3 rounded-xl items-center justify-center"
              >
                <Text className="text-pryColor font-[medium] text-base">
                  Go to Payment
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </GestureHandlerRootView>
    </ScrollView>
  );
};

export default CheckoutScreen;
