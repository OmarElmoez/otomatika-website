// Import all logo assets
import nationalServicesLogo from './National-Services-LOGO-2.png';
import digihavenLogo from './Digihaven-Black.png';
import thysCommunicatieLogo from './thys_communicatie_logo.png';
import webNWellLogo from './webnwell_logo.png';
import theSearchEngineersLogo from './the_search_engineers_logo.png';
import rilaGroupLogo from './rila-group.jpeg';
import cliquifyLogo from './cliquify_inc_logo.png';
import monhnaLogo from './monhna.png';
import swiftlyAILogo from './swiftlyai_logo.png';
import FbLogo from './fb.png';
import LinkedInLogo from './in.png';
import GoogleAdsLogo from './google-ads.png';
import OtomatikaLogo from './otomatica-logo.png'

// Define logo type
export interface Logo {
  src: string;
  alt: string;
}

// Export each logo with its metadata
export const NationalServices: Logo = {
  src: nationalServicesLogo,
  alt: 'National Services'
};

export const Digihaven: Logo = {
  src: digihavenLogo,
  alt: 'Digihaven'
};

export const ThysCommunicatie: Logo = {
  src: thysCommunicatieLogo,
  alt: 'Thys Communicatie'
};

export const WebNWell: Logo = {
  src: webNWellLogo,
  alt: 'Web N Well'
};

export const TheSearchEngineers: Logo = {
  src: theSearchEngineersLogo,
  alt: 'The Search Engineers'
};

export const RilaGroup: Logo = {
  src: rilaGroupLogo,
  alt: 'Rila Group'
};

export const Cliquify: Logo = {
  src: cliquifyLogo,
  alt: 'Cliquify Inc'
};

export const Monhna: Logo = {
  src: monhnaLogo,
  alt: 'Monhna'
};

export const SwiftlyAI: Logo = {
  src: swiftlyAILogo,
  alt: 'Swiftly AI'
};

// Export all logos in an array for easy use with the InfiniteMovingCards component
export const AllCompanyLogos: Logo[] = [
  NationalServices,
  Digihaven,
  ThysCommunicatie,
  WebNWell,
  TheSearchEngineers,
  RilaGroup,
  Cliquify,
  Monhna,
  SwiftlyAI
]; 

export { FbLogo, LinkedInLogo, GoogleAdsLogo, OtomatikaLogo };