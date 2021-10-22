import style from "../static/about-us.module.scss";

export default function AboutUs({ title, content }) {
    return (
        <div className={style.someText}>
            <h1>{title}</h1>
            <div
                dangerouslySetInnerHTML={{
                    __html: content,
                }}
            />
        </div>
    );
}

export async function getServerSideProps(ctx) {
    const response = await fetch(
        `http://itsgoran.com/wp/wp-json/wp/v2/posts?slug=calls-to-drop-confederate-emblems-spread-nationwide`
    ).then((resp) => resp.json());

    const content = response[0].content.rendered;

    return {
        props: { title: "goran", content },
    };
}
