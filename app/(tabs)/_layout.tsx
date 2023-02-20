import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable, useColorScheme } from "react-native";

import Colors from "../../constants/Colors";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
	name: React.ComponentProps<typeof FontAwesome>["name"];
	color: string;
}) {
	return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
	const colorScheme = useColorScheme();

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
			}}>
			<Tabs.Screen
				name="index"
				options={{
					/**
					 * @see https://expo.github.io/router/docs/guides/tabs#hiding-a-tab
					 */
					// href: null,
					title: "with <Image />",
					tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
					headerRight: () => (
						/**
						 * @todo render something on prod
						 */
						<Link href="/_sitemap" asChild>
							<Pressable>
								{({ pressed }) => (
									<FontAwesome
										name="info-circle"
										size={25}
										color={Colors[colorScheme ?? "light"].text}
										style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
									/>
								)}
							</Pressable>
						</Link>
					),
				}}
			/>
			<Tabs.Screen
				name="two"
				options={{
					// href: null,
					title: "Tab Two",
					tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
				}}
			/>
			<Tabs.Screen
				name="expo-image"
				options={{
					// href: null,
					title: "with <Expo-Image />",
					tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
				}}
			/>
		</Tabs>
	);
}
