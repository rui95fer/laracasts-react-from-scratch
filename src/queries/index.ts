export async function getPuppies() {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/puppies");

    if (!response.ok) {
      const errorData = await response.json();
      throw errorData;
    }

    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
