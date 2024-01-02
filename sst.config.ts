import type { SSTConfig } from "sst";
import { RemixStack } from "./stacks/remixSite";

export default {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  config(input) {
    return {
      name: "holmanpuukko",
      region: "eu-central-1",
      stage: "prod",
    };
  },
  stacks(app) {
    app.stack(RemixStack);
    app.setDefaultRemovalPolicy("destroy");
  },
} satisfies SSTConfig;
