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
const data = [
    {
        "id": crypto.randomUUID(),
        "cover": "once-in-ho.jpg",
        "title": "Once Upon a Time... in Hollywood",
        "description": "A faded television actor and his stunt double strive to achieve fame and success in the film industry during the final years of Hollywood's Golden Age in 1969 Los Angeles.",
        "genre": "Comedy/Drama",
        "rating": 5,
        "price": 140
    },
    {
        "id": crypto.randomUUID(),
        "cover": "marriage-strory.jpg",
        "title": "Marriage Story",
        "description": "Noah Baumbach's incisive and compassionate look at a marriage breaking up and a family staying together.",
        "genre": "Comedy/Drama",
        "rating": 3,
        "price": 90
    },
    {
        "id": crypto.randomUUID(),
        "cover": "pain-and-gain.jpg",
        "title": "Pain & Gain",
        "description": "A trio of bodybuilders in Florida get caught up in an extortion ring and a kidnapping scheme that goes terribly wrong.",
        "genre": "Action/Comedy/Crime/Drama",
        "rating": 4,
        "price": 100
    },
    {
        "id": crypto.randomUUID(),
        "cover": "parasite.jpg",
        "title": "Parasite",
        "description": "All unemployed, Ki-taek and his family take peculiar interest in the wealthy and glamorous Parks, as they ingratiate themselves into their lives and get entangled in an unexpected incident.",
        "genre": "Comedy, Drama, Thriller",
        "rating": 4,
        "price": 250
    },
    {
        "id": crypto.randomUUID(),
        "cover": "iron-man.png",
        "title": "Iron Man",
        "description": "When Branch’s brother, Floyd, is kidnapped for his musical talents by a pair of nefarious pop-star villains, Branch and Poppy embark on a harrowing and emotional journey to reunite the other brothers and rescue Floyd from a fate even worse than pop-culture obscurity.",
        "genre": "Action/Adventure/Sci-fi",
        "rating": 5,
        "price": 100
    }
]
export const getMovies = () => {
    return data
};
export const getSidebarIcon = (name) => {
    return new URL(`../assets/icons/${name}`, import.meta.url).href;
}
export const getMovieCover = (name)=>{
    return new URL(`../assets/movie-covers/${name}`, import.meta.url).href;
}
