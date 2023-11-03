export const searchApi = (input : string) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('searching -' + input);
            resolve('searchApi');
        }
        , 1000);
    });
};