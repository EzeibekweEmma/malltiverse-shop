import {
  View,
  Text,
  Image,
  FlatList,
  Dimensions,
  Platform,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import Constants from 'expo-constants';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { FillStarIcon } from '@/assets/images/svgIcons';

const ProductScreen = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [numColumns, setNumColumns] = useState(2);
  const screenWidth = Dimensions.get('window').width;
  const itemWidth = screenWidth / 2;
  const heroImage = require('@/assets/images/heroImage.png');
  // console.log(
  //   data.map((item) => item.categories.id == '340367c396ef4a208cf5261224300d69')
  // );
  // // "id": "340367c396ef4a208cf5261224300d69",
  useEffect(() => {
    const updateColumns = () => {
      const screenWidth = Dimensions.get('window').width;
      const cardWidth = 180;

      const columns = Math.floor(screenWidth / cardWidth);
      setNumColumns(columns);
    };

    updateColumns();

    const subscription = Dimensions.addEventListener('change', updateColumns);

    return () => {
      subscription.remove();
    };
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(Constants.expoConfig?.extra?.apiUrl || '');
      const result = await response.json();
      setData(result.items);
    } catch (error) {
      alert(`Something went wrong!\n\n${(error as Error).message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView className="flex-1 bg-bgColor">
      <GestureHandlerRootView className="flex-1 pb-32">
        <SafeAreaView
          className={`${Platform.OS === 'android' ? 'pt-4' : ''} flex-1`}
        >
          <View className="mx-5">
            {/* Hero section */}
            <View>
              <Image
                source={heroImage}
                className="w-full object-center object-cover h-[220px] rounded-xl"
              />
              <View className="absolute top-20 left-8">
                <Text className="text-xl text-[#FAFAFA] max-w-[150px] font-[medium]">
                  Premium Sound, Premium Savings
                </Text>
                <Text className="text-sm mt-2 text-[#FAFAFA] font-[regular]">
                  Limited offer, hope on and get yours now
                </Text>
              </View>
            </View>

            {/* Product details */}
            <View className="mt-8 space-y-20">
              {/* Tech Gadget */}
              <View className="">
                <Text className="font-[semi] text-xl mb-4">Tech Gadget</Text>
                <FlatList
                  data={data}
                  keyExtractor={(item) => item.id.toString()}
                  horizontal={true}
                  pagingEnabled={true}
                  snapToInterval={itemWidth * 2} // Snap to width of 2 items
                  decelerationRate="fast" // Ensure snapping is smooth
                  initialNumToRender={2}
                  maxToRenderPerBatch={2}
                  ListEmptyComponent={
                    <View className="h-[40vh] items-center justify-center">
                      <Text className="text-3xl text-slate-800">
                        No items found
                      </Text>
                    </View>
                  }
                  ItemSeparatorComponent={() => <View style={{ width: 10 }} />} // Horizontal separator
                  ListFooterComponent={<Text className="mb-2" />}
                  renderItem={({ item }) => (
                    <View style={{ width: itemWidth - 30 }}>
                      <ProductCard />
                    </View>
                  )}
                  contentContainerStyle={{ alignItems: 'center' }}
                />
              </View>
              {/* Men’s Fashion */}
              <View className="">
                <Text className="font-[semi] text-xl mb-4">Men's Fashion</Text>
                <FlatList
                  data={data}
                  keyExtractor={(item) => item.id.toString()}
                  horizontal={true}
                  pagingEnabled={true}
                  snapToInterval={itemWidth * 2} // Snap to width of 2 items
                  decelerationRate="fast" // Ensure snapping is smooth
                  initialNumToRender={2}
                  maxToRenderPerBatch={2}
                  ListEmptyComponent={
                    <View className="h-[40vh] items-center justify-center">
                      <Text className="text-3xl text-slate-800">
                        No items found
                      </Text>
                    </View>
                  }
                  ItemSeparatorComponent={() => <View style={{ width: 10 }} />} // Horizontal separator
                  ListFooterComponent={<Text className="mb-2" />}
                  renderItem={({ item }) => (
                    <View style={{ width: itemWidth - 30 }}>
                      <ProductCard />
                    </View>
                  )}
                  contentContainerStyle={{ alignItems: 'center' }}
                />
              </View>
            </View>
          </View>
        </SafeAreaView>
      </GestureHandlerRootView>
    </ScrollView>
  );
};

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

export default ProductScreen;
