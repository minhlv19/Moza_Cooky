import React, {Component} from 'react';
import { StyleSheet, View, Text} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider'

export default class Show extends Component {
    constructor(props){
        super(props);
        this.state ={
            showReadApp: false,
        };

    }
    _onDone = () =>{
return(

   <View >
        <Text style={{textColor: '#000'}}>tiếp tục</Text>
    </View>
);
    };

    _onSkip = () =>{

        this.setState({showReadApp:true});

    };
    render() {
        if(this.state.showReadApp){
        return (
            <View
                style={{
                    //color: #000,
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 50,
                }}>
                <Text>

                </Text>
            </View>
        );
    }
        else {
            return (
                <AppIntroSlider
                    //style: styles.text
                    slides={slides}

                    onDone={this._onDone}
                    showSkipButton={true}
                    onSkip={this._onSkip}
                />
            );
        }
    }


}
const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 200,
    },
    text: {
        color: '#000',
        fontSize: 16,
    },
    title: {
        fontSize: 21,
        fontWeight: 'bold',
        color: '#000',
        backgroundColor: 'transparent',
        textAlign: 'center',
        marginTop: 16,
    },
});
const slides = [
    {
        key: 's1',

        text: 'Nấu và chia sẻ món ngon cùng cộng đồng' + '\n' +

            'Cùng xây dựng cộng đồng đam mê nấu ăn đúng nghĩa cho người viêt',
        title: 'Chào mừng bạn đến với Cooky \n Cộng đồng yêu thích nấu ăn',


        titleStyle: styles.title,
        textStyle: styles.text,

        image:
            require('../../../asset/image/intro1.jpg')
          ,
        imageStyle: styles.image,
        backgroundColor: '#ff0003',

    },
    {
        key: 's2',
        textStyle: styles.text,

        text: 'Cùng nấu ăn và chia sẻ đam mê',
        image:require('../../../asset/image/intro2.jpg') ,
        imageStyle: styles.image,
        backgroundColor: '#ff0003',
    },
    {
        key: 's3',
        textStyle: styles.text,
        text: 'Lưu lại món ăn yêu thích',
        image: require('../../../asset/image/intro3.jpg'),
        imageStyle: styles.image,
        backgroundColor: '#ff0003',
    },
    {
        key: 's4',
        text: ' Tham gia lớp học nấu ăn',
        image: require('../../../asset/image/intro4.jpg'),
        imageStyle: styles.image,
        backgroundColor: '#ff0003',
        textStyle: styles.text,
    },
    {
        key: 's5',
        text: 'Theo dõi thành viêu yêu thích',
        image: require('../../../asset/image/intro5.jpg'),
        imageStyle: styles.image,
        textStyle: styles.text,
        backgroundColor: '#ff0003',
    },

];
