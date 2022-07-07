import { useEffect } from "react";
import Router from "next/router";
import nookies from 'nookies';

export default function Logout() {

  useEffect(() => {
    nookies.destroy(null, 'username')
    Router.replace("/login");
  }, []);

  return ("")
}