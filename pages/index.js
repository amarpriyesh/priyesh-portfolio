import Head from "next/head";
import { BsFillMoonStarsFill, BsX, BsDownload } from "react-icons/bs";
import Front from "./front";
import { useState } from "react";
import Layout from "./layout";
import Projects from "./projects";
import TwinklingBackground from "@/components/stars";
import MovingClouds from "@/components/movingcloud";
import { useSelector } from "react-redux";
import Mailer from "./mail";

export default function Home() {
  const darkMode = useSelector((state) => state.darkMode.value);

  return (
    <div>
      <Head>
        <title>Priyesh&apos;s Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout title="Priyesh's Portfolio">
        {darkMode ? (
          <TwinklingBackground Children={Front} />
        ) : (
          <MovingClouds Children={Front} />
        )}

        {/* Rest of your home page content */}
      </Layout>
      
      

    </div>
  );
}
