import { Image, StyleSheet, Platform, View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function ProfileScreen() {
  return (
    <View className='bg-white h-full w-full items-center justify-center'>
        <Image source={require('@/assets/images/kirana.jpg')} className='w-32 h-32 rounded-full' />
        <ThemedText type='subtitle' className='mt-4 px-8 mb-2 text-2xl text-pink-600'>
            Dhetalisa Aura Kirana
        </ThemedText>
        <ThemedText type='subtitle' className='px-8 mb-4'>
            1152200037
        </ThemedText>
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
