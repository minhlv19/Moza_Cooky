import React, {Component} from 'react';
import { StyleSheet, View,Image,Text,} from 'react-native';

    export default class DefaultLanguage extends Component {

    render(){
        return(
            <View style={styles.content}>
                <Image style={styles.image} source={require('../../../asset/image/logocooky.jpg')}/>
                <View style={{marginTop:50,alignItems: 'center',}}>
                    <Text style={{color: '#ffffff', fontWeight: 'bold',fontSize:20}}> Ngôn ngữ mặc định </Text>
                    <Text style={{color: '#ffffff',fontSize:15,marginTop:10,}}>Vietnamese - Tiếng Việt</Text>
                    <Text style={{color: '#ffffff',fontSize:15,marginTop:10}}> English </Text>
                    <Text style={{color: '#ffffff',fontSize:10,marginTop:10}}>Bạn có thể thay đổi trong cài đặt</Text>
                    <Text style={{color: '#ffffff',fontSize:15,marginTop:15}}>Tiếp tục >></Text>
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
       backgroundColor :'#c31211'
    },
    image:{
        height:200
    }
})
