import MenuItemNew from "./menu-item";


export default function MenuListNew({list = []}){
    

    return (
        <ul>
            {list && list.length ? // if list isnt empty then map over each item and call MenuItemNew component for each item
            list.map((listItem) => <MenuItemNew item={listItem} />) 
            : null
        }
        </ul>
    )
}