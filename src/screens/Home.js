import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, FlatList, Image, TextInput } from 'react-native'
import React from 'react'
import { ROUTES, Category, IMAGES, TrendingRecipes } from '../const'
import { CategoryCard, TrendingCard } from '../components';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const Home = ({ navigation }) => {
    const [viewAll, setView] = React.useState(false);
    const Header = () => {
        return (
            <View style={{
                flexDirection: 'row',
                marginHorizontal: 20,
                alignItems: 'center',
                height: 80,
                // borderWidth: 1,
                // borderColor: 'black'
            }} >
                {/* Text */}
                <View style={{ flex: 1 }} >
                    <Text style={{ color: '#4ec261', fontSize: 20, fontWeight: 'bold' }}>Hello Lovely Customers</Text>
                    <Text style={{ fontSize: 16, marginTop: 3, color: 'rgba(0,0,0,0.3' }}>What you want to cook today ?</Text>
                </View>
                {/* Image */}
                <TouchableOpacity
                    onPress={() => console.log("Profile...")}
                >
                    <Image
                        source={IMAGES.darkFloral}
                        style={{ height: 40, width: 40, borderRadius: 20 }}
                    />
                </TouchableOpacity>
            </View>

        )
    }
    const SearchBar = () => {
        const [text, setText] = React.useState('');
        return (
            <View style={{
                flexDirection: 'row',
                height: 50,
                alignItems: 'center',
                marginHorizontal: 10,
                paddingHorizontal: 10,
                borderRadius: 10,
                backgroundColor: 'rgba(0,0,0,0.02)'

            }} >
                <FontAwesome5 name={'search'} size={20} color={'rgba(0,0,0,0.3)'} />
                <TextInput
                    style={{
                        marginLeft: 10,
                        fontSize: 14,
                        color: 'black',

                    }}
                    onChangeText={(e) => { setText(e) }}
                    placeholder='Look Up Recipes...'
                    placeholderTextColor={'rgba(0,0,0,0.4)'}
                />
                {/* <Text>{text}</Text> */}
            </View>
        )
    }
    const SeeRecipeCard = ({ setViewAll }) => {
        return (
            <View style={{
                flexDirection: 'row',
                marginTop: 10,
                marginHorizontal: 10,
                borderRadius: 10,
                backgroundColor: '#f5fcf5',
            }} >
                {/* Image */}
                <View style={{
                    width: 100,
                    alignItems: 'center',
                    justifyContent: 'center',
                }} >
                    <Image source={IMAGES.fruidSalad} style={{ width: 80, height: 80, borderRadius: 40 }} />
                </View>
                {/* Text */}
                <View style={{
                    flex: 1,
                    paddingVertical: 10,
                    marginLeft: 5
                }} >
                    <Text style={{
                        width: '70%', fontSize: 15, color: 'black', padding: 5,
                        // borderWidth: 1, borderColor: 'black'
                    }} >
                        You have {'12'} recipes that you haven't tried yet.
                    </Text>
                    <TouchableOpacity
                        style={{ alignItems: 'flex-start', justifyContent: 'center', }}
                        onPress={() => console.log('See Recipes')}
                    >
                        <Text style={{ color: 'green', fontSize: 18, fontWeight: 'bold', textAlign: 'center' }} >See Recipes</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    const TrendingSection = () => {
        return (
            <View style={{ marginTop: 10 }} >
                <Text style={{ marginHorizontal: 10, fontSize: 18, fontWeight: 'bold', color: 'black' }} >Trending Recipes</Text>
                <FlatList
                    data={TrendingRecipes}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({ item, index }) => {
                        return (
                            <TrendingCard
                                recipeItem={item}
                                // OnPress={}
                                ContainerStyle={{
                                    marginLeft: index == 0 ? 10 : 0
                                }}
                                OnPress={() => { navigation.navigate(ROUTES.RECIPE, { recipe: item }) }}

                            />
                        )
                    }}

                />
            </View>)
    }
    const CategoryHeader = () => {
        return (
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                // justifyContent: 'space-between',
                marginTop: 20,
                marginHorizontal: 10,
                // backgroundColor: 'green'
            }} >
                {/* Section Title */}
                <Text style={{ fontSize: 18, color: 'black', marginLeft: 12, fontWeight: 'bold', flex: 1 }} >Categories</Text>
                {/* View All */}
                <TouchableOpacity
                    onPress={() => setView(!viewAll)}
                >
                    <Text style={{ fontSize: 14, marginRight: 12, color: '#89D188' }} >View All</Text>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: 'white'
            }}
        >
            <FlatList
                data={Category}
                KeyExtractor={item => `${item.id}`}
                keyBoardDismissMode="on-drag"
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={
                    <View>
                        {/* Header */}
                        <Header />
                        {/* Search Bar */}
                        <SearchBar />
                        {/* See Recipe Card */}
                        <SeeRecipeCard />
                        {/* Trending Section */}
                        <TrendingSection />
                        {/* Category Header Section */}
                        <CategoryHeader />
                    </View>
                }
                renderItem={({ item }) => {
                    return (
                        <CategoryCard
                            ViewAll={viewAll}
                            ContainerStyle={{ marginHorizontal: 10 }}
                            CategoryItem={item}
                            OnPress={() => { navigation.navigate(ROUTES.RECIPE, { recipe: item }) }}
                        />
                    )
                }}
                ListFooterComponent={
                    <View
                        style={{ marginBottom: 100 }}
                    >
                        <Text>Hello World Footer</Text>
                    </View>
                }
            />


        </SafeAreaView>
    )
}
export default Home;

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'green',
        padding: 17,
        margin: 10,
        borderRadius: 5,
        fontSize: 18,
        width: 180,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
})