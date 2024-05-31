import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, ImageBackground, View, Text } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerImage={<Image source={require('@/assets/images/makeup-bg.jpg')} style={{width: "100%", height: "100%", position:"absolute" }} 
      />}
      textOne="BEAUTY"
      textTwo="EXCLUSIVE"
      
      >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="subtitle">Categories</ThemedText>
      </ThemedView>
      <ThemedView className='flex-row justify-center '>
        <View className='w-3/12 h-28 bg-pink-300 rounded-md mr-2 items-center justify-center'>
          <Ionicons size={30} name="sad-outline" color={"#fff"} />
          <Text className='text-white text-lg font-medium'>LIPS</Text>
        </View>
        <View className='w-3/12 h-28 bg-pink-100 rounded-md mr-2 items-center justify-center'>
          <Ionicons size={30} name="happy-outline" color={"#666"} />
          <Text className='text-[#666] text-lg font-medium'>FACE</Text>
        </View>
        <View className='w-3/12 h-28 bg-pink-100 rounded-md mr-2 items-center justify-center'>
          <Ionicons size={30} name="glasses-outline" color={"#666"} />
          <Text className='text-[#666] text-lg font-medium'>EYES</Text>
        </View>
        <View className='w-3/12 h-28 bg-pink-100 rounded-md mr-2 items-center justify-center'>
          <Ionicons size={30} name="woman-outline" color={"#666"} />
          <Text className='text-[#666] text-lg font-medium'>BODY</Text>
        </View>
      </ThemedView>
      <ThemedText type="subtitle">Popular Items</ThemedText>
      <ThemedView className='flex-row justify-center gap-2'>
        <View className='bg-white w-1/2 rounded-md p-2 shadow shadow-black'>
          <View className='flex-row justify-between'>
            <View className='bg-pink-300 aspect-square w-8 items-center justify-center rounded-full'>
              <Ionicons size={15} name="thumbs-up" color={"#fff"} />  
            </View>
            <View className='flex-row gap-1'>
              <Ionicons size={15} name="star" color={"orange"} />  
              <Text className='font-bold' style={{color: "#999"}}>5.0</Text>
            </View>
          </View>
          <View className='items-center'>
            <Image source={require('@/assets/images/lips.jpg')} style={{width: 80, height: 150}} />
            <Text  className='text-center mt-4 mb-2 font-semibold text-pink-900'>Power Bullet Matte Lipstick</Text>
          </View>
        </View>
        <View className='bg-white w-1/2 rounded-md p-2 shadow shadow-black'>
          <View className='flex-row justify-between'>
            <View className='bg-pink-300 aspect-square w-8 items-center justify-center rounded-full'>
              <Ionicons size={15} name="thumbs-up" color={"#fff"} />  
            </View>
            <View className='flex-row gap-1'>
              <Ionicons size={15} name="star" color={"orange"} />  
              <Text className='font-bold' style={{color: "#999"}}>5.0</Text>
            </View>
          </View>
          <View className='items-center'>
            <Image source={require('@/assets/images/foundation.jpg')} style={{width: 80, height: 150}} />
            <Text  className='text-center mt-4 mb-2 font-semibold text-pink-900'>Born This Way Foundation</Text>
          </View>
        </View>
      </ThemedView>
      <ThemedView className='flex-row justify-center gap-2'>
        <View className='bg-white w-1/2 rounded-md p-2 shadow shadow-black'>
          <View className='flex-row justify-between'>
            <View className='bg-pink-300 aspect-square w-8 items-center justify-center rounded-full'>
              <Ionicons size={15} name="thumbs-up" color={"#fff"} />  
            </View>
            <View className='flex-row gap-1'>
              <Ionicons size={15} name="star" color={"orange"} />  
              <Text className='font-bold' style={{color: "#999"}}>5.0</Text>
            </View>
          </View>
          <View className='items-center overflow-hidden'>
            <Image source={require('@/assets/images/eye-shadow.jpg')} style={{width: 200, height: 150}} className='scale-75' />
            <Text  className='text-center mt-4 mb-2 font-semibold text-pink-900'>Eye Shadow</Text>
          </View>
        </View>
        <View className='bg-white w-1/2 rounded-md p-2 shadow shadow-black'>
          <View className='flex-row justify-between'>
            <View className='bg-pink-300 aspect-square w-8 items-center justify-center rounded-full'>
              <Ionicons size={15} name="thumbs-up" color={"#fff"} />  
            </View>
            <View className='flex-row gap-1'>
              <Ionicons size={15} name="star" color={"orange"} />  
              <Text className='font-bold' style={{color: "#999"}}>5.0</Text>
            </View>
          </View>
          <View className='items-center'>
            <Image source={require('@/assets/images/mascara.jpg')} style={{width: 80, height: 150}} />
            <Text  className='text-center mt-4 mb-2 font-semibold text-pink-900'>Mascara</Text>
          </View>
        </View>
      </ThemedView>
      <ThemedView className='flex-row justify-center gap-2'>
        <View className='bg-white w-1/2 rounded-md p-2 shadow shadow-black'>
          <View className='flex-row justify-between'>
            <View className='bg-pink-300 aspect-square w-8 items-center justify-center rounded-full'>
              <Ionicons size={15} name="thumbs-up" color={"#fff"} />  
            </View>
            <View className='flex-row gap-1'>
              <Ionicons size={15} name="star" color={"orange"} />  
              <Text className='font-bold' style={{color: "#999"}}>5.0</Text>
            </View>
          </View>
          <View className='items-center overflow-hidden'>
            <Image source={require('@/assets/images/face-powder.jpg')} style={{width: 200, height: 150}} className='scale-75' />
            <Text  className='text-center mt-4 mb-2 font-semibold text-pink-900'>Face Powder</Text>
          </View>
        </View>
        <View className='bg-white w-1/2 rounded-md p-2 shadow shadow-black'>
          <View className='flex-row justify-between'>
            <View className='bg-pink-300 aspect-square w-8 items-center justify-center rounded-full'>
              <Ionicons size={15} name="thumbs-up" color={"#fff"} />  
            </View>
            <View className='flex-row gap-1'>
              <Ionicons size={15} name="star" color={"orange"} />  
              <Text className='font-bold' style={{color: "#999"}}>5.0</Text>
            </View>
          </View>
          <View className='items-center'>
            <Image source={require('@/assets/images/lip-gloss.jpg')} style={{width: 80, height: 150}} />
            <Text  className='text-center mt-4 mb-2 font-semibold text-pink-900'>Lip GLoss</Text>
          </View>
        </View>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
