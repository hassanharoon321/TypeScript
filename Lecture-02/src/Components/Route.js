
import Headlines from './Headlines';
import App from "../App"
import PersonalDetails from "./PersonalDetails"
import ProfessionalDetails from "./ProfessionalDetails"
import QualifcicationDetails from "./QualifcicationDetails"


const Routes = [
    {
        path: "/",
        name: '',
        exact: true,
        pageTitle: "",
        component: App
    },
    {
        path: "/headlines",
        name: 'headlines',
        exact: true,
        pageTitle: "headlines",
        component: Headlines
    },
    {
        path: "/personaldetails",
        name: 'personaldetails',
        exact: true,
        pageTitle: "personaldetails",
        component: PersonalDetails
    },
    {
        path: "/professionaldetails",
        name: 'professionaldetails',
        exact: true,
        pageTitle: "professionaldetails",
        component: ProfessionalDetails
    },
    {
        path: "/qualificationdetails",
        name: 'qualificationdetails',
        exact: true,
        pageTitle: "qualificationdetails",
        component: QualifcicationDetails
    },
    
];

export default Routes;