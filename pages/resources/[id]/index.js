
import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";
import ResourceLabel from "components/ResourceLabel";
import moment from "moment";
import LayoutOtherPages from "components/LayoutOtherPages";

const ResourceDetail = ({ resource }) => {
  //  const router = useRouter();
  // if (router.isFallback) {
  //   return <div>Loading Data!</div>;
  // }
  const activeResource = () => {
    axios.patch("/api/resources", { ...resource, status: "active" })
      .then(_ => location.reload())
      .catch(_ => alert("Cannot active the resource!"))
  }
  const router = useRouter();
  const deleteResource = () => {
    axios.delete(`/api/resources/?id=${resource.id}`)
      .then(_ => router.push("/"))
      .catch(err => alert(err?.response?.data))

  }
  return (
    <LayoutOtherPages>
      <section className="hero ">
        <div className="hero-body">
          <div className="container">
            <section className="section">
              <div className="columns">
                <div className="column is-8 is-offset-2">
                  <div className="content is-medium">
                    <h2 className="subtitle is-4">
                      {moment(resource.createdAt).format("LLL")}
                      <ResourceLabel status={resource.status} />
                    </h2>
                    <h1 className="title">{resource.title}</h1>
                    <p>{resource.description}</p>
                    <p>Time to finish: {resource.timeToFinish} min</p>
                    {resource.status === "inactive" &&
                      <>
                        <Link legacyBehavior href={`/resources/${resource.id}/edit`}>
                          <a className="button is-warning">
                            Update
                          </a>
                        </Link>
                        <button
                          onClick={activeResource}
                          className="button is-success ml-1">
                          Activate
                        </button>
                        <button
                          onClick={deleteResource}
                          className="button is-danger ml-1">
                          Delete
                        </button>
                      </>
                    }
                    {resource.status === "complete" &&
                      <>
                        <button
                          onClick={deleteResource}
                          className="button is-danger ml-1">
                          Delete
                        </button>
                      </>
                    }
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </LayoutOtherPages>
  )
}

export async function getServerSideProps({ params }) {
  const dataRes = await fetch(`http://localhost:3001/api/resources/${params.id}`);

  if (!dataRes.ok) {
    // Si la requête n'a pas abouti (statut HTTP différent de 200 OK)
    // Vous pouvez gérer ici le cas où la ressource n'existe pas
    // Par exemple, vous pouvez rediriger l'utilisateur ou afficher un message d'erreur
    return {
      notFound: true, // Indique à Next.js de gérer la page comme une page 404
    };
  }
  try {
    const data = await dataRes.json();
    return {
      props: {
        resource: data,
      },
    };
  } catch (error) {
    // Gérez le cas où la réponse de l'API n'est pas du JSON valide
    // Par exemple, redirigez l'utilisateur ou affichez un message d'erreur
    return {
      notFound: true, // Indique à Next.js de gérer la page comme une page 404
    };
  }
}

export default ResourceDetail;