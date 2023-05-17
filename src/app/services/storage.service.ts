import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
    providedIn: 'root'
})
export class StorageService {

    constructor(private storage: Storage) { this.init(); }

    async init() {
        await this.storage.create();
    }

    public async set(key: string, value: any) {
        let result = await this.storage?.set(key, value);
    }

    public async get(key: string) {
        return await this.storage?.get(key);
    }

    public async remove(key: string) {
        await this.storage?.remove(key);
    }

    public async clear() {
        await this.storage?.clear();
    }

    public async keys() {
        return await this.storage?.keys();
    }

    public async length() {
        return await this.storage?.length();
    }
}
