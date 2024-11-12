import { ScrollView, Text, View, Image, StatusBar } from 'react-native-web';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';
import CustomButton from '../components/CustomButton';


export default function App() {
  return (
    <SafeAreaView className="bg-indigo-950 h-full">
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className="w-full justify-center items-center min-h-screen h-[85vh] px-4">
          <Image
            source={images.logo}
            className="w-[300px] h-[85px] pt-10"
            resizeMode="contain"
          />
          <View className="relative mt-5">
            <Text className="text-2xl text-white font-u_bold text-center">
              3000+ easy and delicious recipes from the best chefs around the world
            </Text>
          </View>

          <CustomButton
            title="Continue with Email"
            handlePress={() => router.push('/sign-in')}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="orange" barStyle="light-content" />
    </SafeAreaView>
  );
}
