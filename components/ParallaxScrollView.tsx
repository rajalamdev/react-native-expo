import type { PropsWithChildren, ReactElement } from 'react';
import { StyleSheet, Text, TextInput, useColorScheme } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from 'react-native-reanimated';

import { ThemedView } from '@/components/ThemedView';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HEADER_HEIGHT = 200;

type Props = PropsWithChildren<{
  headerImage?: ReactElement;
  headerBackgroundColor?: { dark: string; light: string };
  textOne?: string;
  textTwo?: string;
}>;

export default function ParallaxScrollView({
  children,
  headerImage,
  headerBackgroundColor,
  textOne,
  textTwo
}: Props) {
  const colorScheme = useColorScheme() ?? 'light';
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);

  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
            [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75]
          ),
        },
        {
          scale: interpolate(scrollOffset.value, [-HEADER_HEIGHT, 0, HEADER_HEIGHT], [2, 1, 1]),
        },
      ],
    };
  });

  return (
    <ThemedView style={styles.container}>
      <Animated.ScrollView ref={scrollRef} scrollEventThrottle={16}>
        <Animated.View
          style={[
            headerImage && styles.header,
            { backgroundColor: headerBackgroundColor && headerBackgroundColor[colorScheme] },
            headerAnimatedStyle,
          ]}>
          {headerImage}
          {textOne && textTwo && <View className='flex-1 items-center justify-center'>
            <Text className='text-black font-bold text-3xl'>{textOne}</Text>
            <Text className='text-black font-light text-3xl'>{textTwo}</Text>
            <View className='bg-white w-4/5 mt-6 rounded-md flex-row items-center px-2'>
              <Ionicons size={20} name="search" />
              <TextInput className='w-full p-2'></TextInput>
            </View>
          </View>}
        </Animated.View>
        <ThemedView style={styles.content}>{children}</ThemedView>
      </Animated.ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 230,
    overflow: 'hidden',
  },
  content: {
    flex: 1,
    padding: 32,
    gap: 16,
    overflow: 'hidden',
  },
});
