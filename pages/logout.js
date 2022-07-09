import { useEffect } from "react";
import Router from "next/router";
import nookies from 'nookies';

export default function Logout() {

  useEffect(() => {
    nookies.destroy(null, 'username');
    document.cookie = 'username=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT';
    Router.replace("/login");
  }, []);

  return ("")
}