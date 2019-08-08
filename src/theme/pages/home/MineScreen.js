import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, ScrollView, Button, TouchableOpacity} from 'react-native';

export default class MineScreen extends Component {
    render() {
        return (<ScrollView>
            <View style={{backgroundColor: '#cbcbcb'}}>
                <Name1/>


                    <View1/>
                    <View2/>
                    <View style={{height: 30,marginLeft:10,justifyContent:'center'}}>
                        <Text style={{fontSize: 15,fontWeight: 'bold',color:'#000'}}>Công thức</Text>
                    </View>
                    <View3/>
                    <View4/>
                    <View5/>
                    <View6/>
                    <View7/>
                    <View8/>
                    <View9/>
                    <View10/>
                    <View11/>
                    <View12/>
            </View>
                </ScrollView>

        )
    }

}

class Name1 extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <View
                    style={{flexDirection: 'row', height: 100, backgroundColor: '#FFFFFF',}}>
                    <Image

                        source={
                            require('../../../asset/image/logocooky.jpg')

                        }
                        style={{width: 70, height: 70, borderRadius: 50, marginTop: 10}}
                    />
                    <View style={{marginLeft: 10, justifyContent: 'center'}}>
                        <Text style={{fontWeight: 'bold', fontSize: 15}}>Name</Text>
                        <Text>0 công thức 0 lượt quan tâm
                        </Text>

                    </View>

                </View>
                <View style={{flexDirection: 'row', backgroundColor: '#f7eaee', height: 50}}>
                    <View style={{width: '50%', justifyContent: 'center', alignItems: 'center'}}>
                        <Text>Điểm thưởng</Text>
                    </View>
                    <View style={{width: '50%', justifyContent: 'center', alignItems: 'center'}}>
                        <Text>Credits</Text>
                    </View>

                </View>
                <View style={{
                    backgroundColor: '#dadada',
                    flexDirection: 'row',
                    height: 100,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingHorizontal:10
                }}>
                    <TouchableOpacity style={{
                        backgroundColor: '#fff',
                        width: '45%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 10,

                    }}>
                        <Image
                            source={
                                require('../../../asset/image/icon_hopqua.png')}
                            style={{width: 40, height: 40, borderRadius: 50, marginTop: 10}}
                        />
                        <Text>Đổi thưởng</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        backgroundColor: '#fff',
                        width: '45%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 10,
                    }}>
                        <Image
                            source={
                                require('../../../asset/image/shopping.png')}
                            style={{width: 40, height: 40, borderRadius: 50, marginTop: 10}}
                        />
                        <Text>Đổi thưởng</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

class View1 extends Component {
    render() {
        return (
            <View style={{
                alignItems: 'center',
                height: 40,
                flexDirection: 'row',
                paddingLeft: 10,
                backgroundColor: '#ffffff',
                marginTop: 1
            }}>
                <Image
                    source={
                        require('../../../asset/image/cooking_icon.png')
                    }
                    style={{}}
                />
                <Text style={{marginLeft: 10}}>Lớp học</Text>
            </View>
        )
    }
}

class View2 extends Component {
    render() {
        return (
            <View style={{
                alignItems: 'center',
                height: 40,
                flexDirection: 'row',
                paddingLeft: 10,
                backgroundColor: '#ffffff',
                marginTop: 1
            }}>
                <Image
                    source={
                        require('../../../asset/image/cooking_icon.png')
                    }
                    style={{}}
                />
                <Text style={{marginLeft: 10}}>Lưu nháp</Text>
            </View>
        )
    }
}

class View3 extends Component {
    render() {
        return (
            <View style={{
                alignItems: 'center',
                height: 40,
                flexDirection: 'row',
                paddingLeft: 10,
                backgroundColor: '#ffffff',
                marginTop: 1
            }}>
                <Image
                    source={
                        require('../../../asset/image/cooking_icon.png')
                    }
                    style={{}}
                />
                <Text style={{marginLeft: 10}}>Offline</Text>
            </View>
        )
    }
}

class View4 extends Component {
    render() {
        return (
            <View style={{
                alignItems: 'center',
                height: 40,
                flexDirection: 'row',
                paddingLeft: 10,
                backgroundColor: '#ffffff',
                marginTop: 1
            }}>
                <Image
                    source={
                        require('../../../asset/image/cooking_icon.png')
                    }
                    style={{}}
                />
                <Text style={{marginLeft: 10}}>Đã tạo</Text>
            </View>
        )
    }
}

class View5 extends Component {
    render() {
        return (
            <View style={{
                alignItems: 'center',
                height: 40,
                flexDirection: 'row',
                paddingLeft: 10,
                backgroundColor: '#ffffff',
                marginTop: 1
            }}>
                <Image
                    source={
                        require('../../../asset/image/cooking_icon.png')
                    }
                    style={{}}
                />
                <Text style={{marginLeft: 10}}>yêu thích</Text>
            </View>
        )
    }
}

class View6 extends Component {
    render() {
        return (
            <View style={{
                alignItems: 'center',
                height: 40,
                flexDirection: 'row',
                paddingLeft: 10,
                backgroundColor: '#ffffff',
                marginTop: 1
            }}>
                <Image
                    source={
                        require('../../../asset/image/cooking_icon.png')
                    }
                    style={{}}
                />
                <Text style={{marginLeft: 10}}>Đã thực hiện</Text>
            </View>
        )
    }
}

class View7 extends Component {
    render() {
        return (
            <View style={{
                alignItems: 'center',
                height: 40,
                flexDirection: 'row',
                paddingLeft: 10,
                backgroundColor: '#ffffff',
                marginTop: 1
            }}>
                <Image
                    source={
                        require('../../../asset/image/cooking_icon.png')
                    }
                    style={{}}
                />
                <Text style={{marginLeft: 10}}>Công thức xem gần đây</Text>
            </View>
        )
    }
}

class View8 extends Component {
    render() {
        return (
            <View style={{
                alignItems: 'center',
                height: 40,
                flexDirection: 'row',
                paddingLeft: 10,
                backgroundColor: '#ffffff',
                marginTop: 6
            }}>
                <Image
                    source={
                        require('../../../asset/image/cooking_icon.png')
                    }
                    style={{}}
                />
                <Text style={{marginLeft: 10}}>Góp ý</Text>
            </View>
        )
    }
}

class View9 extends Component {
    render() {
        return (
            <View style={{
                alignItems: 'center',
                height: 40,
                flexDirection: 'row',
                paddingLeft: 10,
                backgroundColor: '#ffffff',
                marginTop: 1
            }}>
                <Image
                    source={
                        require('../../../asset/image/cooking_icon.png')
                    }
                    style={{}}
                />
                <Text style={{marginLeft: 10}}>Kiểm tra bản cập nhật</Text>
            </View>
        )
    }
}

class View10 extends Component {
    render() {
        return (
            <View style={{
                alignItems: 'center',
                height: 40,
                flexDirection: 'row',
                paddingLeft: 10,
                backgroundColor: '#ffffff',
                marginTop: 1
            }}>
                <Image
                    source={
                        require('../../../asset/image/cooking_icon.png')
                    }
                    style={{}}
                />
                <Text style={{marginLeft: 10}}>Tùy chỉnh phần mềm</Text>
            </View>
        )
    }
}

class View11 extends Component {
    render() {
        return (
            <View style={{
                alignItems: 'center',
                height: 40,
                flexDirection: 'row',
                paddingLeft: 10,
                backgroundColor: '#ffffff',
                marginTop: 1
            }}>
                <Image
                    source={
                        require('../../../asset/image/cooking_icon.png')
                    }
                    style={{}}
                />
                <Text style={{marginLeft: 10}}>Phiên bản có gi mới</Text>
            </View>
        )
    }
}

class View12 extends Component {
    render() {
        return (
            <View style={{
                alignItems: 'center',
                height: 40,
                flexDirection: 'row',
                paddingLeft: 10,
                backgroundColor: '#ffffff',
                marginTop: 6
            }}>
                <Image
                    source={
                        require('../../../asset/image/cooking_icon.png')
                    }
                    style={{}}
                />
                <Text style={{marginLeft: 10}}>Thoát</Text>
            </View>
        )
    }
}

