import ApartmentIcon from "@mui/icons-material/Apartment";
import HotelIcon from "@mui/icons-material/Hotel";
import KingBedIcon from "@mui/icons-material/KingBed";
import LayersIcon from "@mui/icons-material/Layers";
import StairsIcon from "@mui/icons-material/Stairs";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import PersonIcon from "@mui/icons-material/Person";

export const masterItems = [

{
    title:"Room Types",
    description:"Manage hotel room categories.",
    icon:HotelIcon,
    path:"/room-types"
},

{
    title:"Amenities",
    description:"Manage room amenities.",
    icon:KingBedIcon,
    path:"/amenities"
},

{
    title:"Buildings",
    description:"Manage hotel buildings.",
    icon:ApartmentIcon,
    path:"/buildings"
},

{
    title:"Wings",
    description:"Manage building wings.",
    icon:LayersIcon,
    path:"/wings"
},

{
    title:"Floors",
    description:"Manage hotel floors.",
    icon:StairsIcon,
    path:"/floors"
},

{
    title:"Taxes",
    description:"Manage tax configuration.",
    icon:LocalOfferIcon,
    path:"/taxes"
},

{
    title:"Seasons",
    description:"Manage seasonal pricing.",
    icon:CalendarMonthIcon,
    path:"/seasons"
},

{
    title:"Housekeeping Status",
    description:"Manage housekeeping statuses.",
    icon:CleaningServicesIcon,
    path:"/housekeeping-status"
},

{
    title:"Payment Methods",
    description:"Manage payment methods.",
    icon:CreditCardIcon,
    path:"/payment-methods"
},

{
    title:"Guest Types",
    description:"Manage guest categories.",
    icon:PersonIcon,
    path:"/guest-types"
}

];