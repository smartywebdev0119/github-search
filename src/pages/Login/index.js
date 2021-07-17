import { Helmet } from "react-helmet";
import toast, { Toaster } from "react-hot-toast";
import { Search } from "../../components/FormSearch";
import { useHistory } from "react-router";

import { useUser } from "../../hooks/useUser";
import * as S from "./style";

const Login = () => {
  const { user, setUser, setValues } = useUser();
  const { push } = useHistory();

  const secondsToLogin = 1000;

  const handleSubmit = (e) => {
    e.preventDefault();
    setValues(user);
    if (user) {
      setTimeout(() => {
        push("/profile");
      }, secondsToLogin);
      toast.success("Logando...");
    }
  };

  const handleInputChange = (e) => {
    setUser(e.target.value);
  };

  return (
    <S.ContainerLogin>
      <Helmet title="Login | GithubSearch" />
      <S.LogoImg src="/assets/svg/logo-vertical.svg" alt="Logo" />
      <Search
        onSubmit={handleSubmit}
        onChange={handleInputChange}
        value={user}
      />
      <Toaster />
    </S.ContainerLogin>
  );
};

export { Login };
