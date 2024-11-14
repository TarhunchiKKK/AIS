export const dateFormatter = {
    formatDate(date: Date): string {
        const day = date.getDay();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();

        const hours = date.getHours();
        const minutes = date.getMinutes();

        return `${hours}:${minutes} ${day}.${month}.${year}`;
    },

    createDateFromStr(date: string) {
        return new Date(date);
    },
};
