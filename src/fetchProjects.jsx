import { useState, useEffect } from "react";
import { createClient } from "contentful";

const client = createClient({
  space: import.meta.env.VITE_API_KEY,
  environment: "master",
  accessToken: import.meta.env.VITE_ACCESS_TOKEN,
});

export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const res = await client.getEntries({ content_type: "projects" });
      const totalProjects = res.items.map((item) => {
        const { title, url, image } = item.fields;
        const id = item.sys.id;
        const img = image?.fields?.file?.url;
        return { title, url, id, img };
      });
      setProjects(totalProjects);
      setLoading(false);
    } catch (error) {
      console.log("err", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return { loading, projects };
};
