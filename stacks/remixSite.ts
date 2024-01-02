import { RemixSite, StackContext } from "sst/constructs";

export function RemixStack({ stack }: StackContext) {
  const site = new RemixSite(stack, "RemixSite", {
    path: "remix-site/",
    runtime: "nodejs20.x",
    nodejs: {
      format: "esm",
    },
    edge: false,
    timeout: 30,
    memorySize: 512,
    buildCommand: "bun run build",
    dev: { deploy: false },
  });

  stack.addOutputs({
    url: site.url,
  });
}
