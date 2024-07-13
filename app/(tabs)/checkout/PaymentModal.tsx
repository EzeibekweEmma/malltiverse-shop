import { View, Text, Modal, TextInput, Image, Pressable } from 'react-native';
import React from 'react';
import { LeftArrow } from '@/assets/images/svgIcons';

const PaymentModal = ({
  isModal,
  setIsModal,
}: {
  isModal: boolean;
  setIsModal: (arg: boolean) => void;
}) => {
  const paymentCard = require('@/assets/images/paymentCard.png');

  return (
    <Modal
      className="bg-slate-800 flex-1"
      visible={isModal}
      onRequestClose={() => setIsModal(false)}
      animationType="slide"
      presentationStyle="formSheet"
    >
      <View className="mx-5">
        <View className="flex-row space-x-5 py-5 mb-5">
          <Pressable onPress={() => setIsModal(false)}>
            <LeftArrow />
          </Pressable>
          <Text className="text-2xl font-[semi]">Payment</Text>
        </View>
        <Image
          source={paymentCard}
          className="w-full object-cover h-[200px] rounded-xl"
        />
        <View className="space-y-6 mt-8">
          <View>
            <View>
              <Text className="font-[medium] text-lg mb-3">Card Number</Text>
              <TextInput
                className="h-12 rounded-md p-2.5 border border-pryColor/40 text-lg font-[medium]"
                autoCapitalize="none"
                placeholder="0000 0000 0000 0000"
                keyboardType="numeric"
              />
            </View>
          </View>
          <View className="flex-row mb-7 w-full space-x-4">
            <View className="flex-1">
              <Text className="font-[medium] text-lg mb-3">Expiry Date</Text>
              <TextInput
                className="h-12 w-full rounded-md p-2.5 border border-pryColor/40 text-lg font-[medium]"
                autoCapitalize="none"
                placeholder="MM/YY"
                keyboardType="default"
              />
            </View>
            <View className="flex-1">
              <Text className="font-[medium] text-lg mb-3">CVV</Text>
              <TextInput
                className="h-12 w-full rounded-md p-2.5 border border-pryColor/40 text-lg font-[medium]"
                autoCapitalize="none"
                placeholder="123"
                keyboardType="numeric"
              />
            </View>
          </View>

          <View className="items-center justify-center w-full">
            <Pressable
              onPress={() => setIsModal(false)}
              className="bg-secColor w-[80vw] p-3 rounded-xl items-center justify-center"
            >
              <Text className="text-pryColor font-[medium] text-base">
                Make Payment
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default PaymentModal;
