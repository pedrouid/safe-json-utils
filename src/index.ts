export function safeJsonParse<T>(value: string): T | string {
  if (typeof value !== 'string') {
    throw new Error(`Cannot safe json parse value of type ${typeof value}`);
  }
  try {
    return JSON.parse(value);
  } catch {
    return value;
  }
}

export function safeJsonStringify(value: any): string {
  return typeof value === 'string'
    ? value
    : JSON.stringify(value, (key: string, value: any) =>
        typeof value === 'undefined' ? null : value
      );
}
