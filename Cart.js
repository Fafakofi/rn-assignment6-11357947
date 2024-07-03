import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

export default function Cart({ route, navigation }) {
    const { cart, removeFromCart } = route.params;

    return (
        <View style={styles.container}>
            <FlatList
                data={cart}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View style={styles.cartItem}>
                        <Text>{item.type1}</Text>
                        <Text>{item.price}</Text>
                        <Button title="Remove" onPress={() => removeFromCart(item.id)} />
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
    cartItem: {
        marginBottom: 10,
    },
});
