export const generateId = (): string => {
  const chars =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  return Array.from({ length: 12 })
    .map(() => chars[Math.floor(Math.random() * chars.length)])
    .join('');
};
