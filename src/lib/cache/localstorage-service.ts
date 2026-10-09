class LocalStorageService {

    // tempo em que o cache expira em milisegundos
    expireTime: number = 1000*60*60*24
    
    // guarda um item no cache
    store(key: string, data: any) {
        let now = Date.now();

        let obj = {
            value: data,
            created: now,
            expiresIn: now + this.expireTime
        }

        localStorage.setItem(key, JSON.stringify(obj));
    }

    // pega os itens no cache
    // apaga se estiver ivalido
    getItem(key: string): any | null {
        let cacheData = localStorage.getItem(key);

        if (!cacheData) {
            return null;
        }

        let obj = JSON.parse(cacheData);

        if (!this.isCacheValid(obj)) {
            localStorage.removeItem(key);
            return null;
        }

        return obj.value;
    }

    // checa se o cache é valido
    private isCacheValid(object: any): boolean {
        return Date.now() < object.expiresIn;
    }

}

const cache = new LocalStorageService();

export default cache;