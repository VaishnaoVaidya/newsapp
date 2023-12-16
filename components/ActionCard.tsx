import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink: string) {
        Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
      <View style={styles.headingContainer}>
        <Text style={styles.headerText}>
            What's new in Javascript 21 - ES12
        </Text>
        </View>
        <Image
        source={{
            uri: 'https://images.pexels.com/photos/839443/pexels-photo-839443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        }}
        style={styles.cardImage}
         />
         <View style={styles.bodyContainer}>
            <Text numberOfLines={3}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem nam fugiat tenetur, incidunt nisi eveniet quidem nulla at beatae, ducimus possimus, autem ipsum architecto quasi sed facilis assumenda ipsam consectetur veniam laboriosam inventore?
            </Text>
         </View>
      <View style={styles.footerContainer}>
                <TouchableOpacity
                onPress= {()=> openWebsite('https://draft.dev/learn/javascript-blogs') }
                >
                    <Text style={styles.socialLinks}>Read More</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress= {()=> openWebsite('https://www.instagram.com/vaisno_ov.xii?igshid=MmVlMjlkMTBhMg==') }
                >
                    <Text style={styles.socialLinks}>Follow Me</Text>
                </TouchableOpacity>
         </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    card: {
        width: 350,
        height: 360,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16
    },
    elevatedCard: {
        backgroundColor: '#E07C24',
        elevation: 3,
        shadowOffset:{
            width: 1,
            height: 1
        },
        shadowColor: '#333',
        shadowOpacity: 0.4
    },
    headingContainer: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        color: '#000',
        fontSize: 16,
        fontWeight: '600'
    },
    cardImage: {
        height: 200
    },
    bodyContainer: {
       padding: 10
    },
    footerContainer: {
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    socialLinks: {
        fontSize: 16,
        color: '#000000',
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 6
    }
})