export interface ApiKeyConfig {
  username: string;
  key: string;
}

export const API_KEYS: ApiKeyConfig[] = [
  {
    username: "superman",
    key: process.env.NEXT_PUBLIC_API_KEY_SUPERMAN || ''
  },
  {
    username: "stonner",
    key: process.env.NEXT_PUBLIC_API_KEY_STONNER || ''
  },
  {
    username: "warrior",
    key: process.env.NEXT_PUBLIC_API_KEY_WARRIOR || ''
  },
  {
    username: "nosferatu",
    key: process.env.NEXT_PUBLIC_API_KEY_NOSFERATU || ''
  }
];
