import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import styles from "./Dropdown.module.css";

interface DropDownMenu {
  menuTitle: string;
  onClick?: () => void;
}
export type DropDownMenus = Array<DropDownMenu>;
interface Props {
  title: string;
  menus: DropDownMenus;
  width?: number;
}
const defaultProps: Props = {
  title: "Dropdown",
  menus: [
    { menuTitle: "Menu 1", onClick: () => {} },
    { menuTitle: "Menu 2", onClick: () => {} },
  ],
  width: 150,
};

const Dropdown = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [dropDownMenuData, setDropDownMenuData] = useState("");

  const handleOpen = () => {
    setOpen(!open);
  };

  useEffect(() => {
    props.menus.unshift({
      menuTitle: "Selct Option",
      onClick() {
        setDropDownMenuData("");
      },
    });
  }, [props.menus]);

  return (
    <div className={styles.dropdown} style={{ width: props.width }}>
      <button onClick={handleOpen} className={styles.dropdown_button}>
        {!dropDownMenuData ? (
          <>
            <p>{props.title}</p>
            <p>|</p>
          </>
        ) : (
          <p>{dropDownMenuData}</p>
        )}
        <FontAwesomeIcon icon={faChevronDown} />
      </button>
      {open ? (
        <ul className={styles.menu}>
          {props.menus.map((item, index) => {
            return (
              <li className="menu-item" key={index}>
                <button
                  onClick={() => {
                    console.log(item);
                    setDropDownMenuData(item.menuTitle);
                    item.onClick();
                    setOpen(!open);
                  }}
                >
                  {item.menuTitle}
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
};

Dropdown.defaultProps = defaultProps;

export default Dropdown;
