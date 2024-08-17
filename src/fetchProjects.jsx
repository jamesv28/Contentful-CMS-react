import { createClient } from "contentful";

import { useState, useEffect } from "react";

export const useFetchRequests = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const res = await client.getEntries({ content_type: "projects" });
      const totalProjects = res.map((item) => {
        const { title, url, image } = item.fields;
        const id = item.sys.id;
        const img = image?.fields?.file?.url;
        return {
          title,
          url,
          id,
          img,
        };
      });
      setProjects(totalProjects);
      setLoading(false);
    } catch (error) {
      console.log("error", error);
      setLoading(false);
    }
  };
  useEffect(() => {
    getData();
    return {
      loading,
      projects,
    };
  }, []);
};
