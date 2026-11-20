import axios from 'axios';
interface defType extends Record<string, any> { };


const apiKey = "sk_live_b9464a186ff5be004a0cc2ee69cc34dc322e7c25";


export const createPayLink = async (amount: number, oid: string, email: string, host: string, callbackUrl: string, cancelAction: string) => {
  const url = "https://api.paystack.co/transaction/initialize";

  const data = {
    email: email,
    amount: amount,
    callback_url: callbackUrl,
    metadata: { cancel_action: cancelAction }
  };

  const response = await axios.post(url, data, {
    headers: {
      // Authorization: `Bearer sk_test_a7d958e5ee0e7e8f58eeecd63892bc6f4f2d70f5`,
      Authorization: `Bearer ${apiKey}`,
      'Cache-Control': 'no-cache'
    }
  })

  const payObj = {
    link: response.data.data.authorization_url,
    ref: response.data.data.reference
  }

  return payObj;
}

export const verifyPayment = async (payRef: string): Promise<string> => {
  const url = `https://api.paystack.co/transaction/verify/${payRef}`;

  const response = await axios.get(url, {
    headers: {
      // Authorization: `Bearer sk_test_a7d958e5ee0e7e8f58eeecd63892bc6f4f2d70f5`,
      Authorization: `Bearer ${apiKey}`,
      'Cache-Control': 'no-cache'
    }
  })

  return response.data.data.status;
}


// export const getBanks = async (): Promise<BankType[]> => {
//   const url = "https://api.paystack.co/bank?country=ghana";

//   const response = await axios.get(url, {
//     headers: {
//       // Authorization: `Bearer sk_test_a7d958e5ee0e7e8f58eeecd63892bc6f4f2d70f5`,
//       Authorization: `Bearer ${apiKey}`,
//       'Cache-Control': 'no-cache'
//     }
//   })

//   if (response.status === 200) {
//     const resList = response.data.data.filter((el: defType) => el.active && el.supports_transfer) as defType[];
//     const bankList: BankType[] = resList.map((el) => ({
//       id: el.id,
//       name: el.name,
//       currency: el.currency,
//       code: el.code,
//       longCode: el.longCode,
//       type: el.type
//     }));
//     return bankList;
//   } else {
//     return [];
//   }
// }


// export const createPayWallet = async (type: string, acName: string, acNumber: string, bankName: string, bankCode: string, bankId: number, bankType: string, uid: string, nextStep: Function, errorStep: Function) => {
//   const url = "https://api.paystack.co/transferrecipient";
//   const data = {
//     "type": type,
//     "name": acName,
//     "account_number": acNumber,
//     "bank_code": bankCode,
//     "currency": "GHS"
//   }

//   const response = await axios.post(url, data, {
//     headers: {
//       // Authorization: `Bearer sk_test_a7d958e5ee0e7e8f58eeecd63892bc6f4f2d70f5`,
//       Authorization: `Bearer ${apiKey}`,
//       'Cache-Control': 'no-cache'
//     }
//   })

//   if ((response.status === 201 || 200) && response.data.data.active) {
//     const payoutAccountTemp: Omit<PayoutAccount, 'id'> = {
//       active: true,
//       currency: "GHS",
//       status: true,
//       rCode: response.data.data.recipient_code,
//       type: type,
//       account: {
//         name: acName,
//         number: acNumber,
//         bankName: bankName,
//         bankCode: bankCode,
//         bankId: bankId,
//         bankType: bankType
//       },
//     }
//     await setDoc(doc(fireStoreDB, 'PayoutAccounts/' + uid), payoutAccountTemp);
//     nextStep();
//   } else {
//     errorStep();
//   }
//   console.log(response);
// }

// export const payTo = async (rCode: string, amount: number, uid: string, nextStep: Function, errorStep: Function) => {
//   // const finalAmount = 100;
//   // const url = "https://api.paystack.co/transfer";
//   const source = "balance";
//   const reason = "Agrivest Africa Pay Out";
//   // const data = {
//   //   source: source,
//   //   reason: reason,
//   //   amount: finalAmount,
//   //   recipient: rCode,
//   // };

//   const id = genToken() + Date.now();
//   const payoutRequest: Omit<PayoutRequest, "id"> = {
//     uid: uid,
//     amount: amount,
//     source: source,
//     rCode: rCode,
//     reason: reason,
//     isCompleted: false,
//     dueTime: add48Hours(),
//     timestamp: Date.now(),
//   }


//   await setDoc(doc(fireStoreDB, 'PayoutRequests/' + id), payoutRequest);
//   await updateDoc(doc(fireStoreDB, 'Wallets/' + uid), {
//     balance: increment(-amount)
//   })

//   nextStep();

// try {
//   const response = await axios.post(url, data, {
//     headers: {
//       Authorization: `Bearer ${apiKey}`,
//       'Cache-Control': 'no-cache',
//     },
//   });

//   console.log(response);

//   if (response.status === 200) {
//     const docRef = doc(fireStoreDB, "Wallets/" + uid);
//     try {
//       await updateDoc(docRef, {
//         balance: increment(-amount),
//       });

//       await updateDoc(doc(fireStoreDB, 'PayoutRequests/' + id), {
//         isCompleted: true
//       });
//       nextStep();
//     } catch (error) {
//       console.error("Error decreasing field:", error);
//       errorStep();
//     }
//   } else {
//     console.log(response);
//     errorStep();
//   }
// }
// catch (error) {
//   console.log(error);
//   if (axios.isAxiosError(error) && error.response) {
//     if (error.response.status === 400) {
//     } else {
//       console.log("An unexpected error occurred. Please try again later.");
//     }
//   } else {
//     console.error("Error:", error);
//   }
//   errorStep();
// }
// };

// export const maskNumber = (accountNumber: string) => {
//   if (!accountNumber || accountNumber.length < 8) return accountNumber;

//   const firstThree = accountNumber.slice(0, 3);
//   const lastThree = accountNumber.slice(-3);
//   return `${firstThree} ${"*".repeat(accountNumber.length - 6)} ${lastThree}`;
// };