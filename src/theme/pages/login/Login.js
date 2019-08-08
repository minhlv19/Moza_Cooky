import React, {Component} from 'react';
import { StyleSheet, View,Image,Text,Button,TouchableOpacity,} from 'react-native';


export default class DefaultLanguage extends Component {
    constructor() {

        super();
        this.state = {
            check: false,
        }
    }

    Dangnhap = () => {
        this.setState({
            check: false,
        })
    }
    Dangky = () => {
        this.setState({
            check: true,
        })
    }
    render(){
        return(
            <View style={styles.content}>

                    <Image style={styles.image} source={require('../../../asset/image/logocooky.png')}/>
                    <View style={{marginTop:10,alignItems: 'center',}}>
                    <Text style={styles.text}>Đăng nhập để có trải nghiêm tốt hơn và cùng tham  gia cộng đồng thành viên yêu thích nấu ăn Cooky</Text>
                    </View>
                    <TouchableOpacity
                    style={{alignItems: 'center',
                    backgroundColor: '#f6f6f6',
                    width:'80%',
                    marginTop:30,
                    padding: 10,}}
                    >
                    <Text style={{color:'#000',fontSize:18}}> Đăng nhập với Google </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={{alignItems: 'center',
                    width:'80%',
                    marginTop:20,
                    backgroundColor: '#0500f6',
                    padding: 10,}}
                    >
                    <Text style={{color:'#fff',fontSize:18}}> Đăng nhập với Facebook </Text>
                    </TouchableOpacity>

                {this.state.check === false ?
                    <View style={{width:'80%'}}>
                    <TouchableOpacity
                        style={{alignItems: 'center',

                            marginTop:20,
                            backgroundColor: '#ff0003',
                            padding: 10,}}
                    >

                        <Text style={{color:'#fff',fontSize:18}}> Đăng nhập với tài khoản </Text>
                    </TouchableOpacity>
                        <View>
                            <Text style={{fontSize:15,marginTop:25,textAlign:'center' }}>Quên mật khẩu?</Text>
                        </View>
                    </View>

                    :
                    <TouchableOpacity
                        style={{alignItems: 'center',
                            width:'80%',
                            marginTop:20,
                            backgroundColor: '#ff0003',
                            padding: 10,}}
                    >

                        <Text style={{color:'#fff',fontSize:18}}> Đăng ký với tài khoản </Text>
                    </TouchableOpacity>
                }

                    <View>
                    <Text style={{fontSize:15,marginTop:20,}}>Tôi sẽ đăng nhập sau >></Text>
                    </View>





                <View style={{flexDirection: 'row',marginBottom: 15, position: 'absolute',
                    bottom:0}}>
                    <TouchableOpacity onPress={this.Dangnhap} style={{marginRight: 25}}>
                        <Text style={{fontSize:20,color:'#ff0000'}}>Đăng nhập</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.Dangky} style={{marginLeft: 25}}>
                        <Text style={{fontSize:20,color:'#ff0000'}}>Đăng ký</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    content:{
        flex:1,
        //justifyContent: 'center',
        alignItems: 'center',
        backgroundColor :'#ffff',

    },
    image:{
        height:80,
        marginTop:20,
        width:80,
        backgroundColor:'#c31211',
        borderRadius:55,

    },
    text:{
        textAlign: 'center',
        padding:10,
        marginLeft: 10,
        marginRight: 10,
    }
})


