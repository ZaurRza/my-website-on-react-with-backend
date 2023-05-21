import { useState } from "react";
import { OGEpg } from "./list/MainPages(OGE,EGE,VPR)/OGE";
import { Route, Routes } from "react-router-dom";
import { EGEpg } from "./list/MainPages(OGE,EGE,VPR)/EGE";
import { VPRpg } from "./list/MainPages(OGE,EGE,VPR)/VPR";
import { VAROGE1 } from "./list/variants/1oge";
import { InfoOGE } from "./list/info/infooge";
import { InfoEGE } from "./list/info/infoege";
import { InfoVPR } from "./list/info/infovpr";
import { Join } from "./list/otherpg/join";
import { Forum } from "./list/otherpg/forum";
import { Profile } from "./list/otherpg/profile";
function App() {
  return (
    <Routes>
      <Route path="/" element={<OGEpg />} />
      <Route path="EGE" element={<EGEpg />} />
      <Route path="VPR" element={<VPRpg />} />
      <Route path="infooge" element={<InfoOGE />} />
      <Route path="oge1" element={<VAROGE1 />} />
      <Route path="infoege" element={<InfoEGE />} />
      <Route path="infovpr" element={<InfoVPR />} />
      <Route path="join" element={<Join />} />
      <Route path="forum" element={<Forum />} />
      <Route path="profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
