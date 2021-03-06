//Media resize

export const smallerImg = (imagePath, size) => {
  if (!imagePath) {
    return null;
  }
  return imagePath.match(/media\/screenshots/)
    ? imagePath.replace(
        "media/screenshots",
        `media/resize/${size}/-/screenshots`
      )
    : imagePath.replace("media/games/", `media/resize/${size}/-/games/`);
};
