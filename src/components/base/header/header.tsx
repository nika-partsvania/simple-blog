import { Link, NavLink, NavLinkRenderProps } from "react-router-dom";

import classes from "./header.module.css";
import { useMutation } from "@tanstack/react-query";
import { logout } from "@/supabase/auth";
import { useAtomValue } from "jotai";
import { userAtom } from "@/store/auth";

export const Header: React.FC = () => {
  const user = useAtomValue(userAtom);

  const { mutate: handleLogout } = useMutation({
    mutationKey: ["logout"],
    mutationFn: logout,
  });

  const handleActiveNav = (props: NavLinkRenderProps) => {
    const { isActive } = props;

    if (isActive) {
      return classes["active_nav_item"];
    } else {
      return classes["nav_item"];
    }
  };

  return (
    <header className={classes.root}>
      <Link className={classes["logo"]} to="/">
        <h1>Simple Blog</h1>
      </Link>
      <div className={classes.nav}>
        <NavLink className={handleActiveNav} to="articles">
          Articles
        </NavLink>
        <NavLink className={handleActiveNav} to="about">
          About
        </NavLink>
        <NavLink className={handleActiveNav} to="contact">
          Contact
        </NavLink>
        <NavLink className={handleActiveNav} to="test">
          Test
        </NavLink>
      </div>
      <div className="flex w-full items-center justify-end text-blue-400">
        {user ? (
          <div className="flex gap-x-6">
            <NavLink className={handleActiveNav} to="profile">
              Profile
            </NavLink>
            <span onClick={() => handleLogout()} className="cursor-pointer">
              Logout
            </span>
          </div>
        ) : (
          <NavLink className={handleActiveNav} to="login">
            Login
          </NavLink>
        )}
      </div>
    </header>
  );
};
