export interface ApiKeyConfig {
  username: string;
  key: string;
}

export const API_KEYS: ApiKeyConfig[] = [
  {
    username: "goku",
    key: process.env.NEXT_PUBLIC_API_KEY_GOKU || ''
  },
  {
    username: "vegeta",
    key: process.env.NEXT_PUBLIC_API_KEY_VEGETA || ''
  },
  {
    username: "gohan",
    key: process.env.NEXT_PUBLIC_API_KEY_GOHAN || ''
  },
  {
    username: "trunks",
    key: process.env.NEXT_PUBLIC_API_KEY_TRUNKS || ''
  }
];
