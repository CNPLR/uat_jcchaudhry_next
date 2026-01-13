export default function handleDatePicker(e: any): string | null {
  let raw = e.target.value;
  if (!raw) return null;

  // Keep only digits
  const digits = raw.replace(/\D/g, "");

  // Limit input to DDMMYYYY
  if (digits.length > 8) return null;

  let formatted = "";

  // Auto add '/' after DD and MM
  if (digits.length <= 2) {
    formatted = digits;
  } else if (digits.length <= 4) {
    formatted = `${digits.slice(0, 2)}/${digits.slice(2)}`;
  } else {
    formatted = `${digits.slice(0, 2)}/${digits.slice(2, 4)}/${digits.slice(4)}`;
  }

  e.target.value = formatted;

  // Not complete yet
  if (digits.length < 8) return null;

  const day = Number(digits.slice(0, 2));
  const month = Number(digits.slice(2, 4));
  const year = Number(digits.slice(4, 8));

  // Basic validation
  if (month < 1 || month > 12) return null;
  if (day < 1 || day > 31) return null;

  const date = new Date(year, month - 1, day);

  // Strict calendar validation
  if (
    date.getFullYear() !== year ||
    date.getMonth() !== month - 1 ||
    date.getDate() !== day
  ) {
    return null;
  }

  // Auto blur when valid
  setTimeout(() => e.target.blur());

  // Return YYYY-MM-DD
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${year}-${pad(month)}-${pad(day)}`;
}
