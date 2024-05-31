import { Image, StyleSheet, Platform, View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <View className='bg-white h-full w-full'>
      <ThemedView style={styles.titleContainer} className='justify-between mt-14 px-4'>
        <View>
          <ThemedView style={styles.titleContainer}>
            <ThemedText type="default" className='text-xl'>Good Morning!</ThemedText>
          </ThemedView>
          <ThemedView style={styles.titleContainer}>
            <ThemedText type="title" className='mt-4'>Kirana</ThemedText>
            <HelloWave />
          </ThemedView>
        </View>
        <View className='flex-row gap-4 items-center'>
          <Image source={require('@/assets/images/notif.png')} className='w-6 h-6' />
          <Image source={require('@/assets/images/kirana.jpg')} className='w-14 h-14 rounded-full' />
        </View>
      </ThemedView>
      <ThemedText type='subtitle' className='mt-12 px-8 mb-4'>
        How to apply simple makeup
      </ThemedText>
      <Image source={require('@/assets/images/makeup-step-slider.png')} className='w-full h-24' />
      <ThemedText type='subtitle' className='mt-12 px-8 mb-4'>
        Buy makeup products
      </ThemedText>
      <Image source={require('@/assets/images/makeup-products.png')} className='w-full h-72 ml-4' />
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
