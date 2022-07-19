export function templateReduce(strings: TemplateStringsArray, ...expr: Array<string | null | undefined>): string {
    return expr.reduce<string>(
        (accumulator, currentExpr, index) => {
            return accumulator + strings[index] + currentExpr;
        },
        '',
    ) + strings.slice(-1);
}