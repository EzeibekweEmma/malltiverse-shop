import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { EmptyStarIcon, FillStarIcon } from '@/assets/images/svgIcons';
import { useProductContext } from '@/component/ProductContext';

const ProductCard = ({ item }) => {
  const { addToCart, removeFromCart, cart } = useProductContext();
  const heroImage = require('@/assets/images/heroImage.png');

  const isItemInCart = cart.some((cartItem) => cartItem.id === item.id);

  const handleCartAction = () => {
    if (isItemInCart) {
      removeFromCart(item.id);
    } else {
      addToCart({
        id: item.id,
        name: item.name,
        price: item.current_price[0].NGN,
        photos: item.photos,
        description: item.description,
      });
    }
  };

  return (
    <View className="flex-col space-y-4 max-w-[160px]">
      <View className="w-[160px] h-[160px] bg-[#EDEDEDAB] items-center justify-center rounded-md overflow-hidden">
        <Image
          source={{
            uri: `https://api.timbu.cloud/images/${item.photos[0].url}`,
          }}
          style={{ width: 110, height: 110, objectFit: 'contain' }}
        />
      </View>

      <View>
        <Text className="font-[semi] text-lg" numberOfLines={1}>
          {item.name}
        </Text>
        <Text
          className="text-pryColor text-lg mt-0.5 font-[regular]"
          numberOfLines={1}
        >
          {item.description}
        </Text>

        <View className="flex-row space-x-2 mt-1">
          <FillStarIcon />
          <FillStarIcon />
          <FillStarIcon />
          <FillStarIcon />
          <EmptyStarIcon />
        </View>

        <Text className="text-secColor font-[semi] text-lg mt-2">
          N {item.current_price[0].NGN}
        </Text>
      </View>

      <TouchableOpacity
        onPress={handleCartAction}
        className="w-[90px] h-[35px] justify-center items-center rounded-xl border border-secColor"
      >
        <Text className="text-pryColor font-[semi]">
          {isItemInCart ? 'Remove' : 'Add to cart'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductCard;
