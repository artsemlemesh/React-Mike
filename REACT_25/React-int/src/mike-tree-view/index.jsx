import MenuListNew from "./menu-list"


export default function BushView({menu = []}){

    return (
        <div className="tree-view-container">
            <MenuListNew list={menu}/>
        </div>
    )
}