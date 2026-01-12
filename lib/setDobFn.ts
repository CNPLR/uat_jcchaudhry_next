export default function setDobFn(dob: string|Date): string|Date{
    return (dob as Date)?.toLocaleDateString() || "";
    
}