import { View, Text, Image, TouchableOpacity } from 'react-native';
import { FillStarIcon } from '@/assets/images/svgIcons';
const ProductCard = () => {
  const heroImage = require('@/assets/images/heroImage.png');

  return (
    <View className="flex-col space-y-4 max-w-[160px]">
      <Image source={heroImage} className="w-[160px] h-[160px] rounded-md" />

      <View>
        <Text className="font-[semi] text-lg">Tech Gadget</Text>
        <Text
          className="text-pryColor text-lg mt-0.5 font-[regular]"
          numberOfLines={1}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec
          odio vitae nunc.
        </Text>

        <View className="flex-row space-x-2 mt-1">
          <FillStarIcon />
          <FillStarIcon />
          <FillStarIcon />
          <FillStarIcon />
          <FillStarIcon />
        </View>

        <Text className="text-secColor font-[semi] text-lg mt-2">N 20,000</Text>
      </View>

      <TouchableOpacity className="w-[90px] h-[35px] justify-center items-center rounded-xl border border-secColor">
        <Text className="text-pryColor font-[semi]">Add to cart</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductCard;
