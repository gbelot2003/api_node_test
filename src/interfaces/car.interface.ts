/**
 * interface de Items Cars
 */
export interface Car {
    name: String;
    color:String;
    gas: 'gasoline'|'electric'
    year: Number
    description: string
    price: Number
}