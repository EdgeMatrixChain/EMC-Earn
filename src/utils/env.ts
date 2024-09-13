export type NODE_ENV_TYPE = "development" | "test" | "production"

export const environment:NODE_ENV_TYPE = "test";
// export const environment:NODE_ENV_TYPE = "production";

export const environmentConfig = {
  development: {
    baseRequestUrl: "https://emc-earn-dev.chainfish.xyz"
  },
  test: {
    baseRequestUrl: "https://emc-earn-test.chainfish.xyz"
  },
  production: {
    baseRequestUrl: "https://earn.emc.network"
  }
}

export const currentBaseUrl = environmentConfig[environment].baseRequestUrl;