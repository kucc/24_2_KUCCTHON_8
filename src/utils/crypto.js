export const base64Encoder = (data) => {
  return btoa(encodeURIComponent(JSON.stringify(data)));
};

export const base64Decoder = (data) => {
  return JSON.parse(decodeURIComponent(atob(data)));
};
