import { Puppy } from "../types";

export async function getPuppies() {
  try {
    const response = await fetch(
      "http://react-from-scratch-api.test/api/puppies",
    );

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

export async function toggleLikedStatus(id: Puppy["id"]) {
  try {
    const response = await fetch(
      `http://react-from-scratch-api.test/api/puppies/${id}/like`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

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

export async function createPuppy(formData: FormData) {
  try {
    const response = await fetch(
      "http://react-from-scratch-api.test/api/puppies",
      {
        method: "POST",
        body: formData,
      },
    );

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
