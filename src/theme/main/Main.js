import React from 'react';
import {
    createStackNavigator,
    createBottomTabNavigator,
    createAppContainer
} from 'react-navigation'
import PropTypes from 'prop-types';
import {Image,} from 'react-native';
import SplashScreen from "../pages/splashScreen/SplashScreen";
import DefaultLanguage from "../pages/defaultLanguage/DefaultLanguage";
import Show from "../pages/showDemo/Show";
import Login from "../pages/login/Login";
import HomeScreen from "../pages/home/HomeScreen";
import CommunityScreen from "../pages/home/CommunityScreen";
import ClassScreen from "../pages/home/ClassScreen";
import SaveScreen from "../pages/home/SaveScreen";
import MineScreen from "../pages/home/MineScreen";


const HomeStack = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                header: null,
            }
        },
    }, {
        //For React Navigation 2.+ change defaultNavigationOptions->navigationOptions

    }
);
const CommunityStack = createStackNavigator(
    {
        Community: {
            screen: CommunityScreen,
            navigationOptions: {
                header: null,

            }
        },

    }, {}
);
const ClassStack = createStackNavigator(
    {
        Class: {
            screen: ClassScreen,
            navigationOptions: {
                header: null,
            }
        },

    }
);
const SaveStack = createStackNavigator(
    {
        Save: {
            screen: SaveScreen,
            navigationOptions: {
                header: null,
            }
        },

    }
);
const MineStack = createStackNavigator(
    {
        Mine:
            {
                screen: MineScreen,
                navigationOptions:
                    {
                        header: null,
                    }
            }
    }
);

const Menu = createBottomTabNavigator(
    {
        Home: {
            screen: HomeStack,
        },

        Community: {
            screen: CommunityStack,
            navigationOptions: {
                tabBarLabel: "Cộng đồng"
            },
        },
        Class: {
            screen: ClassStack,
            navigationOptions: {
                tabBarLabel: "Lớp học"
            },
        },
        Save: {
            screen: SaveStack,
            navigationOptions: {
                tabBarLabel: "Lưu lại"
            },
        },
        Mine: {
            screen: MineStack,
            navigationOptions: {
                tabBarLabel: "Của tôi"
            },
        }
    },

    {
        defaultNavigationOptions: ({navigation}) => ({
            tabBarIcon: ({focused, horizontal, tintColor}) => {
                const {routeName} = navigation.state;
                if (routeName === 'Home') {
                    return (
                        <Image
                            source={
                                focused
                                    ? require('../../asset/image/home_click.png')
                                    : require('../../asset/image/home.png')
                            }
                            style={{
                                width: 20,
                                height: 20,
                            }}
                        />

                    );
                } else if (routeName === 'Community') {
                    return (

                        <Image
                            source={
                                focused
                                    ? require('../../asset/image/home_click.png')
                                    : require('../../asset/image/home.png')
                            }
                            style={{
                                width: 20,
                                height: 20,
                            }}
                        />


                    );
                } else if (routeName === 'Class') {
                    return (

                        <Image
                            source={
                                focused
                                    ? require('../../asset/image/home_click.png')
                                    : require('../../asset/image/home.png')
                            }
                            style={{
                                width: 20,
                                height: 20,
                            }}
                        />


                    );
                } else if (routeName === 'Save') {
                    return (

                        <Image
                            source={
                                focused
                                    ? require('../../asset/image/home_click.png')
                                    : require('../../asset/image/home.png')
                            }
                            style={{
                                width: 20,
                                height: 20,
                            }}
                        />


                    );
                }else if (routeName === 'Mine') {
                    return (

                        <Image
                            source={
                                focused
                                    ? require('../../asset/image/home_click.png')
                                    : require('../../asset/image/home.png')
                            }
                            style={{
                                width: 20,
                                height: 20,
                            }}
                        />


                    );
                }


            },
        }),
        tabBarOptions: {
            activeTintColor: '#ff0000',
            inactiveTintColor: 'gray',
        },
    }
);

const Main = createStackNavigator(
    {
        SplashScreen: {
            screen: SplashScreen,
            navigationOptions: {
                header: null,
            }
        },
        DefaultLanguage: {
            screen: DefaultLanguage,
            navigationOptions: {
                header: null,
            }
        },
        Show: {
            screen: Show,
            navigationOptions: {
                header: null,
            }
        },
        Login: {
            screen: Login,
            navigationOptions: {
                header: null,
            }
        },
        Menu: {
            screen: Menu,
            navigationOptions: {
                header: null,
            }
        },


    },

    {initialRouteName: "Menu"},
);


export default createAppContainer(Main)
