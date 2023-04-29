// Define a type for the supported icons
export type SupportedIcons =
  | "spotify"
  | "youtube"
  | "soundcloud"
  | "discord"
  | "music"
  | "download"
  | "revived";

// Use Record utility type to define the type of the icons object
export const icons: Record<SupportedIcons, string> = {
  spotify: "simple-icons:spotify",
  youtube: "simple-icons:youtube",
  soundcloud: "simple-icons:soundcloud",
  discord: "simple-icons:discord",
  music: "material-symbols:library-music-rounded",
  download: "mdi:download",
  revived: "revived-logo.svg",
};
