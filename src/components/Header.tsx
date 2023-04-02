import { NextComponentType } from "next";
import { useSession, signIn, signOut, SignOutParams } from "next-auth/react";
import CusButton from "./UI/CusButton";
import { ButtonMode } from "~/models/UI";

const Header: NextComponentType = () => {
  const { data: sessionData } = useSession();
  return (
    <div className="navbar bg-primary text-primary-content">
      <div className="flex-1">
        <a className="text-xl text-white">Notebook</a>
      </div>
      <div className="flex-none">
        <div className="dropdown-end dropdown">
          {sessionData?.user.name ? (
            <div className="dropdown">
              <label tabIndex={0} className="btn-ghost btn-circle avatar btn">
                <div className="w-10 rounded-full">
                  <img
                    src={sessionData?.user.image as string}
                    alt="Profile image"
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu rounded-box w-52 bg-base-100 p-2 shadow"
              >
                <li>
                  <CusButton
                    name="Sign out"
                    action={() => void signOut()}
                    mode={ButtonMode.danger}
                  />
                </li>
              </ul>
            </div>
          ) : (
            <button onClick={() => void signIn()}>Login</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
