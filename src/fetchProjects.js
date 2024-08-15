import { createClient } from "contentful";

const client = createClient({
  space: import.meta.env.VITE_API_KEY,
  environment: "master",
  accessToken: import.meta.env.VITE_ACCESS_TOKEN,
});

client
  .getEntries({ content_type: import.meta.env.VITE_PROJECT_ID })
  .then((res) => {
    console.log("res", res);
  });
