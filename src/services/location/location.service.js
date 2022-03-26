import { locations } from "./location.mock";
import camelize from "camelize";
export const LocationRequest = (searchTerm) => {
  return new Promise((resolve, reject) => {
    const location = locations[searchTerm];
    if (!location) {
      reject("not found");
    }
    resolve(location);
  });
};

export const LocationTransform = (result) => {
  const formttedResult = camelize(result);
  const { geometry = {} } = formttedResult.results[0];
  const { lat, lng } = geometry.location;
  return { lat, lng, viewport: geometry.viewport };
};
