const ROOT_URL = 'https://api.ketering.rtech.rs';
const ROOT_URL_API = `${ROOT_URL}/api/`
const withKey = url => `${ROOT_URL_API}${url}`

class RestUrl {
    static templateURL = (test) => withKey(test)
    static getPaymentToken = () => withKey(`braintree/token`)
    static postPaymentToken = () => withKey(`braintree/payment`)
}

export { RestUrl }