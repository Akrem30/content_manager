import Layout from "components/Layout";
import ResourceHighlight from "components/ResourceHighlight";
import Newsletter from "components/Newsletter";
import ResourceList from "components/ResourceList";
import Footer from "components/Footer";
import { useState } from "react";

export default function Home({ resources }) {
  const [filterText, setFilterText] = useState('');
  return (
    <Layout filterText={filterText} onFilterTextChange={setFilterText}>
      <ResourceHighlight
        resources={resources.slice(0, 2)}
        filterText={filterText}
      />
      <Newsletter />
      <ResourceList
        resources={resources.slice(2)}
        filterText={filterText}
      />
      <Footer />
    </Layout>
  )
}
export async function getServerSideProps() {
  const resData = await fetch("http://localhost:3001/api/resources");
  const data = await resData.json();
  return {
    props: {
      resources: data
    }
  }
}