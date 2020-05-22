import React, { Component } from 'react';
import {
    View,
    SafeAreaView,
    Text,
    TouchableOpacity,
    StatusBar,
    StyleSheet
} from 'react-native';
import BraintreeDropIn from 'react-native-braintree-dropin-ui';
import { clientToken } from '../helper'
class HomeScreen extends Component {
    onPressPayment = () => {
        BraintreeDropIn.show({
            clientToken: clientToken,
            googlePay: false,
            applePay: false,
            vaultManager: false,
            darkTheme: true,
        })
            .then(result => alert(JSON.stringify(result)))
            .catch((error) => {
                if (error.code === 'USER_CANCELLATION') {
                    alert('USER_CANCELLATION')
                } else {
                    // update your UI to handle other errors
                    alert(error.code)
                }
            });
    }
    render() {
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
                    <TouchableOpacity onPress={() => this.onPressPayment()}>
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