import { StyleSheet, Text, View, Image, FlatList , TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import OptionsCard from './OptionsCard';


export default function Home ( { navigation } ){

    const [cart, setCart] = useState([]);

    const options = [
        {id: 1, icon1: require('./assets/dress1.png'), icon2: require('./assets/dress2.png'), type1: 'Office Wear', type2: 'Black', price : '$120' },
        {id: 2, icon1: require('./assets/dress3.png'), icon2: require('./assets/dress4.png'), type1: 'Church Wear', type2: 'Lamerei', price : '$150' },
        {id: 3, icon1: require('./assets/dress5.png'), icon2: require('./assets/dress6.png'), type1: '21WN', type2: 'Lopo', price : '$130' },
        {id: 4, icon1: require('./assets/dress7.png'), icon2: require('./assets/dress3.png'), type1: '21WN', type2: 'Lame', price : '$100' },
    ];

    const addToCart = (item) => {
        setCart([...cart, item]);
    };

    const removeFromCart = (itemId) => {
        setCart(cart.filter(item => item.id !== itemId));
    };

    const handleCartNavigation = () => {
       navigation.navigate('Cart', { cart, removeFromCart })
    }

    return (
        <View style={styles.container}>
            <View style={styles.container1}>
                <View style={styles.header}> 

                    <View >
                        <Image source={require("./assets/Menu.png")}/>

                    </View>

                    <View>
                        <Image source={require("./assets/Logo.png")}/>
                    </View>

                    <View style={styles.farRight}>
                        <View>
                            <Image source={require("./assets/Search.png")}/>

                        </View>

                        <View>
                            <TouchableOpacity   onPress={handleCartNavigation }> 
                                <Image source={require("./assets/shoppingBag.png")} style={styles.bag}/>
                            </TouchableOpacity>
                        </View>
      
                    </View>

                </View>

                <View style={styles.header}>

                    <View>
                        <Text style={styles.story}>
                            OUR STORY
                        </Text>
                    </View>

                    <View style={styles.farRight}>
                        <View style={styles.circleContainer}>
                            <Image source={require("./assets/Listview.png")} />

                        </View>

                        <View style={styles.circleContainer}>
                            <Image source={require("./assets/Filter.png")} />
                        </View>
                    </View>
                </View>

                <FlatList 
                    data= {options}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => <OptionsCard item={item} />}
                    keyExtractor={item => item.id.toString()}
                />


                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },

    container1: {
        flex: 1,
        backgroundColor: '#fff',
        marginLeft: 12,
        marginRight: 12,
        marginTop: 70,
      },

      header: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20
      },

      bag: {
        marginLeft: 20
      },

      farRight: {
        display: "flex",
        flexDirection: "row",
      },

      circleContainer: {
        width: 40,
        height: 40,
        backgroundColor: "#F0f0f0",
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 20
      },

      story: {
        fontFamily: 'monospace',
        fontSize: 20
      },

      

  




  });