import React from "react";
import { libraryCommittee } from "../../../utils/Committees";
import Faculties from "../../DepartmentPage/Department/Faculties";
import "../../../index.css";


const Library = () => {
    return (
        <div className="grievance font-fam tracking-wide">
            <h2 className="m-4 text-2xl font-bold text-black text-center">
                Library Committee
            </h2>
            <Faculties facLink={libraryCommittee} />
            <div className="flex items-center justify-center m-2">
                Email to:
                <a
                    href="mailto:yash_dental@rediffmail.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-black text-base font-bold tracking-wide text-center dark:text-neutral-200"
                >
                    yash_dental@rediffmail.com
                </a>
            </div>
        </div>
    );
};

export default Library;
