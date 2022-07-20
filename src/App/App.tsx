import React from "react";
import "./App.css";
import MyCollege from "../components/mycollege/MyCollege";
import MyFriends from "../components/myfriends/MyFriends";
import MyFriendsinfo from "../components/myfriendsinfo/MyFriendsinfo";
import Box from "../components/box/Box";
import { Profile } from "../components/profile/profile";
import Grid from "../components/grid/Grid";
import Header from "../components/header/Header";

import { myfriendsinfo1 } from "../assets/myfriendsinfo1";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App(): JSX.Element {
  return (
    <div className="AppWrapper">
      <Header />

      <Router>
        <div>
          {
            <ul>
              <li>
                <Link to="/MyCollege">MyCollege </Link>
              </li>
              <li>
                <Link to="/MyFriends">MyFriends </Link>
              </li>
              <li>
                <Link to="/MyFriendsinfo">MyFriendsinfo </Link>
              </li>
            </ul>
          }

          {/* <hr/> */}
          <Routes>
            <Route path="/MyCollege" element={<MyCollege />} />
            <Route path="/MyFriends" element={<MyFriends />} />
            {/* <Route path="/MyFriendsinfo" element={<MyFriendsinfo />} /> */}
          </Routes>
          {
            <div>
              {myfriendsinfo1.map((myfriendsinfo, index: number) => {
                console.log(myfriendsinfo);
                return (
                  <MyFriendsinfo key={index} myfriendsinfo={myfriendsinfo} />
                );
              })}
            </div>
          }
        </div>
      </Router>
      <Box> </Box>
      <Grid> </Grid>
      <Profile />
    </div>
  );
}

export default App;
