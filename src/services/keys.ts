export const pageCacheKey = (id: string) => `pagecache#${id}`;
export const usersKey = (userId: string) => `users#${userId}`;

// 这里的sessionId指的就是token
export const sessionsKey = (sessionId: string) => `sessions#${sessionId}`;
export const usernameUniqueKey = () => 'usernames:unique';
export const userLikesKey = (userId: string) => `users:likes#${userId}`;
export const usernamesKey = () => 'usernames';

// Items

export const itemsKey = (itemId: string) => `items#${itemId}`;
// 放了一张view的item表，只有两列（item和view）
export const itemsByViewsKey = () => 'items:views';
export const itemsByEndingAtKey = () => 'items:endingAt';
export const itemsViewsKey = (itemId: string) => `items:views#${itemId}`;
export const bidHistoryKey = (itemId: string) => `history#${itemId}`;
