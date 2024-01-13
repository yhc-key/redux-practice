import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { authActions } from "../store/auth-slice";
import { Fragment } from "react";

export default function SignIn() {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.auth.isLogin);
  let loginInfor = { id: "", password: "" };
  function submitHandler(event) {
    event.preventDefault();
    if (loginInfor.id !== "ssafy") {
      console.log("아이디가 잘못되었습니다.");
      return;
    }
    if (loginInfor.password !== "ssafy") {
      console.log("비밀번호가 잘못되었습니다.");
      return;
    }
    dispatch(authActions.login());
  }
  function changeHandler(event) {
    loginInfor = { ...loginInfor, [event.target.id]: event.target.value };
  }
  function logoutHandler() {
    loginInfor = { id: "", password: ""};
    dispatch(authActions.logout());
  }
  return (
    <Fragment>
      {!isLogin ? (
        <form onSubmit={submitHandler}>
          <label htmlFor="id">아이디</label>
          <input
            type="text"
            id="id"
            placeholder="아이디"
            onChange={changeHandler}
          />
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            id="password"
            placeholder="비밀번호"
            onChange={changeHandler}
          />
          <button type="submit">로그인</button>
        </form>
      ) : (
        <button onClick={logoutHandler}>로그아웃</button>
      )}
    </Fragment>
  );
}
