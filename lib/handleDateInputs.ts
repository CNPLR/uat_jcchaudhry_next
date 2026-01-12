export default function handleDatePicker(e: any): string | null {
         let value = e.target.value;
        if (!value) return null;

        const digitsOnly = value.replace(/\D/g, "");

        let normalized = value;

        if (digitsOnly.length === 8) {
            const dd = digitsOnly.slice(0, 2);
            const mm = digitsOnly.slice(2, 4);
            const yyyy = digitsOnly.slice(4, 8);
            normalized = `${dd}/${mm}/${yyyy}`;
        }

        const parts = normalized.split("/"); 
        if (parts.length !== 3) return null;

        const [ddStr, mmStr, yyyyStr] = parts;
        const day = Number(ddStr);
        const month = Number(mmStr);
        const year = Number(yyyyStr);

        if (!day || !month || !year) return null;
        if (month < 1 || month > 12) return null;
        if (day < 1 || day > 31) return null;

        const date = new Date(year, month - 1, day);

        if (
            date.getFullYear() !== year ||
            date.getMonth() !== month - 1 ||
            date.getDate() !== day
        ) {
            return null;
        }

        setTimeout(() => { 
          
            if (!value.includes("/") && value.length >= 8) {
                e.target.blur();
            }
         })

        return date.toLocaleDateString();
    }