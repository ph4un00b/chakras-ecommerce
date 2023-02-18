import { StyleSheet } from "react-native";

import { Text, View } from "../../components/Themed";

export default function TabOneScreen() {
	return (
		<View className="flex-1 items-center justify-center bg-slate-900">
			<Text className="text-slate-100 text-xl">Tab One</Text>
			<View
				style={styles.separator}
				lightColor="#eee"
				darkColor="rgba(255,255,255,0.1)"
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	separator: {
		marginVertical: 30,
		height: 1,
		width: "80%",
	},
});
