export function templateReduce(strings: TemplateStringsArray, ...expr: Array<string | null | undefined>): string {
    return expr.reduce<string>(
        (accumulator, currentExpr, index) => {
            if (!!currentExpr) {
                return accumulator + strings[index] + currentExpr;
            }

            return accumulator;
        },
        '',
    ) + strings.slice(-1);
}