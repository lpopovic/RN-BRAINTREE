import React, { Component } from 'react';
import {
    View,
    SafeAreaView,
    Text,
    TouchableOpacity,
    StatusBar,
    StyleSheet,
    ActivityIndicator
} from 'react-native';
import BraintreeDropIn from 'react-native-braintree-dropin-ui';
import { clientToken } from '../helper'
import { PaymentNetwork } from '../service/api'
class HomeScreen extends Component {

    state = {
        loading: false,
        clientToken: null
    }


    onPressPayment = (clientToken) => {
        BraintreeDropIn.show({
            clientToken,
            googlePay: false,
            applePay: false,
            vaultManager: false,
            darkTheme: true,
        })
            .then(result => this.sendResultOfPayment(result))
            .catch((error) => {
                this.setState({
                    clientToken: null
                })
                if (error.code === 'USER_CANCELLATION') {
                    alert('USER_CANCELLATION')
                } else {
                    // update your UI to handle other errors
                    alert(error.code)
                }
            });
    }
    onPressGetToken = () => {
        this.setState({
            loading: true
        })
        PaymentNetwork.getPaymentToken().then(
            res => {
                this.setState({
                    clientToken: res,
                    loading: false
                })
                this.onPressPayment(res)
            }, err => {
                alert(err)
                this.setState({
                    clientToken: null,
                    loading: false
                })
            }
        )
    }
    sendResultOfPayment = (result) => {
        const { type, nonce, description } = result
        this.setState({
            loading: true,
            clientToken: null
        })
        setTimeout(() => {
            this.setState({
                loading: false,
                clientToken: null
            })
            alert("Kartica: " + type + "\nOpis: " + description + "\nUspesno poslat nonce: \n" + nonce)
        }, 500);

    }
    btnPaymentContent = () => {
        return (
            <TouchableOpacity onPress={() => this.onPressGetToken()}>
                <View style={{
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center',
                    padding: 8,
                    backgroundColor: "gray"
                }}>
                    <Text>GO PAYMENT</Text>
                </View>
            </TouchableOpacity>
        )
    }
    activityContent = () => {
        return (
            <ActivityIndicator
                size={'large'}
                color={'black'} />
        )
    }
    render() {
        const { loading } = this.state
        const display = loading == true ? this.activityContent() : this.btnPaymentContent()
        return (
            <View style={styles.mainContainer}>
                <StatusBar barStyle="dark-content" />
                <Text style={{ fontSize: 30 }}>Braintree Payment</Text>
                <SafeAreaView style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center'
                }}>
                    {display}
                </SafeAreaView>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    }
});


export default HomeScreen;