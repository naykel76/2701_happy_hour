export interface MyBeer {
    beer_id: number;
    name: string;
    image: string;
    is_favourite?: boolean,
    venues: {
        name: string
        price: number,
    }[];
}
