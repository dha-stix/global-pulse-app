import AsyncStorage from '@react-native-async-storage/async-storage';

export function convertToReadableDate(utcDateString: string | undefined): string {
    if (utcDateString === undefined) return "";
    const utcDate = new Date(utcDateString);
    const options: Intl.DateTimeFormatOptions = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric'
    };
    const readableDate: string = utcDate.toLocaleDateString('en-US', options);
    return readableDate;
}

export interface Categories {
    id: string;
    name: string;
    description: string;
    image_url: string;
}
export interface News { 
    title: string;
    url: string;
    image?: string;
    publishedAt?: string;
    author?: string;
    urlToImage?: string;

}

export interface Image{
    url: string;
}

export const categories: Categories[] = [{
    id: "business",
    name: "Business",
    description: "Business news",
    image_url: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTMyMzYyNg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300"
}, {
    id: "entertainment",
    name: "Entertainment",
    description: "Entertainment news",
    image_url: "https://images.unsplash.com/photo-1598743400863-0201c7e1445b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4NjIyMDI3Nw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300"
}, {
    id: "general",
    name: "General",
    description: "General news",
    image_url:"https://images.unsplash.com/photo-1557992260-ec58e38d363c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTc1MTkwNg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300"
}, {
    id: "health",
    name: "Health",
    description: "Health news",
    image_url: "https://images.unsplash.com/photo-1495638488670-437e54b3bab4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTc2MDI3Mw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300"
    }, {
    id: "science",
    name: "Science",
    description: "Science news",
    image_url: "https://images.unsplash.com/photo-1614935151651-0bea6508db6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTM0MzA0OA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300"
    }, {
    id: "sports",
    name: "Sports",
    description: "Sports news",
    image_url: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTQ1MTE5NQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300"
    }
    
]

const images: Image[] = [
    {
        url: "https://images.unsplash.com/photo-1579532536935-619928decd08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTM3OTI3Ng&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300"
    },
    {
        url: "https://images.unsplash.com/photo-1482160549825-59d1b23cb208?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTQxNzk3Mg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300"
    },
    {
        url: "https://plus.unsplash.com/premium_photo-1664297878197-0f50d094db72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5OTk3MjQ2Ng&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300"
    },
    {
        url: "https://images.unsplash.com/photo-1572375992501-4b0892d50c69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5OTk3MjUxOQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300"
    },
    {
        url: "https://images.unsplash.com/photo-1503694978374-8a2fa686963a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTMyMTY5MA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300"
    },
    {
        url: "https://plus.unsplash.com/premium_photo-1682098211431-6fbbaac9be2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5OTk3MjYwMQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300"
    },
    {
        url: "https://images.uns.lengthplash.com/photo-1529243856184-fd5465488984?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4NjA3NzExNA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300"
    }
]
export const generateRandomImage = () => {
    const index = Math.floor(Math.random() * images.length);
    return images[index].url;
}



