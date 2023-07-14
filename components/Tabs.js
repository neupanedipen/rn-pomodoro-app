import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native'

const TabButton = ({ name, activeTab, onHandleSearchType }) => {
    return <TouchableOpacity style={styles.btn(name, activeTab)} onPress={onHandleSearchType}>
        <Text style={styles.btnText(name, activeTab)}>{name}</Text>
    </TouchableOpacity>
}

const Tabs = ({ activeTab, tabs, setActiveTab }) => {
    return (
        <View style={styles.container}>
            <FlatList data={tabs} renderItem={({ item }) => {
                return <TabButton name={item} activeTab={activeTab} onHandleSearchType={() => setActiveTab(item)} />
            }} horizontal showsHorizontalScrollIndicator={false} keyExtractor={item => item} contentContainerStyle={{ columnGap: 6 }} />
        </View>
    )
}

export default Tabs

const styles = StyleSheet.create({
    container: {
        marginTop: 12,
        marginBottom: 12 / 2,
    },
    btn: (name, activeTab) => ({
        paddingVertical: 8,
        paddingHorizontal: 24,
        backgroundColor: name === activeTab ? '#312651' : "#F3F4F8",
        borderRadius: 8,
        marginLeft: 2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 5.84,
        elevation: 5,
        shadowColor: 'white',
    }),
    btnText: (name, activeTab) => ({
        fontFamily: "DMMedium",
        fontSize: 12,
        color: name === activeTab ? "#C3BFCC" : "#AAA9B8",
    })
})