import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native"

class FirstApp extends Component {
    render() {
        return (
            <View style = {{ flex: 1, width: 100 + "%", height: 100 + "%"}}>
                <View style = {styles.TempNav}>
                    <Text> Instagram </Text>
                </View>
                <View style = {styles.UserBar}/>
                    <View 
                        style = {{ 
                          flexDirection: "row", 
                          alignItems: "center", 
                          paddingHorizontal: 10,  
                        }}>
                            <Image 
                            style = {styles.UserPic}
                            source = {{ 
                                uri: "https://scontent-waw1-1.cdninstagram.com/v/t51.2885-19/s150x150/118773618_3474871205869012_5808192855788746479_n.jpg?tp=1&_nc_ht=scontent-waw1-1.cdninstagram.com&_nc_ohc=6WkQ40fKNkMAX-M5GuP&edm=ABfd0MgAAAAA&ccb=7-4&oh=41e3be0f76031c7dc11d51cabeb2757b&oe=609DE850&_nc_sid=7bff83"
                            }}
                    />
                    <Text style = {{ marginLeft: 10 }}> A_OFN </Text>
                </View>
                <View>
                    <Text>...</Text>
                </View>
                <Image 
                  style = {{ width: 100 + "%", height: 100 }}
                  source = {{ 
                    uri: "data:image/jpeg;base64,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" 
                  }}
                />
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
        height: 18,
        backgroundColor: 'rgb(255, 255, 255)',
        flexDirection: "row",
        justifyContent: "space-between"
    },

    UserPic: {
        width: 40,
        height: 40,
        borderRadius: 20
    }
})

export default FirstApp;