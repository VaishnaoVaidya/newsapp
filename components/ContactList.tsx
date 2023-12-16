import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts = [
        {
            uid: 1,
            name: 'Vaishnao Vaidya',
            status: 'I love to Code and Teach',
            imageUrl: 'https://avatars.githubusercontent.com/u/146530814?s=400&u=dfbef70ddbbba83d9084ecd43f14e8df2ea6f1cf&v=4'
        },
    {
            uid: 2,
            name: 'CodeWithHarry',
            status: 'INotebook is a React Application for managing personal notes on the cloud',
            imageUrl: 'https://avatars.githubusercontent.com/u/48705673?v=4'
        },
    {
            uid: 3,
            name: 'Hitesh Choudhary',
            status: 'I make coding videos on youtube and for courses',
            imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4'
        },
    {
            uid: 4,
            name: 'Vaishnao Vaidya',
            status: 'Source Code for Sigma Web Development Course',
            imageUrl: 'https://avatars.githubusercontent.com/u/133197646?s=100&v=4'
        },
    ]
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView
      style={styles.container}
      scrollEnabled={false}
      >
        {contacts.map(({uid, name, status, imageUrl}) =>(
            <View key={uid} style={styles.userCard}>
                <Image 
                source={{
                    uri: imageUrl
                }}
                style={styles.userImage}
                />
                <View>
                <Text style={styles.userName}>{name}</Text>
                <Text style={styles.userStatus}>{status}</Text>
                </View>
            </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    container: {
        paddingHorizontal: 16,
        marginBottom: 4
    },
    userCard: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 3,
        backgroundColor: '#6A89CC',
        padding: 4,
        borderRadius: 10
    },
    userImage: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        marginRight: 14
    },
    userName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#fff'
    },
    userStatus: {
        fontSize: 12
    },
})