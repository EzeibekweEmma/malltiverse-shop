import {
  View,
  Text,
  Image,
  FlatList,
  Dimensions,
  Platform,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import Constants from 'expo-constants';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import ProductCard from './ProductCard';

const ProductScreen = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const screenWidth = Dimensions.get('window').width;
  const itemWidth = screenWidth / 2;
  const heroImage = require('@/assets/images/heroImage.png');
  const womenData: any[] = [];
  const menData: any[] = [];
  const techData: any[] = [];

  data.map((item) => {
    if (item.categories[0].id === '340367c396ef4a208cf5261224300d69')
      womenData.push(item);
  });
  data.map((item) => {
    if (item.categories[0].id === 'e80848028558476b86fb5a9026318939')
      menData.push(item);
  });
  data.map((item) => {
    if (item.categories[0].id === '12f7f150f6cc47f3889f4d56ab29d57d')
      techData.push(item);
  });

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
            {loading ? (
              <ActivityIndicator className="mt-20" size={'large'} />
            ) : (
              <View className="mt-8 space-y-20">
                {/* Tech Gadget */}
                <View className="">
                  <Text className="font-[semi] text-xl mb-4">Tech Gadget</Text>
                  <FlatList
                    data={techData}
                    keyExtractor={(item) => item.id.toString()}
                    horizontal={true}
                    pagingEnabled={true}
                    // snapToInterval={itemWidth * 2}
                    decelerationRate="fast"
                    initialNumToRender={2}
                    maxToRenderPerBatch={2}
                    ListEmptyComponent={
                      <View className="h-[40vh] items-center justify-center">
                        <Text className="text-3xl text-slate-800">
                          No items found
                        </Text>
                      </View>
                    }
                    ItemSeparatorComponent={() => (
                      <View style={{ width: 10 }} />
                    )}
                    ListFooterComponent={<Text className="mb-2" />}
                    renderItem={({ item }) => (
                      <View style={{ width: itemWidth - 30 }}>
                        <ProductCard item={item} />
                      </View>
                    )}
                    contentContainerStyle={{ alignItems: 'center' }}
                  />
                </View>
                {/* Men’s Fashion */}
                <View className="">
                  <Text className="font-[semi] text-xl mb-4">
                    Men's Fashion
                  </Text>
                  <FlatList
                    data={menData}
                    keyExtractor={(item) => item.id.toString()}
                    horizontal={true}
                    pagingEnabled={true}
                    // snapToInterval={itemWidth * 2}
                    decelerationRate="fast"
                    initialNumToRender={2}
                    maxToRenderPerBatch={2}
                    ListEmptyComponent={
                      <View className="h-[40vh] items-center justify-center">
                        <Text className="text-3xl text-slate-800">
                          No items found
                        </Text>
                      </View>
                    }
                    ItemSeparatorComponent={() => (
                      <View style={{ width: 10 }} />
                    )}
                    ListFooterComponent={<Text className="mb-2" />}
                    renderItem={({ item }) => (
                      <View style={{ width: itemWidth - 30 }}>
                        <ProductCard item={item} />
                      </View>
                    )}
                    contentContainerStyle={{ alignItems: 'center' }}
                  />
                </View>
                {/* Women’s Fashion */}
                <View className="">
                  <Text className="font-[semi] text-xl mb-4">
                    Women's Fashion
                  </Text>
                  <FlatList
                    data={womenData}
                    keyExtractor={(item) => item.id.toString()}
                    horizontal={true}
                    pagingEnabled={true}
                    // snapToInterval={itemWidth * 2}
                    decelerationRate="fast"
                    initialNumToRender={2}
                    maxToRenderPerBatch={2}
                    ListEmptyComponent={
                      <View className="h-[40vh] items-center justify-center">
                        <Text className="text-3xl text-slate-800">
                          No items found
                        </Text>
                      </View>
                    }
                    ItemSeparatorComponent={() => (
                      <View style={{ width: 10 }} />
                    )}
                    ListFooterComponent={<Text className="mb-2" />}
                    renderItem={({ item }) => (
                      <View style={{ width: itemWidth - 30 }}>
                        <ProductCard item={item} />
                      </View>
                    )}
                    contentContainerStyle={{ alignItems: 'center' }}
                  />
                </View>
              </View>
            )}
          </View>
        </SafeAreaView>
      </GestureHandlerRootView>
    </ScrollView>
  );
};

export default ProductScreen;
