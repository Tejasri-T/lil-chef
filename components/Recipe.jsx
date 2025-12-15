import Markdown from "react-markdown";

export default function recipe(props) {
return (
    <section id="recipe-section">
        
        <article className="suggested-recipe-container" aria-live="polite">
            <h2>Suggested Recipe:</h2>
            <Markdown>{props.recipe}</Markdown>
        </article>
    </section>
)
}   