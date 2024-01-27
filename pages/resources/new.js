
import axios from "axios";
import ResourceForm from "components/ResourceForm";
import { useRouter } from "next/router";
import LayoutOtherPages from "components/LayoutOtherPages";

const ResourceCreate = () => {
  const router = useRouter();
  const createResource = formData => {
    axios.post("/api/resources", formData)
      .then(_ => router.push("/"))
      .catch(err => alert(err?.response?.data));
  }
  return (
    <LayoutOtherPages>
      <div className="container">
        <div className="columns">
          <div className="column is-8 is-offset-2">
            <h1 className="title  mtop">Add New Resource</h1>
            <ResourceForm
              onFormSubmit={createResource}
            />
          </div>
        </div>
      </div>
    </LayoutOtherPages>
  )
}
export default ResourceCreate;