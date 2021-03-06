import React, { Component } from 'react';
import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    ScrollView,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import GabsInputText from '../../components/GabsInputText';
import GabsButton from '../../components/GabsButton';
import appStyle from '../../appStyle';
const dfStyle = appStyle.style;

export default class Cadastro extends Component{

    render(){
        return(
            <View style={[
                dfStyle.container,
                styles.container
            ]}>
                <View style={styles.logo}>
                    <Icon
                        name='star'
                        size={75}
                        color='#FFF'
                    />
                    <Text style={[
                        dfStyle.text,
                        styles.logoText
                    ]}>{appStyle.configs.empName}</Text>
                </View>

                <ScrollView>
                    <View style={styles.inputArea}>
                        <GabsInputText
                            type='name'
                            placeholder='Nome'
                            style={styles.input}
                        ></GabsInputText>

                        <GabsInputText
                            type='email'
                            placeholder='Email'
                            style={styles.input}
                        ></GabsInputText>
                        
                        <GabsInputText
                            type='cpf'
                            placeholder='CPF'
                            style={styles.input}
                        ></GabsInputText>

                        <GabsInputText
                            type='username'
                            placeholder='Usuário'
                            style={styles.input}
                        ></GabsInputText>
                        
                        <GabsInputText
                            type='password'
                            placeholder='Senha'
                            style={styles.input}
                        ></GabsInputText>

                        <View style={styles.buttonArea}>
                            <GabsButton
                                style={styles.button}
                                text='Cadastrar'
                                inverted={true}                        
                            />
                            <GabsButton
                                style={styles.button}
                                text='Fazer login'
                                onPress={() => this.props.navigation.goBack()}
                            />
                        </View>
                    </View>
                </ScrollView>

                <View style={dfStyle.footer}>
                    <View style={dfStyle.devInfo}>
                        <Text style={dfStyle.text}>Aplicativo desenvolvido por Gabriel Monteiro</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    
    logo: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

        marginTop: 25,
    },
    
    logoText: {
        ...dfStyle.text,
        marginLeft: 10,
        fontSize: 25,
        width: 100,
    },
    
    inputArea: {
        flex: 1,
        width: (windowWidth),
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    
    input: {
        margin: 6,
        width: 270
    },

    buttonArea: {
        margin: 20,
    },

    button: {
        margin: 5,
    },
});