import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Hero from "./components/Blog.Hero";
import Featured from "./components/Blog.Featured";
import Categories from "./components/Blog.Categories";
import Articles from "./components/Blog.Articles";
import Newsletter from "./components/Blog.Newsletter";

import "./assets/css/blog.css";

export default function BlogPage() {
    const { t } = useTranslation("blog");
    const { lang = "es" } = useParams();

    return (
        <>
            <Hero t={t} />
            <Featured t={t} lang={lang} />
            <Categories t={t} />
            <Articles t={t} lang={lang} />
            <Newsletter t={t} />
        </>
    );
}
