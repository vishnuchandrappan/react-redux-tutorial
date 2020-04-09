import { v4 as uuidv4 } from "uuid";

export function removePhoto(id) {
  return {
    type: "REMOVE_PHOTO",
    id,
  };
}

export function addPhoto(photo) {
  photo.id = uuidv4();
  return {
    type: "NEW_PHOTO",
    photo,
  };
}
