import { IconType } from "react-icons";
import { FaChalkboardTeacher, FaHome, FaRegCalendarAlt } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { PiStudentFill, PiExam, PiUserCircleDuotone } from "react-icons/pi";
import { RiParentFill, RiBookShelfFill, RiSettings2Line } from "react-icons/ri";
import { SiGoogleclassroom } from "react-icons/si";
import { HiOutlineSpeakerphone, HiOutlineLogout } from "react-icons/hi";
import { MdOutlinePlayLesson, MdAssignmentAdd, MdOutlineMessage, MdSearch } from "react-icons/md";
import { GrScorecard } from "react-icons/gr";

interface IconMap{
    [key: string]: IconType|string;
}

export const iconMap:IconMap = {
    'home': FaHome,
    'teacher': FaChalkboardTeacher,
    'student': PiStudentFill,
    "parent": RiParentFill,
    "subject": RiBookShelfFill,
    "class": SiGoogleclassroom,
    "lesson": MdOutlinePlayLesson,
    "exam": PiExam,
    "assignment": MdAssignmentAdd,
    "result": GrScorecard,
    "attendance": FaPeopleGroup,
    "calendar": FaRegCalendarAlt,
    "message": MdOutlineMessage,
    "announcement": HiOutlineSpeakerphone,
    "profile": PiUserCircleDuotone,
    "setting": RiSettings2Line,
    "logout": HiOutlineLogout,
};

export const searchIcon = MdSearch;