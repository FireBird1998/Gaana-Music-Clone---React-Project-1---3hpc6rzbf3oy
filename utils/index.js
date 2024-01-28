import toast from "react-hot-toast";


const projectId = 'f104bi07c49'; 


export const fetchWithProjectId = async (url, options = {}) => {
    try {
      // Add the project ID to the headers
      const optionsWithProjectId = {
        ...options,
        headers: {
          ...options.headers,
          'projectId': projectId,
        },
      };
  
      // Make the fetch request
      const response = await fetch(url, optionsWithProjectId);
  
      // Check if the request was successful
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      // Parse the JSON from the response
      const data = await response.json();
  
      return data;
    } catch (error) {
      console.error('An error occurred while fetching:', error);
      toast.error('An error occurred while fetching');
       // Return null if an error occurred
    }
  };
  

