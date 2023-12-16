import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCards() {
  return (
    <View>
      <Text style={styles.headingText}>Trending places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
        source={{
            uri: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=600'
        }}
        style={styles.cardImage}
        />
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Peacock Feather</Text>
            <Text style={styles.cardLabel}>National Bird Feather</Text>
            <Text style={styles.cardDescription}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta necessitatibus natus ipsam fuga dolore nostrum veniam asperiores adipisci ratione sapiente corrupti, debitis voluptates mollitia? Quas nostrum impedit dolore non, soluta corrupti atque ad!</Text>
            <Text style={styles.cardFooter}>12 mins away</Text>

        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize : 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    card:{
        width: 360,
        height: 400,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16
    },
    cardElevated:{
        backgroundColor: '#ffffff',
        elevation: 3,
        shadowOffset:{
            width: 1,
            height: 1
        }
    },
    cardImage:{
        height: 200,
        marginBottom: 8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6
    },
    cardBody:{
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12
    },
    cardTitle:{
        color: '#000000',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 4
    },
    cardLabel:{
        color: '#000000',
        fontSize: 16,
        marginBottom: 6
    },
    cardDescription:{
        color: '#10A881',
        fontSize: 14,
        marginBottom: 12,
        marginTop: 6,
        flexShrink: 1
    },
    cardFooter:{
        color: '#2B2B52'
    }
})