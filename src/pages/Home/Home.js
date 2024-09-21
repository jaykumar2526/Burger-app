import React from "react";
import Layout from "../../components/Layout";
import "../../styles/HomeStyle.css";
import Section3 from "./Section3";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from "./Section7";

const Home=()=>{
    return <>
    <Layout>
      {/* {Home section1 Hero} */}
      <Section1/>
      {/* {Home section2 About} */}
      <Section2/>
      {/* {Home section3 Menu} */}
      <Section3/>
      {/* {Home section4 Promote} */}
      <Section4/>
      {/* {Home section5 Shope} */}
      <Section5/>
      {/* {Home section6 blog} */}
      <Section6/>
      {/* {Home section7 Contac} */}
      <Section7/>

    </Layout>
   </>
  }
  export default Home;