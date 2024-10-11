
import PersonalInformation from "./PersonalInformation";
import EducationalBackground from "./EducationalBackground";
import SkillsAndTrainings from "./SkillsAndTalents";
import { Routes, Route, Link } from "react-router-dom";
import SummaryInfo from "./SummaryInfo";

export default function TheRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Link to="perinfo">Start</Link>}/>
            <Route path="/perinfo" element={<PersonalInformation/>}/>
            <Route path="/educbg" element={<EducationalBackground/>}/>
            <Route path="/skilltr" element={<SkillsAndTrainings/>}/>
            <Route path="/summaryinfo" element={<SummaryInfo/>}/>
            <Route path="*" element={<h1>Nothing Here..</h1>}/>
        </Routes>
    )
}