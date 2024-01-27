
import ResourceForm from "components/ResourceForm";
import axios from "axios";
import LayoutOtherPages from "components/LayoutOtherPages";
const ResourceEdit = ({ resource }) => {

  const updateResource = (formData) => {
    axios.patch("/api/resources", formData)
      .then(_ => alert("Data has been updated"))
      .catch(err => alert(err?.response?.data))

  }
  return (
    <LayoutOtherPages>
      <div className="container">
        <div className="columns">
          <div className="column is-8 is-offset-2">
            <h1 className="title mtop">Edit Resource</h1>
            <ResourceForm
              initialData={resource}
              onFormSubmit={updateResource}
            />
          </div>
        </div>
      </div>
    </LayoutOtherPages>
  )
}

export async function getServerSideProps({ params }) {
  const dataRes = await fetch(`http://localhost:3001/api/resources/${params.id}`);
  const data = await dataRes.json();

  return {
    props: {
      resource: data
    }
  }
}
export default ResourceEdit;