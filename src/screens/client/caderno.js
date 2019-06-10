import React, { Component } from 'react';
import {
    Text,
    View,
    ScrollView,
    StyleSheet,
} from 'react-native';

import ItemCaderno from '../../components/ItemCaderno';
import appStyle from '../../appStyle';
const dfStyle = appStyle.style;

import Icon from 'react-native-vector-icons/FontAwesome';

export default class Caderno extends Component{

    render(){
        return(
            <View style={[
                dfStyle.container,
                styles.container
            ]}>
                <View style={styles.header}>
                    <View style={styles.logo}>
                        <Icon
                            name='star'
                            size={50}
                            color='#FFF'
                        />
                        <View style={styles.logoText}>
                            <Text style={[
                                dfStyle.text,
                                styles.empName
                            ]}>{appStyle.configs.empName}</Text>

                            <Text style={[
                                dfStyle.text,
                                styles.infoProgram
                            ]}>Controle de Caderno</Text>
                        </View>
                    </View>
                </View>

                <ScrollView style={styles.center}>
                    <ItemCaderno
                        product='Arroz'
                        date='20/04/2019'
                        price='2,50'
                        style={styles.item}
                    />
                    <ItemCaderno
                        product='Feijão'
                        date='20/04/2019'
                        price='4,60'
                        style={styles.item}
                    />
                    <ItemCaderno
                        product='Carne'
                        date='20/04/2019'
                        price='12,33'
                        style={styles.item}
                    />
                    <ItemCaderno
                        product='Carvão'
                        date='25/04/2019'
                        price='5,90'
                        style={styles.item}
                    />
                    <ItemCaderno
                        product='Arroz'
                        date='26/04/2019'
                        price='2,60'
                        style={styles.item}
                    />
                    <ItemCaderno
                        product='Coca-Cola'
                        date='30/04/2019'
                        price='8,00'
                        style={styles.item}
                    />
                </ScrollView>

                <View style={styles.footer}>
                    <View style={styles.info}>
                        <View>
                            <Text style={[dfStyle.text, styles.infoTitle]}>Última Compra:</Text>
                            <Text style={dfStyle.text}>30/04/2018</Text>
                            
                            <Text style={[dfStyle.text, styles.infoTitle]}>Último pagamento:</Text>
                            <Text style={dfStyle.text}>22/03/2018</Text>
                        </View>
                        <View style={styles.infoValores}>
                            <Text style={[dfStyle.text, styles.infoTitle]}>Fatura Atual:</Text>
                            <Text style={dfStyle.text}>R$ 35,93</Text>

                            <Text style={[dfStyle.text, styles.infoTitle]}>Última fatura:</Text>
                            <Text style={dfStyle.text}>R$ 245,81</Text>
                        </View>
                    </View>
                    <View style={styles.devinfo}>
                        <Text style={dfStyle.text}>Aplicativo desenvolvido por Gabriel Monteiro</Text>
                    </View>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    header: {
        height: 60,

        marginTop: 15,
        marginBottom: 15,
    },
    
    logo: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    logoText: {
        marginLeft: 10,
    },
    
    empName: {
        fontSize: 25,
    },
    
    infoProgram: {
        fontSize: 20,
        marginTop: -8,
    },

    center: {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        padding: 10,
    },

    item: {
        marginBottom: 10,
    },
    
    footer: {
        justifyContent: 'flex-end',
    },

    info:{
        marginTop: 10,
        marginBottom: 30,

        marginLeft: 10,
        marginRight: 10,

        fontSize: 25,
        
        flexDirection: 'row',
    },
    
    infoValores: {
        flex: 1,
        alignItems: 'flex-end',
    },

    infoTitle: {
        fontWeight: 'bold',
        marginTop: 5
    },

    devinfo: {
        marginBottom: 10,
        alignItems: 'center',
    }
});