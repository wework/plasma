// @flow
import metadata from 'libphonenumber-js/metadata.min.json';

export default function dialCodeFromCountry(countryCode: string): string | null {
  const country = metadata.countries[countryCode];

  if (!country) {
    return null;
  }

  return country[0];
}
