import { StyleSheet, Text, View, Image } from 'react-native';

export default function Home (){
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
                            
                            <Image source={require("./assets/shoppingBag.png")} style={styles.bag}/>
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
                        <View>
                            <Image source={require("./assets/Listview.png")} style={styles.bag}/>

                        </View>
                        <View>
                            <Image source={require("./assets/Filter.png")} style={styles.bag}/>
                        </View>
                    </View>
                </View>


                
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
        marginLeft: 20,
        marginRight: 20,
        marginTop: 70,
      },

      header: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20
      },

      farRight: {
        display: "flex",
        flexDirection: "row",
      },

      bag: {
        marginLeft: 20
      },

      story: {
        fontFamily: 'monospace',
        fontSize: 20
      },

  




  });