import Link from 'next/link';
import ResourceLabel from './ResourceLabel';
import moment from 'moment';
import { ResourcesFiltrees } from './Navbar';
const ResourceList = ({ resources,filterText }) => {
    const filteredResources = ResourcesFiltrees({ resources, filterText });
    const renderResources = () =>
        filteredResources.map(resource =>
            <div key={resource.id} className="column is-5 is-offset-1 ">
                <div className="content is-medium">
                    <h2 className="subtitle is-5 has-text-grey">
                    {moment(resource.createdAt).format("LLL")}
                        <ResourceLabel status={resource.status} />
                    </h2>
                    <h1 className="title has-text-black is-3">{resource.title}</h1>
                    <p className="has-text-dark mb-2">{resource.description}</p>
                    <Link legacyBehavior href={`/resources/${resource.id}`}>
                          <a className="button is-light">
                            Details
                          </a>
                    </Link>
                </div>
            </div>
        )

    return (
        <section className="hero ">
            <div className="hero-body">
                <div className="container">
                    <section className="section">
                        <div className="columns is-multiline is-variable is-8">
                            {renderResources()}
                        </div>
                    </section>
                </div>
            </div>
        
      </section>
    )
  }

export default ResourceList;