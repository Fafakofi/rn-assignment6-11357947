import { View , StyleSheet , Text, Image, TouchableOpacity } from "react-native";

const OptionsCard = ({ item, addToCart}) => {

    return(
        <View style={styles.optionsView}>

            <View style={styles.leftOptions}>

                <Image source={item.icon}/>

                <TouchableOpacity onPress={() => addToCart(item)} >
                    <Image source={ require('./assets/add_circle.png')}  style={styles.addButton} 
                     />
                </TouchableOpacity>

                <Text style={styles.itemType}>
                    {item.type}
                </Text>

                <Text style={styles.cardigan}>
                    Reversable angora cardigan
                </Text>

                <Text style={styles.price}>
                    {item.price}
                </Text>

            </View>

            
        </View>
    )
};

const styles = StyleSheet.create({
    optionsView: {
        marginRight:  10,
        marginBottom: 12,
        
    },

    itemType: {
        fontFamily: 'serif',
        marginBottom: 5,
       
    },

    cardigan: {
        fontWeight: '200',
        fontSize: 11,
        fontFamily: 'sans-serif',
        marginBottom: 5
     },

     price: {
        color: 'tomato',
        marginBottom: 5
     },

     addButton: {
        bottom: 30,
        left: 130
     }
});

export default OptionsCard;