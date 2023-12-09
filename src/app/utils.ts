export const displayDate = (date: Date): string => {
    return date.toLocaleDateString("fr-FR", {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

export const capitalize = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export const prettifyUrl = (url: string): string => {
    return url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split("/")[0];
}