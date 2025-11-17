import Image from "next/image";
import styles from "./globals.css";
import Navbar from "@/components/modules/navbar/Navbar";
import Header from "@/components/modules/header/Header";
import Footer from "@/components/modules/footer/Footer";
import Popular from "@/components/modules/popular/Popular";
import Customer from "@/components/modules/customer/Customer";
// import HowworksClient from "@/components/modules/howwork/HowworksClient";
import { cookies } from "next/headers";
import { verifyAccessToken } from "@/utils/auth";
import UserModel from "@/models/User";
import Howworks from "@/components/modules/howwork/Howworks";

export default async function Home() {
  const token = cookies().get("token");
  let user = null;

  if (token) {
    const tokenPayLoad = verifyAccessToken(token.value);

    if (tokenPayLoad) {
      const userDoc = await UserModel.findOne(
        { email: tokenPayLoad.email },
        { password: 0, refreshToken: 0 } // حذف اطلاعات حساس
      ).lean();

      if (userDoc) {
        user = {
          ...userDoc,
          _id: userDoc._id.toString(),
        };
      }
    }
  }

  return (
    <>
      <Navbar isLogin={user}></Navbar>
      <Header></Header>
      <Popular></Popular>
      <Howworks /> {/* نسخه کلاینت با ssr:false */}
      <Customer></Customer>
      <Footer></Footer>
    </>
  );
}
