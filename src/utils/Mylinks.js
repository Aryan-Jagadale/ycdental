export const links = [
  {
    name: "About",
    linkUrl: "/about",
    submenu: true,
    sublinks: [
      {
        Head: "",
        sublink: [
          { name: "Vision & Mission", link: "/about", idd: "visionMission" },
          //{ name: "Mission", link: "/",idd:"visionMission" },
          {
            name: "College Facilities",
            link: "/about",
            idd: "collegeFacilties",
          },
          { name: "Committees", link: "/about", idd: "committees" },
          { name: "Policy", link: "/about", idd: "policy" },
        ],
      },
    ],
  },
  {
    name: "Academics",
    linkUrl: "/academic",
    submenu: true,
    sublinks: [
      {
        Head: "",
        sublink: [
          { name: "UG Course", link: "/academic", idd: "ugCourse" },
          { name: "PG Course", link: "/academic", idd: "ugCourse" },
          {
            name: "Academic Quality",
            link: "/academic",
            idd: "academicQuality",
          },
          { name: "Laboratories", link: "/academic", idd: "lab" },
          { name: "Departments", link: "/academic", idd: "deptarments" },
          { name: "Publications", link: "/academic", idd: "publications" },
        ],
      },
    ],
  },
  {
    name: "Admission",
    linkUrl: "/admission",
    submenu: true,
    sublinks: [
      {
        Head: "",
        sublink: [
          { name: "Dean's Desk", link: "/admission", idd: "deanDesk" },
          { name: "Prospectus", link: "/admission", idd: "prosPectus" },
          { name: "BDS Admission", link: "/admission", idd: "bdsAdmission" },
          { name: "BDS Syllabus", link: "/admission", idd: "bdsAdmission" },
          { name: "MDS Admission", link: "/admission", idd: "bdsAdmission" },
          { name: "PHD Admission", link: "/admission", idd: "bdsAdmission" },
          {
            name: "Student Welfare",
            link: "/admission",
            idd: "studentWelfare",
          },
        ],
      },
    ],
  },

  {
    name: "NAAC",
    submenu: false,
    linkUrl: "/naac",
    sublinks: [
      {
        Head: "",
        sublink: [
          { name: "IQAC", link: "sdfg", idd: "deanDesk" },
          { name: "IIQA", link: "joker", idd: "prosPectus" },
          { name: "DVV", link: "joker", idd: "prosPectus" },
          { name: "SSR", link: "joker", idd: "prosPectus" },
          {
            name: "SSR Links",
            link: "joker",
            idd: "prosPectus",
            subSubLink: [
              { name: "Quality Indicator Framework", link: "" },
              { name: "Extended Profile", link: "" },
            ],
          },
        ],
      },
    ],
  },
];
