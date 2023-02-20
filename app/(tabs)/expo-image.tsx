import { FlashList } from "@shopify/flash-list";
/**
 * @see https://docs.expo.dev/versions/v48.0.0/sdk/image/#installation
 * currently the only way to
 * run expo-image in on development builds
 * @see https://docs.expo.dev/development/create-development-builds/
 *
 * by now just running it with prebuild
 * @see https://docs.expo.dev/workflow/prebuild/#usage-with-expo-cli-run-commands
 * @cli npx expo run:android
 */
import { Image as ExpoImg } from "expo-image";
import { Link } from "expo-router";
import {
	Button,
	ImageSourcePropType,
	Pressable
} from "react-native";

import { items } from "../../__mocks__/items";
import { Text, View } from "../../components/Themed";
import { W_WIDTH } from "../../constants/Dimensions";

export default function ExpoImgScreen() {
	return <ItemList />;
}

function ItemList() {
	/**
	 * @see https://shopify.github.io/flash-list/docs/usage
	 */
	return (
		<FlashList
			// only flash
			estimatedItemSize={167}
			// static api
			numColumns={2}
			viewabilityConfig={{
				itemVisiblePercentThreshold: 70,
				minimumViewTime: 500,
				// viewAreaCoveragePercentThreshold: 60
			}}
			ListHeaderComponent={<HeaderList />}
			data={items}
			keyExtractor={(item) => item.id}
			renderItem={({ item }) => (
				<Link href={{ pathname: "details", params: { id: item.id } }} asChild>
					<Pressable>
						<Card item={item} />
					</Pressable>
				</Link>
			)}
		/>
	);
}

function HeaderList() {
	return (
		<>
			<View className="flex items-center justify-center">
				<Text className="flex pt-4 pb-3 text-3xl capitalize text-slate-900">
					Items
				</Text>
			</View>
			<View className="flex  flex-row flex-wrap">
				<View className="w-1/3">
					<Button title="filtro" />
				</View>
				<View className="w-1/3">
					<Button title="filtro2" />
				</View>
				<View className="w-1/3">
					<Button title="filtro3" />
				</View>
				<View className="w-1/3">
					<Button title="filtro4" />
				</View>
				<View className="w-1/3">
					<Button title="filtro5" />
				</View>
				<View className="w-1/3">
					<Button title="filtro6" />
				</View>
			</View>
		</>
	);
}
type Item = {
	id: string;
	binaryImage: ImageSourcePropType;
	title: string;
	price: number;
	url: string;
};

function Card({ item }: { item: Item }) {
	return (
		<View className="flex flex-col">
			<ExpoImg
				resizeMode="cover"
				style={{
					/**
					 * @author phau
					 * just testing different height dimensions!
					 */
					width: W_WIDTH * 0.50,
					height: 50 + Math.random() * 250,
					borderColor: "green",
					borderWidth: 1,
				}}
				source={item.binaryImage}
			/>
			<Text className="text-slate-900 text-2xl">titulo</Text>
			<Text className="text-slate-900 text-2xl">price</Text>
			<Text className="text-slate-900 text-2xl">link</Text>
		</View>
	);
}
