import React, { useState } from "react";
import { View, Text, FlatList, Image, ScrollView, TouchableOpacity } from "react-native";
import { styles } from '../../styles/postsStyles';


const PostScreen = ({ route, navigation }) => {
    const [items, setItems] = useState([]);

    return (
        <ScrollView style={styles.container}>
            <View style={styles.userContainer}>
                <View style={styles.userPhotoContainer}>
                    <Image
                        style={styles.userImage}
                        source={require("../../images/Photo60.jpg")}
                    />
                    <View style={styles.userTextContainer}>
                        <Text style={styles.userTextName}>Natali Romanova</Text>
                        <Text style={styles.userTextMail}>email@example.com</Text>
                    </View>
                </View>
            </View>

            <FlatList
                style={styles.containerFlatList}
                data={items}
                renderItem={({ item }) => (
                    <View style={{ marginTop: 32, flex: 1 }}>
                        <View>
                            <Image source={{ uri: item.photos }} style={styles.photo} />
                            <Text style={{ marginTop: 10, marginBottom: 10 }}>
                                Name: {item.name}
                            </Text>
                        </View>
                        <View style={styles.navContainer}>
                            <TouchableOpacity
                                style={styles.comentarContainer}
                                onPress={() =>
                                    navigation.navigate("Comments", {
                                        location: item.photo,
                                        postId: item.id,
                                        autorPostId: item.userId,
                                    })
                                }
                            >
                                <FontAwesome name="comments-o" size={24} color="black" />
                                <Text>{item.commentsQuantity ? item.commentsQuantity : "0"}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.locationContainer}
                                onPress={() =>
                                    navigation.navigate("MapScrean", {
                                        location: item.locationName,
                                    })
                                }
                            >
                                <MaterialCommunityIcons
                                    name="map-marker-outline"
                                    size={24}
                                    color="#BDBDBD"
                                />
                                <Text>{item.locationName}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />
        </ScrollView>
    );
};

export default PostScreen;