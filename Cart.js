import React, { useContext } from 'react';
import { View, Text, FlatList, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { CartContext } from './CartContext';

export default function Cart({ route, navigation }) {
    const { cart, removeFromCart } = useContext(CartContext);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View>

                </View>

                <View> 
                    <Image source={require('./assets/Logo.png')} />
                </View>

                <View>
                    <Image source={require('./assets/Search.png')} />
                </View>
            </View>
            <FlatList
                data={cart}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View style={styles.cartItem}>

                        <View style={styles.cartImg}> 
                            <Image source={item.icon} />

                        </View>

                        <View>
                            <Text style={styles.story}>{item.type}</Text>

                                <Text style={styles.cardigan}>
                                    Reversable angora cardigan
                                </Text>

                            <Text style={styles.price}>{item.price}</Text>

                        </View>

                        <View style={styles.delete}>
                            <TouchableOpacity  onPress={() => removeFromCart(item.id)}>
                                <Image source={require('./assets/remove.png')} />
                            </TouchableOpacity>
                        </View>

                    </View>
                )}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },

    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 40,
        marginBottom: 40
    },


    cartItem: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },

    cardigan: {
        fontWeight: '200',
        fontSize: 11,
        fontFamily: 'sans-serif',
        marginBottom: 15
     },

     story: {
        fontFamily: 'monospace',
        fontSize: 20,
        marginBottom: 15     
     },

     delete: {
        top: 190,
        right: 20
     },

     cartImg: {
        marginRight: 10
     },

     price: {
        color: 'tomato'
     }
});
