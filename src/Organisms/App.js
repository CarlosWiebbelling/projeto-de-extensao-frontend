import React from "react";
import { useSelector } from "react-redux";

<<<<<<< HEAD
import Dashboard from "./Dashboard";
import UpdateUser from "./UpdateUser";
import Auth from "./Auth";

export default () => {
  const token = useSelector(state => state.Auth.token);
  return token === null ? <Auth /> : <Dashboard />;
};
=======
import Project from '../Pages/Projects'
import Auth from './Auth'

export default () => {
	const token = useSelector(state => state.Auth.token)
	return token === null ? <Project /> : <Auth />
}
>>>>>>> 66a3ad22245130ecd30f5a47be34967bb46fd91c
