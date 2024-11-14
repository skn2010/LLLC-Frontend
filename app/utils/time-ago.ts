export function timeAgo(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  const seconds = diffInSeconds;
  const minutes = Math.floor(diffInSeconds / 60);
  const hours = Math.floor(diffInSeconds / 3600);
  const days = Math.floor(diffInSeconds / 86400);
  const years = Math.floor(diffInSeconds / 31536000);

  if (years > 1) {
    return `${years} years ago`;
  }
  if (years === 1) {
    return `1 year ago`;
  }
  if (days > 1) {
    return `${days} days ago`;
  }
  if (days === 1) {
    return `1 day ago`;
  }
  if (hours > 1) {
    return `${hours} hours ago`;
  }
  if (hours === 1) {
    return `1 hour ago`;
  }
  if (minutes > 1) {
    return `${minutes} minutes ago`;
  }
  if (minutes === 1) {
    return `1 minute ago`;
  }
  if (seconds > 1) {
    return `${seconds} seconds ago`;
  }
  return `Just now`;
}
