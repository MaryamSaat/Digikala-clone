//SubmenuWrapper.tsx → رفتار و layout مدیریت می‌کند → activeCategoryId از Redux می‌گیرد → SubmenuContent را می‌سازد.

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../../../store/store";
import { setActiveCategory } from "../../../store/slices/menuSlice";
import SubmenuColumn from "./SubmenuColumn";
import SubmenuContent from "./SubmenuContent";

const SubmenuWrapper: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const activeCategoryId = useSelector((state: RootState) => state.menu.activeCategoryId);

  return (
    <div
      className="w-[70vw] h-[70vh] bg-[whitesmoke] shadow-[0_0_15px_#abb2b9] z-[9999] flex relative"
      onMouseLeave={() => dispatch(setActiveCategory(null))}
    >
      <SubmenuColumn />
      {activeCategoryId && <SubmenuContent />}
    </div>
  );
};

export default SubmenuWrapper;

