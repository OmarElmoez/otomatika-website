export type TProduct = {
  title: string;
  link?: string;
  thumbnail: string;
}

export type TProjectHero = {
  title: string;
  description: string;
  images: TProduct[];
}
