export declare const schemaTypes: (({
    type: "document";
    name: "resume";
} & Omit<import("sanity", { with: { "resolution-mode": "import" } }).DocumentDefinition, "preview"> & {
    preview?: import("sanity", { with: { "resolution-mode": "import" } }).PreviewConfig<{}, Record<never, any>> | undefined;
}) | ({
    type: "document";
    name: "contact";
} & Omit<import("sanity", { with: { "resolution-mode": "import" } }).DocumentDefinition, "preview"> & {
    preview?: import("sanity", { with: { "resolution-mode": "import" } }).PreviewConfig<{}, Record<never, any>> | undefined;
}) | ({
    type: "document";
    name: "bio";
} & Omit<import("sanity", { with: { "resolution-mode": "import" } }).DocumentDefinition, "preview"> & {
    preview?: import("sanity", { with: { "resolution-mode": "import" } }).PreviewConfig<{}, Record<never, any>> | undefined;
}) | ({
    type: "document";
    name: "projects";
} & Omit<import("sanity", { with: { "resolution-mode": "import" } }).DocumentDefinition, "preview"> & {
    preview?: import("sanity", { with: { "resolution-mode": "import" } }).PreviewConfig<Record<string, string>, Record<never, any>> | undefined;
}))[];
