export type CurryFn = (cmdLineArgs?: Array<string>) => Array<string>;

export function composeArgs(...cmdLineArgFns: Array<CurryFn>): CurryFn {
    return (cmdLineArgs: Array<string> = []) => {
        return cmdLineArgFns.reduce(
            (commandLineArgs: Array<string>, cmdLineArgsFn) => cmdLineArgsFn(commandLineArgs),
            cmdLineArgs || [],
        );
    };
}
