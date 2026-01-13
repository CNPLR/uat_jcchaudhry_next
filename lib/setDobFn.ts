export default function setDobFn(dob: string | Date): string {
    const date = dob instanceof Date ? dob : new Date(dob);

    if (isNaN(date.getTime())) {
        throw new Error("Invalid date");
    }

    const pad = (n: number) => String(n).padStart(2, "0");

    const year = date.getFullYear();
    const month = pad(date.getMonth() + 1);
    const day = pad(date.getDate());

    return `${year}-${month}-${day}`;
}
