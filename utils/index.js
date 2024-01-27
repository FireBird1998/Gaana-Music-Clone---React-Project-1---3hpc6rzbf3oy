

const projectId = 'f104bi07c49'; 


export const fetchWithProjectId = async (url, options = {}) => {
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
    const data = await response.json();
    return data;
};

