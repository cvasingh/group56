"use client"
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import loading from "@/assets/loading.gif";
import Image from "next/image";
import axios from "axios";

const QrReader = dynamic(
  () => import("react-qr-reader").then((mod) => mod.QrReader),
  { ssr: false }
);
const Scanner = () => {
  const [result, setState] = useState()
  const [lyf, setLyf] = useState()

  const handleScan = (data) => {
    if (data) {
      setState({
        result: data,
      });
    }
  };

  const getScanner = () => {
    axios.get('http://localhost:3000/api/scan')
      .then(res => res.data?.lyf && setLyf(res.data?.lyf))
      .catch(err => console.log(err))
      .finally(() => {
        if (lyf) {

        } else {
          setTimeout(() => getScanner(), 4000)
        }
      })
  };

  useEffect(() => getScanner(), [])


  return (
    <div className="w-11/12 max-w-[400px] px-4 rounded-2xl bg-[#666]">
      {lyf ?
        <>
          {lyf}
        </>
        : <>
          <QrReader
            ViewFinder={() => <svg viewBox="0 0 100 100" className='z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/6 h-4/6 '>
              <path fill="none" d="M13,0 L0,0 L0,13" stroke="rgba(255, 0, 0, 0.9)" strokeWidth="5"></path>
              <path fill="none" d="M0,87 L0,100 L13,100" stroke="rgba(255, 0, 0, 0.9)" strokeWidth="5"></path>
              <path fill="none" d="M87,100 L100, 100 L100,87" stroke="rgba(255, 0, 0, 0.9)" strokeWidth="5"></path>
              <path fill="none" d="M100,13 L100,0 87,0" stroke="rgba(255, 0, 0, 0.9)" strokeWidth="5"></path>
            </svg>}
            delay={500}
            onError={handleScan}
            onScan={handleScan}
            style={{ width: "100%" }}
          />
          <Image src={loading} width={50} height={50} className="mx-auto mb-6" alt="testing" />
        </>}
    </div>
  );
}

export default Scanner;