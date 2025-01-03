import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((x) => x);

    return (
        <nav aria-label="breadcrumb">
            <ul style={{ display: "flex", listStyle: "none", padding: 0 }}>
                <li>
                    <Link to="/">Home</Link>
                    {pathnames.length > 0 && " / "}
                </li>
                {pathnames.map((value, index) => {
                    const to = `/${pathnames.slice(0, index + 1).join("/")}`;
                    const isLast = index === pathnames.length - 1;

                    return (
                        <li key={to}>
                            {isLast ? (
                                <span>{value}</span>
                            ) : (
                                <Link to={to}>{value}</Link>
                            )}
                            {!isLast && " / "}
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Breadcrumbs;
