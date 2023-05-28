export const helpers = {
    getCurrentDate() {
        const currentDate = new Date();
        return currentDate.toISOString().split('T')[0];
    },
    getRandomDateWithinLastYear() {
        const today = new Date();
        const pastDate = new Date(today.getFullYear() - 1, today.getMonth(), today.getDate());
        const randomTimestamp = Math.floor(Math.random() * (today.getTime() - pastDate.getTime())) + pastDate.getTime();
        const randomDate = new Date(randomTimestamp);
        return randomDate.toISOString().split('T')[0];
    },
    getRandomNumber(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
}

