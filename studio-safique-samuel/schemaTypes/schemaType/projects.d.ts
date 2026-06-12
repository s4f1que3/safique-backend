export declare const projectType: {
    type: "document";
    name: "projects";
} & Omit<import("sanity", { with: { "resolution-mode": "import" } }).DocumentDefinition, "preview"> & {
    preview?: import("sanity", { with: { "resolution-mode": "import" } }).PreviewConfig<Record<string, string>, Record<never, any>> | undefined;
};
