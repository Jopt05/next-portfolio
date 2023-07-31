import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Header } from '../../components/administration/header';
import { Menu } from '../../components/administration/menu';
import { Forms } from '../../components/administration/forms';
import { createdContext } from '../../hoc/createContext';

export default function Administration() {

  const [projects, setProjects] = useState([]);
  const [services, setServices] = useState([]);
  const [technologies, setTechnologies] = useState([]);

  const [isEditing, setIsEditing] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [workingElement, setWorkingElement] = useState({});
  const [schema, setSchema] = useState({});

  useEffect(() => {
    fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/servicios`
    )
      .then((response) => response.json())
      .then((data) => {
        setServices(data.services);
      })
  }, []);

  useEffect(() => {
    fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/tecnologias`
    )
      .then((response) => response.json())
      .then((data) => {
        setTechnologies(data.proyectos);
      })
  }, []);

  useEffect(() => {
    fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/proyectos`
    )
      .then((response) => response.json())
      .then((data) => {
        setProjects(data.projects);
      })
  }, []);

  return (
    <div>
      <Head>
        <title>Jopt05 | Admin Site</title>
        <meta name="description" content="Admin Site" />
        <link rel="icon" href="/images/imgs/item1.png" />
        <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;600&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
        <link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet' />
      </Head>

      <createdContext.Provider
        value={{
          isEditing,
          setIsEditing,
          isCreating,
          setIsCreating,
          workingElement,
          setWorkingElement,
          schema,
          setSchema
        }}
      >
        <Header
          data={{
            services,
            projects,
            technologies
          }}
        />
        <Menu
          data={{
            services,
            projects,
            technologies
          }}
        />
        <Forms />
      </createdContext.Provider>
    </div>
  )
}
