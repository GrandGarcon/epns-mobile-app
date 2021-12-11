import { Platform } from "react-native";
import {
  TESTNET_INFURA_API,
  MAINNET_INFURA_API,
  DEV_EPNS_SERVER,
  PROD_EPNS_SERVER,
  ENDPOINT_AUTHTOKEN,
  ENDPOINT_REGISTER_NO_AUTH,
  ENDPOINT_REGISTER,
  ENDPOINT_GET_FEEDS,
  ENDPOINT_FETCH_CHANNELS,
  ENDPOINT_SUBSCRIBE_OFFCHAIN,
  ENDPOINT_UNSUBSCRIBE_OFFCHAIN,
  ENDPOINT_FETCH_SUBSCRIPTION,
  YOUTUBE_API_KEY,
  CNS_ENDPOINT,
  APP_VERSION,
  METAMASK_LINK_PROD,
} from "react-native-dotenv";

const IS_PROD_ENV = 1; // 1 is Production, 0 is testnet / development, 1 or socket server doesnt work
const SHOW_CONSOLE = 1; // Show or disable console

export default {
  PROD_ENV: IS_PROD_ENV,
  SHOW_CONSOLE: SHOW_CONSOLE,

  INFURA_API: IS_PROD_ENV ? MAINNET_INFURA_API : TESTNET_INFURA_API,

  // All Server related endpoints
  EPNS_SERVER: IS_PROD_ENV ? PROD_EPNS_SERVER : DEV_EPNS_SERVER,

  ENDPOINT_AUTHTOKEN: ENDPOINT_AUTHTOKEN,
  ENDPOINT_REGISTER_NO_AUTH: ENDPOINT_REGISTER_NO_AUTH,
  ENDPOINT_REGISTER: ENDPOINT_REGISTER,
  ENDPOINT_GET_FEEDS: ENDPOINT_GET_FEEDS,
  ENDPOINT_FETCH_SUBSCRIPTION: ENDPOINT_FETCH_SUBSCRIPTION,
  METAMASK_LINK_PROD: METAMASK_LINK_PROD,

  YOUTUBE_API_KEY: YOUTUBE_API_KEY,
  ENDPOINT_SUBSCRIBE_OFFCHAIN: ENDPOINT_SUBSCRIBE_OFFCHAIN,
  ENDPOINT_UNSUBSCRIBE_OFFCHAIN: ENDPOINT_UNSUBSCRIBE_OFFCHAIN,

  ENDPOINT_FETCH_CHANNELS: ENDPOINT_FETCH_CHANNELS,

  // Third-party services endpoints
  CNS_ENDPOINT: CNS_ENDPOINT,

  // App Version
  APP_VERSION: APP_VERSION,
};
