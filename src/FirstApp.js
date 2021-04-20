import React, { Component } from "react";
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from "react-native"
import config from "./config";

class FirstApp extends Component {
    constructor() {
        super();
        this.state = {
            liked: false,
            screenWidth: Dimensions.get("window").width
        };
    }

    likeToggled() {
        this.setState({
            liked: !this.state.liked
        });
    }

    render() {
        const imageHeight = Math.floor(this.state.screenWidth * 1.1);
        const imageUri =
            "https://cdn.shopify.com/s/files/1/0272/4770/6214/articles/when-do-puppies-start-walking.jpg?v=1593020034" +
            "=s" +
            imageHeight +
            "-c";
        const heartIconColor = (this.state.liked) ? "rgb(252,61,57)" : "rgb(0,0,0)";
        return (
            <View style={{ flex: 1, width: 100 + "%", height: 100 + "%" }}>
                <View style={styles.TempNav}>
                    <Text style={{ fontSize: 17 }}> Instagram </Text>
                </View>
                <View style={styles.UserBar}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Image
                            style={styles.UserPic}
                            source={{
                                uri: "https://scontent-waw1-1.cdninstagram.com/v/t51.2885-19/s150x150/118773618_3474871205869012_5808192855788746479_n.jpg?tp=1&_nc_ht=scontent-waw1-1.cdninstagram.com&_nc_ohc=6WkQ40fKNkMAX-M5GuP&edm=ABfd0MgAAAAA&ccb=7-4&oh=41e3be0f76031c7dc11d51cabeb2757b&oe=609DE850&_nc_sid=7bff83"
                            }}
                        />
                        <Text style={{ marginLeft: 10 }}> A_OFN </Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ fontSize: 31 }}>...</Text>
                    </View>
                </View>
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => {
                        this.likeToggled();
                    }}>
                    <Image
                        style={{ width: this.state.screenWidth, height: 430 }}
                        source={{
                            uri: imageUri
                        }}
                    />
                </TouchableOpacity>
                <View style={styles.iconBar}>
                    <Image
                        style={
                            [styles.icon,
                            {
                                height: 45,
                                width: 45,
                                tintColor: heartIconColor
                            }
                            ]
                        }
                        source={config.images.heartIcon}
                    />
                    <Image
                        style={[styles.icon, { height: 35, width: 35 }]}
                        source={config.images.bubbleIcon}
                    />
                    <Image
                        resizeMode="stretch"
                        style={[styles.icon, { height: 50, width: 40 }]}
                        source={config.images.arrowIcon}
                    />
                </View>
                <View style={styles.commentBar}>
                    <Image
                        style={[styles.icon, { height: 30, width: 30 }]}
                        source={config.images.heartIcon}
                    />
                    <Text>128 Likes</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    TempNav: {
        width: 100 + "%",
        height: 29,
        marginTop: 8,
        backgroundColor: 'rgb(250, 250, 250)',
        borderBottomColor: 'rgb(233, 233, 233)',
        borderBottomWidth: StyleSheet.hairlineWidth,
        justifyContent: "center",
        alignItems: 'center'
    },

    UserBar: {
        width: 100 + "%",
        height: 50,
        backgroundColor: 'rgb(255, 255, 255)',
        flexDirection: "row",
        paddingHorizontal: 10,
        justifyContent: "space-between"
    },

    UserPic: {
        alignItems: 'center',
        width: 40,
        height: 40,
        borderRadius: 20
    },

    iconBar: {
        height: 55,
        width: 100 + "%",
        borderColor: 'rgb(233, 233, 233)',
        borderTopWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: "row",
        alignItems: "center"
    },

    icon: {
        marginLeft: 5
    },

    commentBar: {
        height: 55,
        width: 100 + "%",
        borderColor: 'rgb(233, 233, 233)',
        borderTopWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: "row",
        alignItems: "center"
    }
})

export default FirstApp;
