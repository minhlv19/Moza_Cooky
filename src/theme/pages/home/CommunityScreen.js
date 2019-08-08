import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, ScrollView, TouchableOpacity, Dimensions} from 'react-native';
import {Card} from "react-native-elements";

import { TabView, SceneMap } from 'react-native-tab-view';

export default class CommunityScreen extends Component {
    render(){
        return (
           <ScrollView style={{backgroundColor:'#cbcbcb'}}>
               <View1/>
               <View2/>
               {/*//<TabView/>*/}
               <MyPager/>

           </ScrollView>

        )
    }

}
class View1 extends Component{
render(){
    return(
        <View
            style={{flexDirection: 'row', height:80,backgroundColor: '#ffffff'}}>
            <Image

                source={
                    require('../../../asset/image/logocooky.jpg')

                }
                style={{width: 40,marginLeft:10, height: 40, borderRadius: 50, marginTop: 10,justifyContent: 'center'}}
            />
            <View style={{marginLeft: 20, justifyContent: 'center',height:90}}>
                <Text style={{ fontSize: 15}}>Chia sẻ món ngon của bạn với cộng đồng</Text>
                <View
                style={{height:1,backgroundColor:'#cbcbcb',marginTop:8}}/>
                <View style={{flexDirection: 'row',marginTop:8}}>
                    <View style={{width:'46%',flexDirection: 'row'}}>
                        <Image
                            source={
                                require('../../../asset/image/note_icon.png')

                            }
                            style={{width: 20, height: 20,marginRight:5}}
                            />
                            <Text>Đăng công thức</Text>
                    </View>
                    <View style={{width:'50%',flexDirection: 'row'}}>
                        <Image
                            source={
                                require('../../../asset/image/camera_icon.png')

                            }
                            style={{width: 20, height: 20,marginRight:5}}
                        />
                        <Text>Hình thực hiện</Text>
                    </View>
                </View>


            </View>

        </View>

    )
}
}
class View2 extends Component{
    constructor(props) {
        super(props);
        const slides = [
            {

                title: 'Hồng nhung ',
                uri: 'https://scontent.fhan2-3.fna.fbcdn.net/v/t31.0-1/c282.0.960.960a/p960x960/1402926_10150004552801901_469209496895221757_o.jpg?_nc_cat=1&_nc_eui2=AeFR0LXah229g-HppkYTZoINMOV4GvDOZjftUQgzSpxvczeSF1a4kBArAGggMujSIDCBy9s102f5DH61tB_N1xHPlDk3ss6Y5oaGhhG7_8NxQw&_nc_oc=AQnCxKJ8gPJ_046vq0Dy7s23xUxHw54mQes7pRU5fAXBbstsA3VEXRfUrduUx0_qJaA&_nc_ht=scontent.fhan2-3.fna&oh=a8fca768cedb00de1bf369c88d552af6&oe=5DD6C952',
                backgroundColor: '#20d2bb',
            },
            {

                title: 'Hồng nhung ',
                uri: 'https://scontent.fhan2-3.fna.fbcdn.net/v/t31.0-1/c282.0.960.960a/p960x960/1402926_10150004552801901_469209496895221757_o.jpg?_nc_cat=1&_nc_eui2=AeFR0LXah229g-HppkYTZoINMOV4GvDOZjftUQgzSpxvczeSF1a4kBArAGggMujSIDCBy9s102f5DH61tB_N1xHPlDk3ss6Y5oaGhhG7_8NxQw&_nc_oc=AQnCxKJ8gPJ_046vq0Dy7s23xUxHw54mQes7pRU5fAXBbstsA3VEXRfUrduUx0_qJaA&_nc_ht=scontent.fhan2-3.fna&oh=a8fca768cedb00de1bf369c88d552af6&oe=5DD6C952',
                backgroundColor: '#20d2bb',
            },
            {

                title: 'Hồng nhung ',
                uri: 'https://scontent.fhan2-3.fna.fbcdn.net/v/t31.0-1/c282.0.960.960a/p960x960/1402926_10150004552801901_469209496895221757_o.jpg?_nc_cat=1&_nc_eui2=AeFR0LXah229g-HppkYTZoINMOV4GvDOZjftUQgzSpxvczeSF1a4kBArAGggMujSIDCBy9s102f5DH61tB_N1xHPlDk3ss6Y5oaGhhG7_8NxQw&_nc_oc=AQnCxKJ8gPJ_046vq0Dy7s23xUxHw54mQes7pRU5fAXBbstsA3VEXRfUrduUx0_qJaA&_nc_ht=scontent.fhan2-3.fna&oh=a8fca768cedb00de1bf369c88d552af6&oe=5DD6C952',
                backgroundColor: '#20d2bb',
            },
            {

                title: 'Hồng nhung ',
                uri: 'https://scontent.fhan2-3.fna.fbcdn.net/v/t31.0-1/c282.0.960.960a/p960x960/1402926_10150004552801901_469209496895221757_o.jpg?_nc_cat=1&_nc_eui2=AeFR0LXah229g-HppkYTZoINMOV4GvDOZjftUQgzSpxvczeSF1a4kBArAGggMujSIDCBy9s102f5DH61tB_N1xHPlDk3ss6Y5oaGhhG7_8NxQw&_nc_oc=AQnCxKJ8gPJ_046vq0Dy7s23xUxHw54mQes7pRU5fAXBbstsA3VEXRfUrduUx0_qJaA&_nc_ht=scontent.fhan2-3.fna&oh=a8fca768cedb00de1bf369c88d552af6&oe=5DD6C952',
                backgroundColor: '#20d2bb',
            },
            {

                title: 'Hồng nhung ',
                uri: 'https://scontent.fhan2-3.fna.fbcdn.net/v/t31.0-1/c282.0.960.960a/p960x960/1402926_10150004552801901_469209496895221757_o.jpg?_nc_cat=1&_nc_eui2=AeFR0LXah229g-HppkYTZoINMOV4GvDOZjftUQgzSpxvczeSF1a4kBArAGggMujSIDCBy9s102f5DH61tB_N1xHPlDk3ss6Y5oaGhhG7_8NxQw&_nc_oc=AQnCxKJ8gPJ_046vq0Dy7s23xUxHw54mQes7pRU5fAXBbstsA3VEXRfUrduUx0_qJaA&_nc_ht=scontent.fhan2-3.fna&oh=a8fca768cedb00de1bf369c88d552af6&oe=5DD6C952',
                backgroundColor: '#20d2bb',
            },
            {

                title: 'Hồng nhung ',
                uri: 'https://scontent.fhan2-3.fna.fbcdn.net/v/t31.0-1/c282.0.960.960a/p960x960/1402926_10150004552801901_469209496895221757_o.jpg?_nc_cat=1&_nc_eui2=AeFR0LXah229g-HppkYTZoINMOV4GvDOZjftUQgzSpxvczeSF1a4kBArAGggMujSIDCBy9s102f5DH61tB_N1xHPlDk3ss6Y5oaGhhG7_8NxQw&_nc_oc=AQnCxKJ8gPJ_046vq0Dy7s23xUxHw54mQes7pRU5fAXBbstsA3VEXRfUrduUx0_qJaA&_nc_ht=scontent.fhan2-3.fna&oh=a8fca768cedb00de1bf369c88d552af6&oe=5DD6C952',
                backgroundColor: '#20d2bb',
            },
            {

                title: 'Hồng nhung ',
                uri: 'https://scontent.fhan2-3.fna.fbcdn.net/v/t31.0-1/c282.0.960.960a/p960x960/1402926_10150004552801901_469209496895221757_o.jpg?_nc_cat=1&_nc_eui2=AeFR0LXah229g-HppkYTZoINMOV4GvDOZjftUQgzSpxvczeSF1a4kBArAGggMujSIDCBy9s102f5DH61tB_N1xHPlDk3ss6Y5oaGhhG7_8NxQw&_nc_oc=AQnCxKJ8gPJ_046vq0Dy7s23xUxHw54mQes7pRU5fAXBbstsA3VEXRfUrduUx0_qJaA&_nc_ht=scontent.fhan2-3.fna&oh=a8fca768cedb00de1bf369c88d552af6&oe=5DD6C952',
                backgroundColor: '#20d2bb',
            },
            {

                title: 'Hồng nhung ',
                uri: 'https://scontent.fhan2-3.fna.fbcdn.net/v/t31.0-1/c282.0.960.960a/p960x960/1402926_10150004552801901_469209496895221757_o.jpg?_nc_cat=1&_nc_eui2=AeFR0LXah229g-HppkYTZoINMOV4GvDOZjftUQgzSpxvczeSF1a4kBArAGggMujSIDCBy9s102f5DH61tB_N1xHPlDk3ss6Y5oaGhhG7_8NxQw&_nc_oc=AQnCxKJ8gPJ_046vq0Dy7s23xUxHw54mQes7pRU5fAXBbstsA3VEXRfUrduUx0_qJaA&_nc_ht=scontent.fhan2-3.fna&oh=a8fca768cedb00de1bf369c88d552af6&oe=5DD6C952',
                backgroundColor: '#20d2bb',
            },
            {

                title: 'Hồng nhung ',
                uri: 'https://scontent.fhan2-3.fna.fbcdn.net/v/t31.0-1/c282.0.960.960a/p960x960/1402926_10150004552801901_469209496895221757_o.jpg?_nc_cat=1&_nc_eui2=AeFR0LXah229g-HppkYTZoINMOV4GvDOZjftUQgzSpxvczeSF1a4kBArAGggMujSIDCBy9s102f5DH61tB_N1xHPlDk3ss6Y5oaGhhG7_8NxQw&_nc_oc=AQnCxKJ8gPJ_046vq0Dy7s23xUxHw54mQes7pRU5fAXBbstsA3VEXRfUrduUx0_qJaA&_nc_ht=scontent.fhan2-3.fna&oh=a8fca768cedb00de1bf369c88d552af6&oe=5DD6C952',
                backgroundColor: '#20d2bb',
            },
            {

                title: 'Hồng nhung ',
                uri: 'https://scontent.fhan2-3.fna.fbcdn.net/v/t31.0-1/c282.0.960.960a/p960x960/1402926_10150004552801901_469209496895221757_o.jpg?_nc_cat=1&_nc_eui2=AeFR0LXah229g-HppkYTZoINMOV4GvDOZjftUQgzSpxvczeSF1a4kBArAGggMujSIDCBy9s102f5DH61tB_N1xHPlDk3ss6Y5oaGhhG7_8NxQw&_nc_oc=AQnCxKJ8gPJ_046vq0Dy7s23xUxHw54mQes7pRU5fAXBbstsA3VEXRfUrduUx0_qJaA&_nc_ht=scontent.fhan2-3.fna&oh=a8fca768cedb00de1bf369c88d552af6&oe=5DD6C952',
                backgroundColor: '#20d2bb',
            },
            {

                title: 'Hồng nhung ',
                uri: 'https://scontent.fhan2-3.fna.fbcdn.net/v/t31.0-1/c282.0.960.960a/p960x960/1402926_10150004552801901_469209496895221757_o.jpg?_nc_cat=1&_nc_eui2=AeFR0LXah229g-HppkYTZoINMOV4GvDOZjftUQgzSpxvczeSF1a4kBArAGggMujSIDCBy9s102f5DH61tB_N1xHPlDk3ss6Y5oaGhhG7_8NxQw&_nc_oc=AQnCxKJ8gPJ_046vq0Dy7s23xUxHw54mQes7pRU5fAXBbstsA3VEXRfUrduUx0_qJaA&_nc_ht=scontent.fhan2-3.fna&oh=a8fca768cedb00de1bf369c88d552af6&oe=5DD6C952',
                backgroundColor: '#20d2bb',
            },
            {

                title: 'Hồng nhung ',
                uri: 'https://scontent.fhan2-3.fna.fbcdn.net/v/t31.0-1/c282.0.960.960a/p960x960/1402926_10150004552801901_469209496895221757_o.jpg?_nc_cat=1&_nc_eui2=AeFR0LXah229g-HppkYTZoINMOV4GvDOZjftUQgzSpxvczeSF1a4kBArAGggMujSIDCBy9s102f5DH61tB_N1xHPlDk3ss6Y5oaGhhG7_8NxQw&_nc_oc=AQnCxKJ8gPJ_046vq0Dy7s23xUxHw54mQes7pRU5fAXBbstsA3VEXRfUrduUx0_qJaA&_nc_ht=scontent.fhan2-3.fna&oh=a8fca768cedb00de1bf369c88d552af6&oe=5DD6C952',
                backgroundColor: '#20d2bb',
            },
            {

                title: 'Hồng nhung ',
                uri: 'https://scontent.fhan2-3.fna.fbcdn.net/v/t31.0-1/c282.0.960.960a/p960x960/1402926_10150004552801901_469209496895221757_o.jpg?_nc_cat=1&_nc_eui2=AeFR0LXah229g-HppkYTZoINMOV4GvDOZjftUQgzSpxvczeSF1a4kBArAGggMujSIDCBy9s102f5DH61tB_N1xHPlDk3ss6Y5oaGhhG7_8NxQw&_nc_oc=AQnCxKJ8gPJ_046vq0Dy7s23xUxHw54mQes7pRU5fAXBbstsA3VEXRfUrduUx0_qJaA&_nc_ht=scontent.fhan2-3.fna&oh=a8fca768cedb00de1bf369c88d552af6&oe=5DD6C952',
                backgroundColor: '#20d2bb',
            },
            {

                title: 'Hồng nhung ',
                uri: 'https://scontent.fhan2-3.fna.fbcdn.net/v/t31.0-1/c282.0.960.960a/p960x960/1402926_10150004552801901_469209496895221757_o.jpg?_nc_cat=1&_nc_eui2=AeFR0LXah229g-HppkYTZoINMOV4GvDOZjftUQgzSpxvczeSF1a4kBArAGggMujSIDCBy9s102f5DH61tB_N1xHPlDk3ss6Y5oaGhhG7_8NxQw&_nc_oc=AQnCxKJ8gPJ_046vq0Dy7s23xUxHw54mQes7pRU5fAXBbstsA3VEXRfUrduUx0_qJaA&_nc_ht=scontent.fhan2-3.fna&oh=a8fca768cedb00de1bf369c88d552af6&oe=5DD6C952',
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
                    <View style={{flexDirection: 'row', width: '100%',marginTop:5}}>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}>
                            {global.slides.map((item, key) => (
                                <View style={{width: 100, marginRight: 10, alignItems: 'center'}}>
                                    <Image

                                        source={{
                                            uri: item.uri,
                                        }}
                                        style={{width: 70, height: 70, alignItems: 'center', borderRadius: 50}}
                                    />
                                    <Text numberOfLines={1}
                                          style={{ marginTop: 4,fontWeight:'bold'}}>
                                        {item.title}
                                    </Text>
                                    <Text>36 thực hiện</Text>
                                    <TouchableOpacity style={{backgroundColor:'#7eb1f6',borderRadius:2}}>
                                        <Text style={{color:'#ffffff',}}>+ Quan tâm</Text>
                                    </TouchableOpacity>


                                </View>
                            ))}
                        </ScrollView>
                    </View>
                </Card>
            </View>
        )
    }
}
const FirstRoute = () => (
    <View style={[styles.scene, { backgroundColor: '#ff4081' }]} ><Class/></View>
);

const SecondRoute = () => (
    <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);
class MyPager extends Component {
   state = {
        index: 0,
        routes: [
            { key: 'first', title: 'Thực hiện' },
            { key: 'second', title: 'Công thức' },
        ],
    };

    render() {
        return (
            <TabView
                navigationState={this.state}
                renderScene={SceneMap({
                    first: FirstRoute,
                    second: SecondRoute,
                })}
                onIndexChange={index => this.setState({ index })}
                initialLayout={{ width: Dimensions.get('window').width }}
            />
        );
    }
}

const styles = StyleSheet.create({
    scene: {
        flex: 1,
    },
});
class Class extends Component{
    constructor(props) {
        super(props);
        const slides = [
            {

                title: 'Hồng nhung ',
                uri: 'https://scontent.fhan2-3.fna.fbcdn.net/v/t31.0-1/c282.0.960.960a/p960x960/1402926_10150004552801901_469209496895221757_o.jpg?_nc_cat=1&_nc_eui2=AeFR0LXah229g-HppkYTZoINMOV4GvDOZjftUQgzSpxvczeSF1a4kBArAGggMujSIDCBy9s102f5DH61tB_N1xHPlDk3ss6Y5oaGhhG7_8NxQw&_nc_oc=AQnCxKJ8gPJ_046vq0Dy7s23xUxHw54mQes7pRU5fAXBbstsA3VEXRfUrduUx0_qJaA&_nc_ht=scontent.fhan2-3.fna&oh=a8fca768cedb00de1bf369c88d552af6&oe=5DD6C952',
                backgroundColor: '#20d2bb',
            },
            {

                title: 'Hồng nhung ',
                uri: 'https://scontent.fhan2-3.fna.fbcdn.net/v/t31.0-1/c282.0.960.960a/p960x960/1402926_10150004552801901_469209496895221757_o.jpg?_nc_cat=1&_nc_eui2=AeFR0LXah229g-HppkYTZoINMOV4GvDOZjftUQgzSpxvczeSF1a4kBArAGggMujSIDCBy9s102f5DH61tB_N1xHPlDk3ss6Y5oaGhhG7_8NxQw&_nc_oc=AQnCxKJ8gPJ_046vq0Dy7s23xUxHw54mQes7pRU5fAXBbstsA3VEXRfUrduUx0_qJaA&_nc_ht=scontent.fhan2-3.fna&oh=a8fca768cedb00de1bf369c88d552af6&oe=5DD6C952',
                backgroundColor: '#20d2bb',
            },
            {

                title: 'Hồng nhung ',
                uri: 'https://scontent.fhan2-3.fna.fbcdn.net/v/t31.0-1/c282.0.960.960a/p960x960/1402926_10150004552801901_469209496895221757_o.jpg?_nc_cat=1&_nc_eui2=AeFR0LXah229g-HppkYTZoINMOV4GvDOZjftUQgzSpxvczeSF1a4kBArAGggMujSIDCBy9s102f5DH61tB_N1xHPlDk3ss6Y5oaGhhG7_8NxQw&_nc_oc=AQnCxKJ8gPJ_046vq0Dy7s23xUxHw54mQes7pRU5fAXBbstsA3VEXRfUrduUx0_qJaA&_nc_ht=scontent.fhan2-3.fna&oh=a8fca768cedb00de1bf369c88d552af6&oe=5DD6C952',
                backgroundColor: '#20d2bb',
            },
            {

                title: 'Hồng nhung ',
                uri: 'https://scontent.fhan2-3.fna.fbcdn.net/v/t31.0-1/c282.0.960.960a/p960x960/1402926_10150004552801901_469209496895221757_o.jpg?_nc_cat=1&_nc_eui2=AeFR0LXah229g-HppkYTZoINMOV4GvDOZjftUQgzSpxvczeSF1a4kBArAGggMujSIDCBy9s102f5DH61tB_N1xHPlDk3ss6Y5oaGhhG7_8NxQw&_nc_oc=AQnCxKJ8gPJ_046vq0Dy7s23xUxHw54mQes7pRU5fAXBbstsA3VEXRfUrduUx0_qJaA&_nc_ht=scontent.fhan2-3.fna&oh=a8fca768cedb00de1bf369c88d552af6&oe=5DD6C952',
                backgroundColor: '#20d2bb',
            },
            {

                title: 'Hồng nhung ',
                uri: 'https://scontent.fhan2-3.fna.fbcdn.net/v/t31.0-1/c282.0.960.960a/p960x960/1402926_10150004552801901_469209496895221757_o.jpg?_nc_cat=1&_nc_eui2=AeFR0LXah229g-HppkYTZoINMOV4GvDOZjftUQgzSpxvczeSF1a4kBArAGggMujSIDCBy9s102f5DH61tB_N1xHPlDk3ss6Y5oaGhhG7_8NxQw&_nc_oc=AQnCxKJ8gPJ_046vq0Dy7s23xUxHw54mQes7pRU5fAXBbstsA3VEXRfUrduUx0_qJaA&_nc_ht=scontent.fhan2-3.fna&oh=a8fca768cedb00de1bf369c88d552af6&oe=5DD6C952',
                backgroundColor: '#20d2bb',
            },
            {

                title: 'Hồng nhung ',
                uri: 'https://scontent.fhan2-3.fna.fbcdn.net/v/t31.0-1/c282.0.960.960a/p960x960/1402926_10150004552801901_469209496895221757_o.jpg?_nc_cat=1&_nc_eui2=AeFR0LXah229g-HppkYTZoINMOV4GvDOZjftUQgzSpxvczeSF1a4kBArAGggMujSIDCBy9s102f5DH61tB_N1xHPlDk3ss6Y5oaGhhG7_8NxQw&_nc_oc=AQnCxKJ8gPJ_046vq0Dy7s23xUxHw54mQes7pRU5fAXBbstsA3VEXRfUrduUx0_qJaA&_nc_ht=scontent.fhan2-3.fna&oh=a8fca768cedb00de1bf369c88d552af6&oe=5DD6C952',
                backgroundColor: '#20d2bb',
            },
            {

                title: 'Hồng nhung ',
                uri: 'https://scontent.fhan2-3.fna.fbcdn.net/v/t31.0-1/c282.0.960.960a/p960x960/1402926_10150004552801901_469209496895221757_o.jpg?_nc_cat=1&_nc_eui2=AeFR0LXah229g-HppkYTZoINMOV4GvDOZjftUQgzSpxvczeSF1a4kBArAGggMujSIDCBy9s102f5DH61tB_N1xHPlDk3ss6Y5oaGhhG7_8NxQw&_nc_oc=AQnCxKJ8gPJ_046vq0Dy7s23xUxHw54mQes7pRU5fAXBbstsA3VEXRfUrduUx0_qJaA&_nc_ht=scontent.fhan2-3.fna&oh=a8fca768cedb00de1bf369c88d552af6&oe=5DD6C952',
                backgroundColor: '#20d2bb',
            },
            {

                title: 'Hồng nhung ',
                uri: 'https://scontent.fhan2-3.fna.fbcdn.net/v/t31.0-1/c282.0.960.960a/p960x960/1402926_10150004552801901_469209496895221757_o.jpg?_nc_cat=1&_nc_eui2=AeFR0LXah229g-HppkYTZoINMOV4GvDOZjftUQgzSpxvczeSF1a4kBArAGggMujSIDCBy9s102f5DH61tB_N1xHPlDk3ss6Y5oaGhhG7_8NxQw&_nc_oc=AQnCxKJ8gPJ_046vq0Dy7s23xUxHw54mQes7pRU5fAXBbstsA3VEXRfUrduUx0_qJaA&_nc_ht=scontent.fhan2-3.fna&oh=a8fca768cedb00de1bf369c88d552af6&oe=5DD6C952',
                backgroundColor: '#20d2bb',
            },
            {

                title: 'Hồng nhung ',
                uri: 'https://scontent.fhan2-3.fna.fbcdn.net/v/t31.0-1/c282.0.960.960a/p960x960/1402926_10150004552801901_469209496895221757_o.jpg?_nc_cat=1&_nc_eui2=AeFR0LXah229g-HppkYTZoINMOV4GvDOZjftUQgzSpxvczeSF1a4kBArAGggMujSIDCBy9s102f5DH61tB_N1xHPlDk3ss6Y5oaGhhG7_8NxQw&_nc_oc=AQnCxKJ8gPJ_046vq0Dy7s23xUxHw54mQes7pRU5fAXBbstsA3VEXRfUrduUx0_qJaA&_nc_ht=scontent.fhan2-3.fna&oh=a8fca768cedb00de1bf369c88d552af6&oe=5DD6C952',
                backgroundColor: '#20d2bb',
            },
            {

                title: 'Hồng nhung ',
                uri: 'https://scontent.fhan2-3.fna.fbcdn.net/v/t31.0-1/c282.0.960.960a/p960x960/1402926_10150004552801901_469209496895221757_o.jpg?_nc_cat=1&_nc_eui2=AeFR0LXah229g-HppkYTZoINMOV4GvDOZjftUQgzSpxvczeSF1a4kBArAGggMujSIDCBy9s102f5DH61tB_N1xHPlDk3ss6Y5oaGhhG7_8NxQw&_nc_oc=AQnCxKJ8gPJ_046vq0Dy7s23xUxHw54mQes7pRU5fAXBbstsA3VEXRfUrduUx0_qJaA&_nc_ht=scontent.fhan2-3.fna&oh=a8fca768cedb00de1bf369c88d552af6&oe=5DD6C952',
                backgroundColor: '#20d2bb',
            },
            {

                title: 'Hồng nhung ',
                uri: 'https://scontent.fhan2-3.fna.fbcdn.net/v/t31.0-1/c282.0.960.960a/p960x960/1402926_10150004552801901_469209496895221757_o.jpg?_nc_cat=1&_nc_eui2=AeFR0LXah229g-HppkYTZoINMOV4GvDOZjftUQgzSpxvczeSF1a4kBArAGggMujSIDCBy9s102f5DH61tB_N1xHPlDk3ss6Y5oaGhhG7_8NxQw&_nc_oc=AQnCxKJ8gPJ_046vq0Dy7s23xUxHw54mQes7pRU5fAXBbstsA3VEXRfUrduUx0_qJaA&_nc_ht=scontent.fhan2-3.fna&oh=a8fca768cedb00de1bf369c88d552af6&oe=5DD6C952',
                backgroundColor: '#20d2bb',
            },
            {

                title: 'Hồng nhung ',
                uri: 'https://scontent.fhan2-3.fna.fbcdn.net/v/t31.0-1/c282.0.960.960a/p960x960/1402926_10150004552801901_469209496895221757_o.jpg?_nc_cat=1&_nc_eui2=AeFR0LXah229g-HppkYTZoINMOV4GvDOZjftUQgzSpxvczeSF1a4kBArAGggMujSIDCBy9s102f5DH61tB_N1xHPlDk3ss6Y5oaGhhG7_8NxQw&_nc_oc=AQnCxKJ8gPJ_046vq0Dy7s23xUxHw54mQes7pRU5fAXBbstsA3VEXRfUrduUx0_qJaA&_nc_ht=scontent.fhan2-3.fna&oh=a8fca768cedb00de1bf369c88d552af6&oe=5DD6C952',
                backgroundColor: '#20d2bb',
            },
            {

                title: 'Hồng nhung ',
                uri: 'https://scontent.fhan2-3.fna.fbcdn.net/v/t31.0-1/c282.0.960.960a/p960x960/1402926_10150004552801901_469209496895221757_o.jpg?_nc_cat=1&_nc_eui2=AeFR0LXah229g-HppkYTZoINMOV4GvDOZjftUQgzSpxvczeSF1a4kBArAGggMujSIDCBy9s102f5DH61tB_N1xHPlDk3ss6Y5oaGhhG7_8NxQw&_nc_oc=AQnCxKJ8gPJ_046vq0Dy7s23xUxHw54mQes7pRU5fAXBbstsA3VEXRfUrduUx0_qJaA&_nc_ht=scontent.fhan2-3.fna&oh=a8fca768cedb00de1bf369c88d552af6&oe=5DD6C952',
                backgroundColor: '#20d2bb',
            },
            {

                title: 'Hồng nhung ',
                uri: 'https://scontent.fhan2-3.fna.fbcdn.net/v/t31.0-1/c282.0.960.960a/p960x960/1402926_10150004552801901_469209496895221757_o.jpg?_nc_cat=1&_nc_eui2=AeFR0LXah229g-HppkYTZoINMOV4GvDOZjftUQgzSpxvczeSF1a4kBArAGggMujSIDCBy9s102f5DH61tB_N1xHPlDk3ss6Y5oaGhhG7_8NxQw&_nc_oc=AQnCxKJ8gPJ_046vq0Dy7s23xUxHw54mQes7pRU5fAXBbstsA3VEXRfUrduUx0_qJaA&_nc_ht=scontent.fhan2-3.fna&oh=a8fca768cedb00de1bf369c88d552af6&oe=5DD6C952',
                backgroundColor: '#20d2bb',
            },


        ];
        global.slides = slides;
    }

    render(){
        return(
            <View><Text></Text></View>
        )
    }

}
