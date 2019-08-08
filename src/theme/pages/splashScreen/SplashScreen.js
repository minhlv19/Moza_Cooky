
import React, {Component} from 'react';
import { StyleSheet, View,Image,} from 'react-native';
import { NavigationActions, StackActions} from 'react-navigation';

export default class SplashScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentDidMount(){
        setTimeout(() => {
            this.navigateLogin('DefaultLanguage')
        }, 3000);
    }
    navigateLogin = (screen) => {
        const resetAction = StackActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: screen })
            ]
        });
        this.props.navigation.dispatch(resetAction);
    }

    render() {
        return (
            <View style={styles.content}>
                <Image style={styles.image} source={require('../../../asset/image/splash.jpg')}

                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    content:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image:{
        width: '100%', height: '100%',
    }
})
