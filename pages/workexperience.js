import Head from "next/head";

import Front from "./front";
import { useState } from "react";
import Layout from "./layout";
import Projects from "./projects";
import WorkEx from "./workex";

export default function WorkExperience() {
  return (
    <Layout title="Priyesh's Portfolio">
      <WorkEx />

      {/* Rest of your home page content */}
    </Layout>
  );
}
