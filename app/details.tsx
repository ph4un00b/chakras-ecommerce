import { useSearchParams } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Details() {
	const data = useSearchParams();
	return (
		<View className="flex-1 items-center justify-center">
			<Text className="text-slate-900 text-xl">Item: {data.id}</Text>
			<Button title="+ Agregar" />
			<Button title="$ comprar" />
		</View>
	)
}
