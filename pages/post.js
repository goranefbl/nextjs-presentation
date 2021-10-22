import { useEffect, useState } from "react";
import style from "../static/about-us.module.scss";

export default function AboutUs() {
    const [data, setData] = useState(null);
    async function fetchData() {
        const response = await fetch(
            "http://itsgoran.com/wp/wp-json/wp/v2/posts?slug=calls-to-drop-confederate-emblems-spread-nationwide"
        ).then((resp) => resp.json());
        setData(response);
        console.log(response);
    }

    useEffect(() => {
        fetchData();
    }, []);

    console.log("data", data && data[0]?.content?.rendered);

    return (
        <div className={style.someText}>
            <div
                dangerouslySetInnerHTML={{
                    __html: data && data[0]?.content?.rendered,
                }}
            />
        </div>
    );
}
