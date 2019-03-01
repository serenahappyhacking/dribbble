export const SAVE_IMAGE = "SAVE_IMAGE";
export const LIKE_IMAGE = "LIKE_IMAGE";

export const saveImage = id => ({
  type: SAVE_IMAGE,
  id
});

export const likeImage = id => ({
  type: LIKE_IMAGE,
  id
});
