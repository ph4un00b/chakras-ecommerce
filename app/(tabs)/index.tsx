import { FlashList } from "@shopify/flash-list";
import React from "react";
import { Image } from "react-native";

import { items } from "../../__mocks__/items";
import { Text, View } from "../../components/Themed";
import { W_WIDTH } from "../../constants/Dimensions";

export default function TabOneScreen() {
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
			ListHeaderComponent={
				<View className="flex items-center justify-center">
					<Text className="flex pt-4 pb-3 text-3xl capitalize text-slate-900">
						Items
					</Text>
				</View>
			}
			data={items}
			keyExtractor={(item) => item.id}
			renderItem={({ item, index }) => {
				return (
					/**
					 * @author phau
					 *
					 * @todo use expo-image!
					 * it will be the default image component
					 *
					 */
					<Image
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
				);
			}}
		/>
	);
}
