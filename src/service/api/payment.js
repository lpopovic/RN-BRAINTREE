import axios from '../axios'
import { RestUrl } from './url'
class PaymentNetwork {
    static getPaymentToken = () =>
        new Promise(async (resolve, reject) => {
            const url = RestUrl.getPaymentToken()
            try {
                const { data } = await axios.get(url)
                resolve(data.clientToken)

            } catch (error) {
                try {
                    const { message } = error.response.data.error
                    reject(message)
                } catch  {
                    reject(error.message)

                }
            }
        });


    static postPaymentToken = (amount, paymentMethodNonce) =>
        new Promise(async (resolve, reject) => {
            const url = RestUrl.postPaymentToken()
            let formData = {
                amount,
                paymentMethodNonce
            }
            try {
                const { data } = await axios.post(url, formData)
                resolve(data.clientToken)

            } catch (error) {
                try {
                    const { message } = error.response.data.error
                    reject(message)
                } catch  {
                    reject(error.message)

                }
            }
        });
}

export { PaymentNetwork }