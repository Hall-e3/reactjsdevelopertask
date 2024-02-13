"use client";

import { Button } from "..";

interface MenuItemProps {
  onClick: () => void;
  label: string;
  iconRight?: React.ReactElement;
}

const MenuItem: React.FC<MenuItemProps> = ({ onClick, label, iconRight }) => {
  return <Button outline text={label} icon={iconRight} onClick={onClick} buttonStyle="cursor-pointer px-4 py-3 text-blue-700 transition font-semibold" />;
};

export default MenuItem;
