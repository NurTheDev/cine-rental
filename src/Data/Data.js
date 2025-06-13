export const sidebarItems = [
    {
        id: 1,
        name: "Trending",
        icon: "trending.svg",
        isActive: true,
    },
    {
        id: 2,
        name: "New Releases",
        icon: "newRelease.svg",
        isActive: false,
    },
    {
        id: 3,
        name: "Coming Soon",
        icon: "commingSoon.svg",
        isActive: false,
    },
    {
        id: 4,
        name: "Favourites",
        icon: "favourite.svg",
        isActive: false,
    },
    {
        id: 5,
        name: "Watch Later",
        icon: "watchLater.svg",
        isActive: false,
    }
];
export const getSidebarIcon = (name) => {
    return new URL(`../assets/icons/${name}`, import.meta.url).href;
}
