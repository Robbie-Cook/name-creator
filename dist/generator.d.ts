export = generate;
/**
 * Generate a name
 * @param {any | undefined} options
 */
declare function generate(options?: any | undefined): {
    raw: any[];
    dashed: string;
    spaced: string;
};
declare namespace generate {
    export { generate };
}
