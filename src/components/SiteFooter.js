import React from "react";
import NewsletterForm from "./NewsletterForm";
import "./SiteFooter.css"

export default function SiteFooter(){
    return <footer className="site-footer">
        <span>footer text</span>
        <NewsletterForm/>
    </footer>;
}