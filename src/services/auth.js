export function signIn() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                token: 'dsafsfdhgfjhdfsdas2 13245235 dssASADSGFD',
                user: {
                    name: 'Joao',
                    email: 'licio.machado@hotmail.com'
                },
            });
        }, 1000);
    });
}