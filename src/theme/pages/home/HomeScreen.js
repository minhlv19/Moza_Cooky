import React, {Component} from 'react';
import {Platform, Text, View, StyleSheet, FlatList, Image, ScrollView, TouchableOpacity} from "react-native";
import {Card} from "react-native-elements";
import {Class} from "@babel/types";


export default class HomeScreen extends Component {
    constructor() {
        super();
        this.state = {
            listname: [
                {name: "bun moc"},
                {name: "knorr channel"},
                {name: "Ga ham thuoc bac"},
                {name: "Banh da tron"},
                {name: "banh flan"},
                {name: "canh ga chien nuoc mam"},
                {name: "banh bot loc    "},

            ],


            stickyHeaderIndices: []

        };

    }

    componentWillMount() {
        var arr = [];
        this.state.listname.map(obj => {
            if (obj.header) {
                arr.push(this.state.listname.indexOf(obj));
            }
        });

        arr.push(0);
        this.setState({
            stickyHeaderIndices: arr
        });
    }

    renderItem = ({item}) => {
        console.log("item: " + JSON.stringify(item))
        return (
            <View style={styles.content}>
                <Text style={{fontWeight: "bold",}}>
                    {item.name}
                </Text>
            </View>
        )

    };

    render() {
        return (
            <View style={{flex: 1}}>
                {/*<View>*/}
                {/*    <SearchBar*/}

                {/*        lightTheme*/}
                {/*        platform={Platform.OS}*/}
                {/*        containerStyle={{backgroundColor: "#ffffff", width: "90%", marginLeft: 10, height: 15,marginTop:15}}*/}
                {/*        placeholder="Search a Route..."*/}
                {/*    />*/}

                {/*</View>*/}
                <View>

                    <FlatList
                        style={{paddingLeft: 5}}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        automaticallyAdjustContentInsets={false}
                        removeClippedSubviews={false}
                        enableEmptySections={false}
                        pagingEnabled={false}
                        legacyImplementation={false}
                        data={this.state.listname}
                        renderItem={this.renderItem}
                        keyExtractor={item => item.name}
                        stickyHeaderIndices={this.state.stickyHeaderIndices}
                    />
                </View>
                <ScrollView>
                    <View>

                        <Image style={styles.image} source={require('../../../asset/image/monngon.jpg')}/>
                    </View>
                    <SingleRow/>
                    <View1/>
                    <View2/>
                    <View3/>
                </ScrollView>

            </View>


        );
    }

}
const styles = StyleSheet.create({
        content: {
            marginLeft: 10
        },
        image: {
            width: "100%",
            height: 100,
            borderRadius: 12,
            margin: 6,
            alignItems: 'center',
            justifyContent: 'center',

        },
        icon: {

            width: 60,
            height: 60,
            borderRadius: 50,
        },

    }
);

class SingleRow extends React.Component {
    constructor(props) {
        super(props);
        const slides = [
            {

                title: 'Thử thách ',
                uri: 'https://lh3.googleusercontent.com/hu8dohdfDMTnpDbns7MRHIpPVnEVUCy0c5wwiNbPAMIPcEOtOgseRs0S9dJmeQuD7x7Q',
                backgroundColor: '#20d2bb',
            },
            {
                title: 'Video ',
                uri: 'http://pngriver.com/wp-content/uploads/2018/03/Download-Video-Icon-PNG-Pic-For-Designing-Projects.png',
                backgroundColor: '#febe29',
            },
            {
                title: 'Công thức',
                uri: 'https://image.winudf.com/v2/image1/Y29tLm5pc2kucmVjaXBlc19pY29uXzE1NTExOTQ0NjZfMDc0/icon.png?w=170&fakeurl=1',
                backgroundColor: '#22bcb5',
            },
            {
                title: 'Bài Viết',
                uri: 'http://ncif.gov.vn/UserControls/img/newicon.jpg',
                backgroundColor: '#3395ff',
            },

            {
                title: 'Tốp thành viên',
                uri: 'https://png.pngtree.com/png-vector/20190612/ourlarge/pngtree-awardtoppositionreward-blue-icon-on-abstract-cloud-backgro-png-image_1342735.jpg',
                backgroundColor: '#febe29',
            },
            {
                title: 'Đổi thưởng',
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0P310ppdg4Xe8gwf0ItsjDAFKYekyZBhYjCuhimjGh9c4tPS2',
                backgroundColor: '#febe29',
            },

        ];
        global.slides = slides;
    }


    render() {
        return (
            <View>
                <Card
                    containerStyle={{
                        backgroundColor: '#FFFFFF',
                        padding: 10,
                        marginLeft: 0,
                        marginRight: 0,
                        marginTop: 0,
                    }}>
                    <View style={{flexDirection: 'row', width: '100%'}}>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}>
                            {global.slides.map((item, key) => (
                                <View style={{width: 50, marginRight: 10, alignItems: 'center'}}>
                                    <Image

                                        source={{
                                            uri: item.uri,
                                        }}
                                        style={{width: 30, height: 30, alignItems: 'center', borderRadius: 50}}
                                    />
                                    <Text numberOfLines={1}
                                          style={{fontSize: 10, marginTop: 4}}>
                                        {item.title}
                                    </Text>


                                </View>
                            ))}
                        </ScrollView>
                    </View>
                </Card>
            </View>
        )
    }
}

class View1 extends React.Component {
    constructor(props) {
        super(props);
        const slides = [
            {

                title: 'Gân bò xào sa tế',
                uri: 'https://giadinh.tv/wp-content/uploads/2019/05/cach-nau-gan-bo-xao-sa-te.jpg',
                backgroundColor: '#20d2bb',
            },
            {
                title: 'Sup cua thập cẩm ',
                uri: 'https://media.cooky.vn/recipe/g2/19494/s800x500/recipe19494-636274205695226444.jpg',
                backgroundColor: '#febe29',
            },
            {
                title: 'Cơm chiên mực trứng muối',
                uri: 'https://media.cooky.vn/recipe/g5/46698/s800x500/cooky-recipe-cover-r46698.jpg',
                backgroundColor: '#22bcb5',
            },
            {
                title: 'Bánh trứng cút',
                uri: 'https://media.cooky.vn/recipe/g5/47092/s800x500/cooky-recipe-cover-r47092.jpg',
                backgroundColor: '#3395ff',
            },


        ];
        global.slides = slides;
    }

    render() {
        return (
            <View>
                <Card
                    containerStyle={{
                        backgroundColor: '#FFFFFF',
                        padding: 10,
                        marginLeft: 0,
                        marginRight: 0,
                        marginTop: 0,
                    }}>
                    <View>
                        <Text style={{fontWeight: 'bold', color: '#000'}}>Món ngon hôm nay</Text>
                    </View>
                    <View style={{flexDirection: 'row', width: '100%', marginTop: 10}}>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}>
                            {global.slides.map((item, key) => (
                                <View style={{width: 300, marginRight: 20,}}>
                                    <Image

                                        source={{
                                            uri: item.uri,
                                        }}
                                        style={{width: 300, height: 150,}}
                                    />
                                    <Text numberOfLines={1}
                                          style={{fontSize: 15, marginTop: 4}}>
                                        {item.title}
                                    </Text>


                                </View>
                            ))}
                        </ScrollView>
                    </View>
                </Card>
            </View>
        )
    }

}

class View2 extends React.Component {
    constructor(props) {
        super(props);
        const slides = [
            {
                //logo: require('../../../asset/image/logocooky.jpg'),
                title: 'Thu sắc màu gửi thương yêu',
                uri: 'https://tuhocdohoa.vn/wp-content/uploads/2018/08/TT013-mua-lan-mua-rong-chi-hang-vui-tet-trung-thu.jpg',
                backgroundColor: '#20d2bb',
            },


        ];
        global.slides = slides;
    }

    render() {
        return (
            <View>
                <Card
                    containerStyle={{
                        backgroundColor: '#FFFFFF',
                        padding: 10,
                        marginLeft: 0,
                        marginRight: 0,
                        marginTop: 0,


                    }}>

                    <View
                        style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={{fontWeight: 'bold', color: '#000'}}>
                            Cooking Challenge
                        </Text>
                        <Text style={{color: '#228B22', fontSize: 10}} onPress={() => alert('MORE')}>
                            Xem thêm >
                        </Text>
                    </View>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}>
                        <View style={{ width: '100%'}}>
                        <View style={{
                            flexDirection: 'row', width: 200, marginTop: 10, borderWidth: 1,
                            borderColor: '#000', padding: 10, borderRadius: 5
                        }}>

                            {global.slides.map((item, key) => (
                                <View style={{marginRight: 20,}}>
                                    <View
                                        style={{flexDirection: 'row', justifyContent: 'space-between',width:150}}>
                                        <Image

                                            source={
                                                require('../../../asset/image/logocooky.jpg')

                                            }
                                            style={{width: 30, height: 30, borderRadius: 50,}}
                                        />
                                        <View style={{marginLeft:10}}>
                                            <Text style={{fontWeight: 'bold', fontSize: 15}}>Cooky VN</Text>
                                            <Text numberOfLines={1}>Recipe Challenge - Làm bánh trung thu gửi yêu
                                                thương</Text>
                                        </View>
                                    </View>
                                    <Image

                                        source={{
                                            uri: item.uri,
                                        }}
                                        style={{width: 180, height: 100, borderRadius: 20,marginRight:10,marginTop:10}}
                                    />
                                    <View style={{width:180}}>
                                    <Text numberOfLines={1}
                                          style={{fontSize: 20, marginTop: 4,fontWeight:'bold',color:'#000'}}>
                                        {item.title}
                                    </Text>
                                    <Text>50 người hứng thú tham gia</Text>
                                    <View style={{flexDirection: 'row', flex: 1}}>
                                        <TouchableOpacity style={{backgroundColor: '#ff4123',}}>
                                            <Text>Hứng thú</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{backgroundColor: '#0500f6', marginLeft: 10}}>
                                            <Text style={{paddingLeft: 5, paddingRight: 5}}>Than gia</Text>
                                        </TouchableOpacity>
                                    </View>
                                    </View>
                                </View>
                            ))}
                        </View>
                        </View>
                    </ScrollView>
                </Card>
            </View>
        )
    }

}

class View3 extends React.Component {
    constructor(props) {
        super(props);
        const slides = [

            {
                title: 'Chuyên đề Trung thu: Bánh Trung Thu Ngũ Cốc Yến Mạch ',
                uri: 'https://media.cooky.vn/cookingclass/s360x130/cooky-cookingclass-cover-c201.jpg',
                backgroundColor: '#febe29',
            },
            {
                title: 'Chuyên đề Trung Thu: Bánh Hoa Sen Ngàn Lớp',
                uri: 'https://media.cooky.vn/cookingclass/s/cooky-cookingclass-cover-c203.jpg',
                backgroundColor: '#22bcb5',
            },



        ];
        global.slides = slides;
    }

    render() {
        return (
            <View>
                <Card
                    containerStyle={{
                        backgroundColor: '#FFFFFF',
                        padding: 10,
                        marginLeft: 0,
                        marginRight: 0,
                        marginTop: 0,
                    }}>

                    <View
                        style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View>
                        <Text style={{fontWeight: 'bold', color: '#000'}}>
                            Lớp học nấu ăn đang diễn ra
                        </Text>
                            <Text >Hãy cùng tham gia và trải nghiệm nấu ăn</Text>
                        </View>
                        <Text style={{color: '#228B22', fontSize: 10}} onPress={() => alert('MORE')}>
                            Xem thêm >
                        </Text>
                    </View>
                    <View style={{flexDirection: 'row', width: '100%', marginTop: 10}}>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}>
                            {global.slides.map((item, key) => (
                                <View style={{width: 300, marginRight: 20,}}>
                                    <Image

                                        source={{
                                            uri: item.uri,
                                        }}
                                        style={{width: 300, height: 150,}}
                                    />
                                    <Text numberOfLines={1}
                                          style={{fontSize: 15, marginTop: 4}}>
                                        {item.title}
                                    </Text>


                                </View>
                            ))}
                        </ScrollView>
                    </View>
                </Card>
            </View>
        )
    }

}


