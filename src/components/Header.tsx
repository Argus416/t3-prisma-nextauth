import { NextComponentType } from "next";
import { useSession, signIn, signOut } from "next-auth/react";

const Header: NextComponentType = () => {
  const { data: sessionData } = useSession();
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn-ghost btn text-xl normal-case">daisyUI</a>
      </div>
      <div className="flex-none">
        <div className="dropdown-end dropdown">
          <label tabIndex={0} className="btn-ghost btn-circle avatar btn">
            <div className="w-10 rounded-full">
              <img src={sessionData?.user.image} />
            </div>
          </label>
          {sessionData?.user.name ? (
            <ul
              tabIndex={0}
              className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
            >
              <li>
                <a className="justify-between">Profile</a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
              <li class="bg-red-500 text-white">
                <button onClick={() => void signOut()}>Sign out</button>
              </li>
            </ul>
          ) : (
            <button onClick={() => void signOut()}>Sign out</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
