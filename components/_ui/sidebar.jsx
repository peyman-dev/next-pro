import React from "react";

export const Sidebar = ({ children }) => {
  return (
    <aside className="min-w-[300px] space-y-2 child:border child:rounded child:p-3">
      {children}
    </aside>
  );
};

export const SidebarItem = ({ children }) => {
  return <div className="p-4">{children}</div>;
};
