import { View, Text, SafeAreaView, Platform, Image } from 'react-native';
import React from 'react';

const PaymentSuccessfulScreen = () => {
  const SuccessfulIcon = require('@/assets/images/successfulIcon.png');
  const Confetti = require('@/assets/images/confetti.png');

  return (
    <SafeAreaView
      className={`${
        Platform.OS === 'android' ? 'pt-4' : ''
      } flex-1 bg-bgColor items-center`}
    >
      <View className="mx-5 mt-5 h-full">
        <Image source={Confetti} className="absolute w-full -left-10" />
        <Image source={Confetti} className="absolute w-full top-52 -left-20" />
        <Image
          source={Confetti}
          className="absolute w-full bottom-10 -left-10"
        />
        <View>
          <Text className="font-[semi] text-2xl">Payment Successful</Text>
          <View className="justify-center items-center mt-[25vh]">
            <Image source={SuccessfulIcon} className="h-[92px] w-[92px]" />
            <Text className="font-[semi] text-xl text-center mt-5">
              Payment Successful
            </Text>
            <Text className="font-[regular] text-base text-center mt-3">
              Thanks for your purchase
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PaymentSuccessfulScreen;
