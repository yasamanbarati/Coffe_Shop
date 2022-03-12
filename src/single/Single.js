import React, { Fragment } from "react";
import Header from "../Header/Header";
import Footer from "../footer/Footer";
import Single_Products from "./Single_Products";

const Single = () => {

    return (
        <Fragment>
            {/* <Header /> */}
            <Single_Products />
            <Footer />
        </Fragment>
    );
}

export default Single;