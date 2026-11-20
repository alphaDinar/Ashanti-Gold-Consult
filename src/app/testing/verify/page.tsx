// "use client";
// import { verifyPayment } from "@/src/firebase/payments";
// import { useSearchParams } from "next/navigation";
// import { useEffect, useState } from "react";

// const Verify = () => {
//   const searchParams = useSearchParams();

//   const trxref = searchParams.get('trxref');
//   const payRef = searchParams.get('reference');
//   const [pageLoading, setPageLoading] = useState(true);


//   const [info, setInfo] = useState("Verifying Payment...");

//   useEffect(() => {
//     const checkPayStatus = async (payRef: string) => {
//       if (payRef) {
//         const res = await verifyPayment(payRef);
//         if (res === "success") {
//           setInfo("Payment Successful");
//         } else {
//           setInfo("Payment Failed or Pending");
//         }
//       }
//     }

//     if (payRef) {
//       checkPayStatus(payRef);
//     } else {
//       setInfo("No Payment Reference Found");
//     }
//   }, [payRef])


//   return (
//     <section className="p-20">
//       <span>{info}</span>
//     </section>
//   );
// }

// export default Verify;

const Verify = () => {
  return (
    <section>
      Verify
    </section>
  );
}

export default Verify;