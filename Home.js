import { StyleSheet, Text, View, Image, FlatList , TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import OptionsCard from './OptionsCard';
import { CartContext } from './CartContext';


export default function Home ( { navigation } ){
    const { cart, addToCart, removeFromCart } = useContext(CartContext);

    const options = [
        {id: 1, icon: require('./assets/dress1.png'), type: 'Office Wear', price : '$120' },
        {id: 2, icon: require('./assets/dress2.png'), type: 'Church Wear',  price : '$150' },
        {id: 3, icon: require('./assets/dress3.png'), type: '21WN', price : '$130' },
        {id: 4, icon: require('./assets/dress5.png'), type: '21WN',  price : '$100' },
        {id: 5, icon: require('./assets/dress5.png'), type: 'Lame', price : '$100' },
        {id: 6, icon: require('./assets/dress6.png'), type: 'Lame', price : '$100' },
        {id: 7, icon: require('./assets/dress7.png'), type: 'Lame', price : '$100' },
        {id: 8, icon: require('./assets/dress3.png'), type: 'Lame', price : '$100' },
    
    ];

    const handleCartNavigation = () => {
        navigation.navigate('Cart');
    };
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
                    renderItem={({ item }) => <OptionsCard item={item} addToCart={addToCart} />}
                    keyExtractor={item => item.id.toString()}
                    numColumns={2}
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