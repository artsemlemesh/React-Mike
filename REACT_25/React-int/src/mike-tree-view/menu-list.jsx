import MenuItemNew from "./menu-item";


export default function MenuListNew({list = []}){
    

    return (
        <ul>
            {list && list.length ?
            list.map((listItem) => <MenuItemNew item={listItem} />) 
            : null
        }
        </ul>
    )
}