import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
 //const TOKEN =  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOWM3ZWJlNmVlMWRmNjVlYTE0M2ZjOCIsImlzQWRtaW4iOmZhbHNlLCJpc1N1cGVyQWRtaW4iOmZhbHNlLCJpc0RlbGl2ZXJ5TWFuIjpmYWxzZSwidXNlck5hbWUiOiJ6IiwiaWF0IjoxNjU0OTk0MDczLCJleHAiOjE2NjI3NzAwNzN9.sLtzsIDTwMCSrpiZB_4_-XbseXGAPlcfrSpqT7kHgKI";

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
