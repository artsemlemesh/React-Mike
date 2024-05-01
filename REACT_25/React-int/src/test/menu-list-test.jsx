import MenuItem from "./menu-item-test";

export default function MenuList({ list = [] }) {
  return (
    <ul>
      {list && list.length
        ? list.map((litem) => <MenuItem item={litem} />)
        : null}
    </ul>
  );
}
