export function stringify(data: unknown): string {
  if (typeof data === 'bigint') {
    return data.toString() + 'n'
  }
  return JSON.stringify(data)
}
