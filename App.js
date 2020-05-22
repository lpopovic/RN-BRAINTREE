/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import BraintreeDropIn from 'react-native-braintree-dropin-ui';

class App extends React.Component {
  onPressPayment = () => {
    BraintreeDropIn.show({
      clientToken: clientToken,
      merchantIdentifier: 'applePayMerchantIdentifier',
      googlePayMerchantId: 'googlePayMerchantId',
      countryCode: 'US',    //apple pay setting
      currencyCode: 'USD',   //apple pay setting
      merchantName: 'Your Merchant Name for Apple Pay',
      orderTotal: 'Total Price',
      googlePay: false,
      applePay: false,
      vaultManager: true,
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
      <>
        <StatusBar barStyle="dark-content" />
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
      </>
    );
  };
}



export default App;


let clientToken = "eyJ2ZXJzaW9uIjoyLCJlbnZpcm9ubWVudCI6InNhbmRib3giLCJhdXRob3JpemF0aW9uRmluZ2VycHJpbnQiOiJleUowZVhBaU9pSktWMVFpTENKaGJHY2lPaUpGVXpJMU5pSXNJbXRwWkNJNklqSXdNVGd3TkRJMk1UWXRjMkZ1WkdKdmVDSXNJbWx6Y3lJNklrRjFkR2g1SW4wLmV5SmxlSEFpT2pFMU9UQXhOams1TVRVc0ltcDBhU0k2SWprM09EbGlZVEE0TFdVMFpqUXRORFJtWVMxaU16VmhMV1F4TmpaaU9UWXlNREl3TUNJc0luTjFZaUk2SWpNMGJqaHhjR3A2Y21kbWVHcDRiV1lpTENKcGMzTWlPaUpCZFhSb2VTSXNJbTFsY21Ob1lXNTBJanA3SW5CMVlteHBZMTlwWkNJNklqTTBiamh4Y0dwNmNtZG1lR3A0YldZaUxDSjJaWEpwWm5sZlkyRnlaRjlpZVY5a1pXWmhkV3gwSWpwbVlXeHpaWDBzSW5KcFoyaDBjeUk2V3lKdFlXNWhaMlZmZG1GMWJIUWlYU3dpYjNCMGFXOXVjeUk2ZTMxOS5feG5WT3gzcko0a2lKU1F4Vk5WZGVid3NUcWl4aTJia0VheUpLX3dZNU55M2tVSmk5VEdJd3BZdDhwQzJVcVlHczlUN3ZBd3pBc0ZUZl9hV0l4bkdNQSIsImNvbmZpZ1VybCI6Imh0dHBzOi8vYXBpLnNhbmRib3guYnJhaW50cmVlZ2F0ZXdheS5jb206NDQzL21lcmNoYW50cy8zNG44cXBqenJnZnhqeG1mL2NsaWVudF9hcGkvdjEvY29uZmlndXJhdGlvbiIsImdyYXBoUUwiOnsidXJsIjoiaHR0cHM6Ly9wYXltZW50cy5zYW5kYm94LmJyYWludHJlZS1hcGkuY29tL2dyYXBocWwiLCJkYXRlIjoiMjAxOC0wNS0wOCJ9LCJjaGFsbGVuZ2VzIjpbXSwiY2xpZW50QXBpVXJsIjoiaHR0cHM6Ly9hcGkuc2FuZGJveC5icmFpbnRyZWVnYXRld2F5LmNvbTo0NDMvbWVyY2hhbnRzLzM0bjhxcGp6cmdmeGp4bWYvY2xpZW50X2FwaSIsImFzc2V0c1VybCI6Imh0dHBzOi8vYXNzZXRzLmJyYWludHJlZWdhdGV3YXkuY29tIiwiYXV0aFVybCI6Imh0dHBzOi8vYXV0aC52ZW5tby5zYW5kYm94LmJyYWludHJlZWdhdGV3YXkuY29tIiwiYW5hbHl0aWNzIjp7InVybCI6Imh0dHBzOi8vb3JpZ2luLWFuYWx5dGljcy1zYW5kLnNhbmRib3guYnJhaW50cmVlLWFwaS5jb20vMzRuOHFwanpyZ2Z4anhtZiJ9LCJ0aHJlZURTZWN1cmVFbmFibGVkIjp0cnVlLCJwYXlwYWxFbmFibGVkIjp0cnVlLCJwYXlwYWwiOnsiZGlzcGxheU5hbWUiOiJSaWl0ZWNoIFNvbHV0aW9ucyIsImNsaWVudElkIjpudWxsLCJwcml2YWN5VXJsIjoiaHR0cDovL2V4YW1wbGUuY29tL3BwIiwidXNlckFncmVlbWVudFVybCI6Imh0dHA6Ly9leGFtcGxlLmNvbS90b3MiLCJiYXNlVXJsIjoiaHR0cHM6Ly9hc3NldHMuYnJhaW50cmVlZ2F0ZXdheS5jb20iLCJhc3NldHNVcmwiOiJodHRwczovL2NoZWNrb3V0LnBheXBhbC5jb20iLCJkaXJlY3RCYXNlVXJsIjpudWxsLCJhbGxvd0h0dHAiOnRydWUsImVudmlyb25tZW50Tm9OZXR3b3JrIjp0cnVlLCJlbnZpcm9ubWVudCI6Im9mZmxpbmUiLCJ1bnZldHRlZE1lcmNoYW50IjpmYWxzZSwiYnJhaW50cmVlQ2xpZW50SWQiOiJtYXN0ZXJjbGllbnQzIiwiYmlsbGluZ0FncmVlbWVudHNFbmFibGVkIjp0cnVlLCJtZXJjaGFudEFjY291bnRJZCI6InJpaXRlY2hzb2x1dGlvbnMiLCJjdXJyZW5jeUlzb0NvZGUiOiJVU0QifSwibWVyY2hhbnRJZCI6IjM0bjhxcGp6cmdmeGp4bWYiLCJ2ZW5tbyI6Im9mZiJ9"