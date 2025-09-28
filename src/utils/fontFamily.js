import { fontFamilies } from "../constants/fonts";

export const getFontFamily = (isLTR , weight) => {
  const selectedFontFamily = fontFamilies.INTER ;
  return selectedFontFamily[weight];
};
