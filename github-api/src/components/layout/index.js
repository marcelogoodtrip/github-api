import React, { Children } from "react";

function Layout({ children }) {
    return (
        <section>
            <header>
                header
                {children}
            </header>
        </section>
    )
}

export default Layout