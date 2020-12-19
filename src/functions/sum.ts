function  _sum(...parameters: number[]): number {
    return parameters.reduce((sum, current)=> sum + current, 0);
}

export function SUM(params: string): string {
    const parameters = params.split(',').map(p=> +p);
    return _sum(...parameters) + '';
}