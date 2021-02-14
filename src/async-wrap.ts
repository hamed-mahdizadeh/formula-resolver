export type ExtendedPromise = Promise<unknown> & {resolve: ()=>void};

export function asyncWrap(context: any, fn: any, ...params: any) {
    let resolve: any;
    let reject;
    let thisObj = context || {};
    let nFn = fn.bind(thisObj, ...params);
    let asyncResult = new Promise((res, rej) => {
        resolve = res.bind(thisObj, nFn());
        reject = rej;
    });
    let outputPromise = (asyncResult as ExtendedPromise);
    outputPromise.resolve = ()=>resolve();
    return outputPromise;
}


