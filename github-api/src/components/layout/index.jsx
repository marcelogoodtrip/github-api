import React, { Children } from "react";

const Layout = ({ children }) => {
    return (
        <section>
            <header>
                header
                {children}
            </header>
        </section>
    );
}

export default Layout